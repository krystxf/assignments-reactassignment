import { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input``;

export type InputProps = {
    initialValue: string;
    onChange: (value: string) => void;
};

export const Input = (props: InputProps): JSX.Element => {
    const [value, setValue] = useState(props.initialValue);

    const handleChange = (value: string) => {
        setValue(value);
        props.onChange(value);
    };

    return (
        <StyledInput
            value={value}
            onChange={(e) => {
                handleChange(e.currentTarget.value);
            }}
        />
    );
};
