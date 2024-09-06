import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

interface IChartProps {
    coinId: string;
}
interface IHistory {
    time_open: number;
    time_close: number;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
    market_cap: number;
}

export default function Chart({ coinId }: IChartProps) {
    const isDark = useRecoilValue(isDarkAtom);
    /*
        chart 정보 표시를 위해 coinId를 가져오는 방법
        1. useParams : router에서 가져오기
            -> 하지만 이미 coin 컴포넌트 안에 있음
        2. props로 가져오기
    */
    const { isLoading, data } = useQuery<IHistory[]>(
        [
            "history",
            coinId,
            {
                refetchInterval: 10000,
            },
        ],
        () => fetchCoinHistory(coinId)
    );

    return (
        <div>
            {isLoading ? (
                "Loading chart..."
            ) : (
                <ApexChart
                    type="candlestick"
                    series={[
                        {
                            name: "Price",
                            data:
                                data?.map((price) => {
                                    return {
                                        x: price.close,
                                        y: [
                                            Number(price.open).toFixed(2),
                                            Number(price.high).toFixed(2),
                                            Number(price.low).toFixed(2),
                                            Number(price.close).toFixed(2),
                                        ],
                                    };
                                }) || [],
                        },
                    ]}
                    options={{
                        theme: {
                            mode: isDark ? "dark" : "light",
                        },
                        chart: {
                            height: 300,
                            width: 500,
                            toolbar: {
                                show: false,
                            },
                            background: "transparent",
                        },
                        grid: {
                            show: false,
                        },
                        xaxis: {
                            labels: {
                                show: false,
                            },
                            axisTicks: {
                                show: false,
                            },
                            axisBorder: {
                                show: false,
                            },
                        },
                        yaxis: {
                            show: false,
                        },
                        plotOptions: {
                            candlestick: {
                                colors: {
                                    upward: "#e84393",
                                    downward: "#0984e3",
                                },
                            },
                        },
                    }}
                />
            )}
        </div>
    );
}
