import { useParams } from "react-router-dom";

interface RouteParamsI {
    coinId: string;
}

export default function Coin() {
    const { coinId } = useParams<RouteParamsI>();
    return <h1>Coin: {coinId}</h1>;
}
