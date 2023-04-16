import React, { useState } from "react";
import styled from "styled-components";

import { Input } from "../Input";
import { FormResetButton } from "./FormResetButton";
import { FormSubmitButton } from "./FormSubmitButton";

const StyledForm = styled.form`
    display: flex;
`;

export type FormProps = {
    initialValue: string;
    onSubmit: (data: string) => void;
    onCancel: () => void;
};

export const Form: React.FC<FormProps> = (props) => {
    const [value, setValue] = useState(props.initialValue);

    const handleSubmit = () => {
        props.onSubmit(value);
    };

    const handleCancel = () => {
        props.onCancel();
    };

    const handleInputChange = (inputValue: string) => {
        setValue(inputValue);
    };

    return (
        <StyledForm
            onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
            }}
            onReset={handleCancel}
        >
            <Input initialValue={props.initialValue} onChange={handleInputChange} />

            <FormSubmitButton />
            <FormResetButton />
        </StyledForm>
    );
};
