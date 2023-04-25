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
    flex-wrap: wrap;
    row-gap: 8px;
    align-items: center;
    justify-content: space-between;
    min-height: 40px;
    padding: 4px 10px;
    border-bottom: ${(props) => `1px solid ${props.theme.colors.blackA6}`};
    margin-bottom: 10px;

    h1 {
        font-weight: 500;
        font-size: 1.5rem;
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
