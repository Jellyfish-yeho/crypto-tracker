import { useHistory } from "react-router-dom";
import {
    IconEl,
    HeaderEl,
    TitleEl,
    ToggleEl,
    ToggleContainerEl,
} from "../style/CoinStyle";
import { isDarkAtom } from "../atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";

interface IHeaderProps {
    pageTitle: string;
}

const Header: React.FC<IHeaderProps> = ({ pageTitle }) => {
    const isDark = useRecoilValue(isDarkAtom);
    const setDarkAtom = useSetRecoilState(isDarkAtom);
    const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
    const history = useHistory();
    const handleBackClick = () => {
        history.goBack();
    };
    const handleHomeClick = () => {
        history.push("/");
    };
    return (
        <>
            <ToggleContainerEl>
                <ToggleEl isDark={isDark} onClick={toggleDarkAtom}>
                    Mode
                </ToggleEl>
            </ToggleContainerEl>
            <HeaderEl>
                <IconEl onClick={handleBackClick}>
                    <span className="material-symbols-outlined">
                        arrow_back
                    </span>
                </IconEl>
                <TitleEl>{pageTitle}</TitleEl>
                <IconEl onClick={handleHomeClick}>
                    <span className="material-symbols-outlined">home</span>
                </IconEl>
            </HeaderEl>
        </>
    );
};

export default Header;
