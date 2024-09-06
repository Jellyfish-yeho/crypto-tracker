const BASE_URL = "https://api.coinpaprika.com/v1";
/*
    react-query 사용을 위한 fetcher function 
    - promise 를 리턴해야 함
*/
//coins
export function fetchCoins() {
    return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}
//coin
export function fetchCoinInfo(coinId: string) {
    return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
        response.json()
    );
}
export function fetchCoinPrice(coinId: string) {
    return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
        response.json()
    );
}
//chart
export function fetchCoinHistory(coinId: string) {
    // const endDate= Math.floor(Date.now() / 1000); //오늘
    // const startDate = endDate - 60*60*24*7 //1주일전
    return fetch(
        `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
    ).then((response) => response.json());
}
