import styled from "styled-components";

const ContainerEl = styled.div`
    padding: 0 20px;
    max-width: 480px;
    margin: 0 auto;
`;
const HeaderEl = styled.header`
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const CoinListEl = styled.ul``;
const CoinEl = styled.li`
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.bgColor};
    border: 1px solid ${(props) => props.theme.textColor};
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
        font-weight: 700;
    }
`;
const TitleEl = styled.h1`
    font-size: 48px;
    color: ${(props) => props.theme.accentColor};
`;

const LoaderEl = styled.div`
    text-align: center;
`;
const ImgEl = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 10px;
`;

const OverviewEl = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${(props) => props.theme.bgColor};
    border: 1px solid ${(props) => props.theme.textColor};
    padding: 10px 20px;
    border-radius: 10px;
`;
const OverviewItemEl = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    span:first-child {
        font-size: 10px;
        font-weight: 400;
        text-transform: uppercase;
        margin-bottom: 5px;
    }
`;
const DescriptionEl = styled.p`
    margin: 20px 0px;
`;
const TabsEl = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 25px 0px;
    gap: 10px;
`;

const TabEl = styled.span<{ isActive: boolean }>`
    text-align: center;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 400;
    background-color: ${(props) => props.theme.bgColor};
    border: 1px solid ${(props) => props.theme.textColor};
    padding: 7px 0px;
    border-radius: 10px;
    color: ${(props) =>
        props.isActive ? props.theme.accentColor : props.theme.textColor};
    a {
        display: block;
    }
`;
const IconEl = styled.button`
    color: ${(props) => props.theme.textColor};
    cursor: pointer;
`;
interface IColorProp {
    colorData: number;
}
const InfoContainerEl = styled.div<IColorProp>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: ${(props) => props.theme.bgColor};
    border: 1px solid ${(props) => props.theme.textColor};
    border-radius: 10px;
    margin-bottom: 5px;
    h4 {
        font-weight: 700;
    }
    span {
        color: ${(props) => (props.colorData === 1 ? "#0984e3" : "#e84393")};
    }
`;

const ToggleContainerEl = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 10px 0;
`;
interface IThemeProp {
    isDark: boolean;
}
const ToggleEl = styled.button<IThemeProp>`
    position: relative;
    border-radius: 5px;
    background-color: ${(props) => props.theme.bgColor};
    border: 1px solid ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.textColor};
    padding: 5px 25px 5px 10px;
    &::after {
        position: absolute;
        content: "${(props) => (props.isDark ? "🌚" : "🌞")}";
        top: 41%;
        transform: translateY(-50%);
        right: 8px;
        width: 16px;
        height: 16px;
        z-index: 1;
    }
`;
export {
    ContainerEl,
    CoinEl,
    CoinListEl,
    DescriptionEl,
    HeaderEl,
    ImgEl,
    LoaderEl,
    OverviewEl,
    OverviewItemEl,
    TabEl,
    TabsEl,
    TitleEl,
    IconEl,
    InfoContainerEl,
    ToggleContainerEl,
    ToggleEl,
};
