import React, { useState } from "react";
import styled from "styled-components";
import { InputProps } from "./types";

const StyledInput = styled.input`
    border-radius: 4px;
    padding: 4px 12px;
    outline: none;
    border: ${(props) => `1px solid ${props.theme.colors.blackA7}`};

    &:focus {
        border: ${(props) => `1px solid ${props.theme.colors.blackA9}`};
    }
`;

export const Input = (props: InputProps): JSX.Element => {
    const [value, setValue] = useState(props.initialValue);

    return (
        <StyledInput
            value={value}
            onChange={(e) => {
                const value = e.currentTarget.value;
                setValue(value);
                props.handleInputChange(value);
            }}
        />
    );
};
