import styled from "styled-components";

export const Layout = styled.main`
    background-color: white;
    padding: 20px;
    border: 1px solid;
    border-color: ${(props) => props.theme.colors.blackA6};
    border-radius: 5px;
    width: 100%;
    margin: 0 30px;
    max-width: 600px;
    min-height: 50vh;
    display: flex;
    flex-direction: column;

    footer {
        margin-top: auto;
        align-self: flex-end;
    }
`;
