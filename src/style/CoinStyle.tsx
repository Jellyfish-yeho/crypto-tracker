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
    background-color: rgba(0, 0, 0, 0.5);
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
    background-color: rgba(0, 0, 0, 0.5);
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
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    margin-bottom: 5px;
    h4 {
        font-weight: 700;
    }
    span {
        color: ${(props) => (props.colorData === 1 ? "#0984e3" : "#e84393")};
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
};
