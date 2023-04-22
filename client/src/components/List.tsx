import React from "react";
import type { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const List: React.FC<PropsWithChildren> = ({ children }) => {
    return <StyledDiv>{children}</StyledDiv>;
};
