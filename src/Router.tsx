import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

interface IRouterProps {
    toggleDark: () => void;
}

export default function Router({ toggleDark }: IRouterProps) {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/:coinId">
                    <Coin toggleDark={toggleDark} />
                </Route>
                <Route path="/">
                    <Coins toggleDark={toggleDark} />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
