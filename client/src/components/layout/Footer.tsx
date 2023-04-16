import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    margin-top: 15px;
    padding-top: 15px;
  
    border-top: 1px solid;
    border-color: ${(props) => props.theme.colors.olive6};
`;

export type FooterProps = {
    todoItemCount?: number;
    doneItemCount?: number;
};

export const Footer: React.FC<FooterProps> = ({ todoItemCount }) => (
    <StyledFooter>
        Todo: {todoItemCount}
        Done: {todoItemCount}
    </StyledFooter>
);
