import styled from "styled-components";

export const ContainerEl = styled.div`
    padding: 0 20px;
    max-width: 480px;
    margin: 0 auto;
`;
export const HeaderEl = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const CoinListEl = styled.ul``;
export const CoinEl = styled.li`
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
export const TitleEl = styled.h1`
    font-size: 48px;
    color: ${(props) => props.theme.accentColor};
`;
export const LoaderEl = styled.div`
    text-align: center;
`;
export const ImgEl = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 10px;
`;

export const OverviewEl = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px 20px;
    border-radius: 10px;
`;
export const OverviewItemEl = styled.div`
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
export const DescriptionEl = styled.p`
    margin: 20px 0px;
`;
export const TabsEl = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 25px 0px;
    gap: 10px;
`;

export const TabEl = styled.span<{ isActive: boolean }>`
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
