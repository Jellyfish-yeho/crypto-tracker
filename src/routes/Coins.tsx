import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    CoinEl,
    CoinListEl,
    ContainerEl,
    HeaderEl,
    ImgEl,
    LoaderEl,
    TitleEl,
} from "../style/CoinStyle";

interface CoinInterface {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}

export default function Coins() {
    const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            const response = await fetch(
                "https://api.coinpaprika.com/v1/coins"
            );
            const json = await response.json();
            setCoins(json.slice(0, 10));
            setLoading(false);
        })(); //함수 바로 실행 ()()
    }, []);
    return (
        <ContainerEl>
            <HeaderEl>
                <TitleEl>COIN</TitleEl>
            </HeaderEl>
            {loading ? (
                <LoaderEl>loading...⏱️</LoaderEl>
            ) : (
                <CoinListEl>
                    {coins.map((coin) => (
                        <CoinEl key={coin.id}>
                            <Link
                                to={{
                                    pathname: `/${coin.id}`,
                                    state: { name: coin.name },
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
