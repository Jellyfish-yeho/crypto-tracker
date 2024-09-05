import { useLocation, useParams } from "react-router-dom";
import { ContainerEl, HeaderEl, LoaderEl, TitleEl } from "../style/CoinStyle";
import { useState } from "react";

interface RouteParamsI {
    coinId: string;
}

interface RouteStateI {
    name: string;
}

export default function Coin() {
    //
    const { coinId } = useParams<RouteParamsI>();
    const [loading, setLoading] = useState(true);

    //API 요청할 필요 없이, 목록 화면에서 바로 name을 가져온다.
    //하지만 바로 링크를 통해 접속한 경우 state가 만들어지지 않아서 에러가 나므로 방어가 필요
    const { state } = useLocation<RouteStateI>(); //Link 에 보낸 state값도 같이 들어옴

    return (
        <ContainerEl>
            <HeaderEl>
                <TitleEl>{state?.name || "Loading..."}</TitleEl>
            </HeaderEl>
            {loading ? <LoaderEl>loading...⏱️</LoaderEl> : null}
        </ContainerEl>
    );
}
