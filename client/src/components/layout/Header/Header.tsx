import React from "react";
import styled from "styled-components";

import { TodoItem } from "../../../types";
import { HeaderAddButton } from "./HeaderAddButton";

const StyledHeader = styled.header`
    display: flex;

    button {
        all: unset;

        width: 25px;
        height: 25px;

        color: #fff;

        background-color: ${(props) => props.theme.colors.grass9};
        border: 1px solid;
        border-color: ${(props) => props.theme.colors.olive9};
        border-radius: 50%;
    }
`;

export type HeaderProps = {
    children: React.ReactNode;
    onAdd: (todoLabel: TodoItem["title"]) => void;
};

export const Header: React.FC<HeaderProps> = ({ children }) => {
    return (
        <StyledHeader>
            <h1>{children}</h1>
            <HeaderAddButton onClick={() => console.warn("unimplemented")} />
        </StyledHeader>
    );
};
