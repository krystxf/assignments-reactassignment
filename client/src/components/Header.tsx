import React, { useState } from "react";
import type { PropsWithChildren } from "react";
import styled from "styled-components";
import { PlusIcon } from "@radix-ui/react-icons";
import { Form } from "./form";
import Button from "./Button";

export type HeaderProps = PropsWithChildren<{
    handleAddItem: (title: string) => Promise<void>;
}>;

const StyledDiv = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        all: unset;
        border-radius: 50%;
        border: 1px solid;
        border-color: ${(props) => props.theme.colors.olive9};
        background-color: ${(props) => props.theme.colors.grass9};
        color: #fff;
        width: 25px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Header: React.FC<HeaderProps> = ({ handleAddItem, children }) => {
    const [showForm, setShowForm] = useState<boolean>(false);

    const handleSubmit = async (title: string) => {
        await handleAddItem(title);
        setShowForm(false);
    };

    return (
        <StyledDiv>
            <h1>{children}</h1>

            {showForm ? (
                <Form handleSubmit={handleSubmit} handleCancel={() => setShowForm(false)} initialValue="" />
            ) : (
                <Button onClick={() => setShowForm(true)}>
                    <PlusIcon />
                </Button>
            )}
        </StyledDiv>
    );
};
