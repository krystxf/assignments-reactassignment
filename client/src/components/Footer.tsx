import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid;
    border-color: ${(props) => props.theme.colors.olive6};
`;

export type FooterProps = {
    todoItems?: number;
    doneItems?: number;
};
export const Footer: React.FC<FooterProps> = ({ todoItems = 0, doneItems = 0 }) => (
    <StyledFooter>
        <span>Todo: {todoItems}</span>
        <span>Done: {doneItems}</span>
    </StyledFooter>
);
