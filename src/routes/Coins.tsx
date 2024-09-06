import { Link } from "react-router-dom";
import {
    CoinEl,
    CoinListEl,
    ContainerEl,
    ImgEl,
    LoaderEl,
} from "../style/CoinStyle";
import { useQuery } from "react-query";
import { fetchCoins } from "../api";
import { Helmet } from "react-helmet";
import Header from "../components/Header";

interface ICoin {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}

export default function Coins() {
    //useQuery(고유 키값, fetcher 함수)
    //데이터를 캐시에 저장해두기 때문에, 뒤로가기 해도 로딩이 발생하지 않음
    const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);

    return (
        <ContainerEl>
            {/* document head */}
            <Helmet>
                <title>COIN</title>
                <link
                    rel="icon"
                    type="image/png"
                    href={`${process.env.PUBLIC_URL}/icon.jpg`}
                    sizes="16x16"
                />
            </Helmet>
            <Header pageTitle="💰COIN💰" />
            {isLoading ? (
                <LoaderEl>loading...⏱️</LoaderEl>
            ) : (
                <CoinListEl>
                    {data?.slice(0, 100).map((coin) => (
                        <CoinEl key={coin.id}>
                            <Link
                                to={{
                                    pathname: `/${coin.id}`,
                                    state: {
                                        name: coin.name,
                                    },
                                }}
                            >
                                <ImgEl
                                    src={`https://static.coinpaprika.com/coin/${coin.id}/logo.png`}
                                    alt={coin.name}
                                />
                                <span>{coin.name}</span>
                                <span className="material-symbols-outlined">
                                    keyboard_arrow_right
                                </span>
                            </Link>
                        </CoinEl>
                    ))}
                </CoinListEl>
            )}
        </ContainerEl>
    );
}
