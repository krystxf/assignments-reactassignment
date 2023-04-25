import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    border: ${(props) => `1px solid ${props.theme.colors.blackA7}`};
    border-radius: 4px;
    background-color: ${(props) => props.theme.colors.olive3};
    transition: all 0.1s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.colors.olive4};

        &[type="submit"] {
            background-color: ${(props) => props.theme.colors.grass8};
        }

        &.danger {
            background-color: ${(props) => props.theme.colors.redA9};
        }
    }

    &[type="submit"] {
        background-color: ${(props) => props.theme.colors.grass9};
        color: white;
    }

    &.danger {
        background-color: ${(props) => props.theme.colors.redA8};
        color: white;
    }
`;

const Button: React.FC<ComponentPropsWithoutRef<"button">> = ({ children, ...btnProps }) => {
    return <StyledButton {...btnProps}>{children}</StyledButton>;
};

export default Button;
