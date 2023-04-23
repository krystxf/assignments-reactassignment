import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    padding: 4px 8px;
`;

const Button: React.FC<React.ComponentPropsWithoutRef<"button">> = ({ children, ...btnProps }) => {
    return <StyledButton {...btnProps}>{children}</StyledButton>;
};

export default Button;
