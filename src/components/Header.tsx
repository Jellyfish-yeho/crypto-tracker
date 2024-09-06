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
    const handleCopyUrl = () => {
        navigator.clipboard
            .writeText(window.location.href)
            .then(() => {
                alert("Link Copied!");
            })
            .catch((err) => {
                console.log("Failed to copy link: ", err);
            });
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
                <IconEl onClick={handleCopyUrl}>
                    <span className="material-symbols-outlined">
                        content_copy
                    </span>
                </IconEl>
            </HeaderEl>
        </>
    );
};

export default Header;
