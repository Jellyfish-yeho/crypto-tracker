import { useHistory } from "react-router-dom";
import { IconEl, HeaderEl, TitleEl } from "../style/CoinStyle";

interface IHeaderProps {
    pageTitle: string;
}

const Header: React.FC<IHeaderProps> = ({ pageTitle }) => {
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
        <HeaderEl>
            <IconEl onClick={handleBackClick}>
                <span className="material-symbols-outlined">arrow_back</span>
            </IconEl>
            <TitleEl>{pageTitle}</TitleEl>
            <IconEl onClick={handleCopyUrl}>
                <span className="material-symbols-outlined">content_copy</span>
            </IconEl>
        </HeaderEl>
    );
};

export default Header;
