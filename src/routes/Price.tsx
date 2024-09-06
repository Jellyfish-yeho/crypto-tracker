import { useQuery } from "react-query";
import { fetchCoinPrice } from "../api";
import { InfoContainerEl } from "../style/CoinStyle";

interface IPriceProps {
    coinId: string;
}
interface IPriceData {
    quotes: {
        USD: {
            percent_change_1h: number;
            percent_change_6h: number;
            percent_change_12h: number;
            percent_change_24h: number;
            percent_change_30m: number;
            percent_from_price_ath: number;
            price: number;
        };
    };
}

export default function Price({ coinId }: IPriceProps) {
    const { isLoading, data } = useQuery<IPriceData>(
        ["tickers", coinId],
        () => fetchCoinPrice(coinId),
        { refetchInterval: 5000 }
    );
    return (
        <div>
            {isLoading ? (
                "Loading Price..."
            ) : (
                <>
                    <InfoContainerEl
                        colorData={Math.sign(data?.quotes.USD.price || 0)}
                    >
                        <h4>Price</h4>
                        <span>$ {data?.quotes.USD.price.toFixed(2)}</span>
                    </InfoContainerEl>
                    <InfoContainerEl
                        colorData={Math.sign(
                            data?.quotes.USD.percent_from_price_ath || 0
                        )}
                    >
                        <h4>Max. Change Rate (24h)</h4>
                        <span>
                            ${" "}
                            {data?.quotes.USD.percent_from_price_ath.toFixed(2)}
                        </span>
                    </InfoContainerEl>
                    <InfoContainerEl
                        colorData={Math.sign(
                            data?.quotes.USD.percent_change_30m || 0
                        )}
                    >
                        <h4>Change Rate (30m)</h4>
                        <span>
                            $ {data?.quotes.USD.percent_change_30m.toFixed(2)}
                        </span>
                    </InfoContainerEl>
                    <InfoContainerEl
                        colorData={Math.sign(
                            data?.quotes.USD.percent_change_1h || 0
                        )}
                    >
                        <h4>Change Rate (1h)</h4>
                        <span>
                            $ {data?.quotes.USD.percent_change_1h.toFixed(2)}
                        </span>
                    </InfoContainerEl>
                    <InfoContainerEl
                        colorData={Math.sign(
                            data?.quotes.USD.percent_change_12h || 0
                        )}
                    >
                        <h4>Change Rate (12h)</h4>
                        <span>
                            $ {data?.quotes.USD.percent_change_12h.toFixed(2)}
                        </span>
                    </InfoContainerEl>
                    <InfoContainerEl
                        colorData={Math.sign(
                            data?.quotes.USD.percent_change_24h || 0
                        )}
                    >
                        <h4>Change Rate (24h)</h4>
                        <span>
                            $ {data?.quotes.USD.percent_change_24h.toFixed(2)}
                        </span>
                    </InfoContainerEl>
                </>
            )}
        </div>
    );
}
