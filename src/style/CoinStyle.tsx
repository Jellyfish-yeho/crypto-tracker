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
