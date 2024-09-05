import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ContainerEl = styled.div`
    padding: 0 20px;
    max-width: 480px;
    margin: 0 auto;
`;
const HeaderEl = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CoinListEl = styled.ul``;

const CoinEl = styled.li`
    background-color: white;
    color: ${(props) => props.theme.bgColor};
    border-radius: 20px;
    margin-bottom: 10px;
    &:hover {
        a {
            color: ${(props) => props.theme.accentColor};
        }
    }
    a {
        display: flex;
        align-items: center;
        padding: 20px;
        transition: color 0.3s ease-in;
    }
`;

const TitleEL = styled.h1`
    font-size: 48px;
    color: ${(props) => props.theme.accentColor};
`;

const LoaderEl = styled.div`
    text-align: center;
`;

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
                <TitleEL>COIN</TitleEL>
            </HeaderEl>
            {loading ? (
                <LoaderEl>loading...⏱️</LoaderEl>
            ) : (
                <CoinListEl>
                    {coins.map((coin) => (
                        <CoinEl key={coin.id}>
                            <Link to={`/${coin.id}`}>
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
