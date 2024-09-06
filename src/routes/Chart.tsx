import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import moment from "moment";

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
                    type="line"
                    series={[
                        {
                            name: "Price",
                            data:
                                data?.map((price) => Number(price.close)) || [],
                        },
                    ]}
                    options={{
                        theme: {
                            mode: "dark",
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
                        stroke: {
                            curve: "smooth",
                            width: 2,
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
                            type: "datetime",
                            categories: data?.map((price) =>
                                moment(new Date(price.time_close)).format(
                                    "YYYY-MM-DD hh:ss"
                                )
                            ),
                        },
                        yaxis: {
                            show: false,
                        },
                        fill: {
                            type: "gradient",
                            gradient: {
                                gradientToColors: ["#6c5ce7"],
                                stops: [0, 100],
                            },
                        },
                        colors: ["#fdcb6e"],
                        tooltip: {
                            y: {
                                formatter: (value) => `$ ${value.toFixed(2)}`,
                            },
                        },
                    }}
                />
            )}
        </div>
    );
}
