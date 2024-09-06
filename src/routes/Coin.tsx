import {
    Link,
    Route,
    Switch,
    useLocation,
    useParams,
    useRouteMatch,
} from "react-router-dom";
import {
    ContainerEl,
    HeaderEl,
    LoaderEl,
    OverviewEl,
    TitleEl,
    OverviewItemEl,
    DescriptionEl,
    TabsEl,
    TabEl,
} from "../style/CoinStyle";
import { useEffect, useState } from "react";
import Price from "./Price";
import Chart from "./Chart";
import { useQuery } from "react-query";
import { fetchCoinInfo, fetchCoinPrice } from "../api";

interface IRouteParams {
    coinId: string;
}
interface IRouteState {
    name: string;
}

//array의 경우 object로 표현되며, 각각을 interface로 만들어 내부 요소를 설명해 줘야 함.
interface IInfoData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    logo: string;
    description: string;
    message: string;
    open_source: boolean;
    started_at: string;
    development_status: string;
    hardware_wallet: boolean;
    proof_type: string;
    org_structure: string;
    hash_algorithm: string;
    first_data_at: string;
    last_data_at: string;
}

interface IPriceData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
        USD: {
            ath_date: string;
            ath_price: number;
            market_cap: number;
            market_cap_change_24h: number;
            percent_change_1h: number;
            percent_change_1y: number;
            percent_change_6h: number;
            percent_change_7d: number;
            percent_change_12h: number;
            percent_change_15m: number;
            percent_change_24h: number;
            percent_change_30d: number;
            percent_change_30m: number;
            percent_from_price_ath: number;
            price: number;
            volume_24h: number;
            volume_24h_change_24h: number;
        };
    };
}

export default function Coin() {
    /*
        name 설정하기
        1. 홈 화면에서 접속한 경우: api 요청할 필요 없이 목록 화면에서 바로 name 가져옴. = useLocation > state (Coins에서 Link에 넣은 값)
        2. 바로 링크를 통해 접속한 경우: state가 없기 때문에 api로 가져옴. 
    */

    const { coinId } = useParams<IRouteParams>();
    const { state } = useLocation<IRouteState>(); //Link 에 보낸 state값도 같이 들어옴

    const { isLoading: infoLoading, data: infoData } = useQuery<IInfoData>(
        ["info", coinId],
        () => fetchCoinInfo(coinId)
    );
    const { isLoading: tickersLoading, data: tickersData } =
        useQuery<IPriceData>(["tickers", coinId], () => fetchCoinPrice(coinId));

    const priceMatch = useRouteMatch("/:coinId/price");
    const chartMatch = useRouteMatch("/:coinId/chart");

    //hook 안에서 사용한 것에 대해서는 dependency를 넣어야 한다.
    //하지만 우리의 coinId는 url에 있기 때문에 절대 변하지 않고, hook은 1번만 실행될 것임.

    const loading = infoLoading || tickersLoading;

    return (
        <ContainerEl>
            <HeaderEl>
                <TitleEl>
                    {state?.name
                        ? state.name
                        : loading
                        ? "Loading..."
                        : infoData?.name}
                </TitleEl>
            </HeaderEl>
            {loading ? (
                <LoaderEl>loading...⏱️</LoaderEl>
            ) : (
                <>
                    <OverviewEl>
                        <OverviewItemEl>
                            <span>Rank:</span>
                            <span>{infoData?.rank}</span>
                        </OverviewItemEl>
                        <OverviewItemEl>
                            <span>Symbol:</span>
                            <span>${infoData?.symbol}</span>
                        </OverviewItemEl>
                        <OverviewItemEl>
                            <span>Open Source:</span>
                            <span>{infoData?.open_source ? "Yes" : "No"}</span>
                        </OverviewItemEl>
                    </OverviewEl>
                    <DescriptionEl>{infoData?.description}</DescriptionEl>
                    <OverviewEl>
                        <OverviewItemEl>
                            <span>Total Suply:</span>
                            <span>{tickersData?.total_supply}</span>
                        </OverviewItemEl>
                        <OverviewItemEl>
                            <span>Max Supply:</span>
                            <span>{tickersData?.max_supply}</span>
                        </OverviewItemEl>
                    </OverviewEl>

                    <TabsEl>
                        <TabEl isActive={chartMatch !== null}>
                            <Link to={`/${coinId}/chart`}>Chart</Link>
                        </TabEl>
                        <TabEl isActive={priceMatch !== null}>
                            <Link to={`/${coinId}/price`}>Price</Link>
                        </TabEl>
                    </TabsEl>

                    {/* 
                        Nested Router 
                        - 굳이 `${coinId}` 로 가져올 필요 없이 :coinId로 가져오기 가능.
                    */}
                    <Switch>
                        <Route path={`/:coinId/price`}>
                            <Price />
                        </Route>
                        <Route path={`/:coinId/chart`}>
                            <Chart />
                        </Route>
                    </Switch>
                </>
            )}
        </ContainerEl>
    );
}
