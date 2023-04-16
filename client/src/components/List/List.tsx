import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledList = styled.div`
    display: flex;
    flex-direction: column;
`;

export type ListProps = {
    children?: ReactNode;
};

export const List: React.FC<ListProps> = ({ children }) => <StyledList>{children}</StyledList>;
