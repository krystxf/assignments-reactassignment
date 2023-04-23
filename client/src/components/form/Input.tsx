import React, { useState } from "react";
import styled from "styled-components";
import { InputProps } from "./types";

const StyledInput = styled.input`
    border-radius: 12px;
    padding: 4px 12px;
    outline: none;
    border-width: 1px;
    border-color: gray;

    &:focus {
        border: 1px solid #0ea5e9;
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
