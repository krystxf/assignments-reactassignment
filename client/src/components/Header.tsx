import React, { useState } from "react";
import styled from "styled-components";
import { PlusIcon } from "@radix-ui/react-icons";
import { Form } from "./form";

export type HeaderProps = {
    children: React.ReactNode;
};

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

export const Header: React.FC<HeaderProps> = ({ children }) => {
    const [showForm, setShowForm] = useState<boolean>(false);

    const createItem = async (title: string): Promise<void> => {
        const res = await fetch("http://localhost:3000/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                done: false,
            }),
        });

        if (res.ok) setShowForm(false);

        return;
    };

    return (
        <StyledDiv>
            <h1>{children}</h1>

            {showForm ? (
                <Form handleSubmit={createItem} handleCancel={() => setShowForm(false)} initialValue="" />
            ) : (
                <button onClick={() => setShowForm(true)}>
                    <PlusIcon />
                </button>
            )}
        </StyledDiv>
    );
};
