import React, { useState } from "react";
import styled from "styled-components";
import { Checkbox } from "./Checkbox";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { Form } from "./form";

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    padding: 4px 10px;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;

    .action_btn {
        visibility: hidden;
        opacity: 0;
        transition: all 0.1s ease-in-out;
    }

    &:hover {
        background-color: ghostwhite;

        .action_btn {
            visibility: visible;
            opacity: 1;
        }
    }

    .right {
        margin-left: auto;
        display: flex;
        gap: 8px;
    }
`;

const Label = styled.label`
    margin-left: 15px;
`;

export type LiteItemProp = CheckboxProps & {
    title: string;
    handleEdit: (title: string) => void;
    handleRemoval: () => void;
};

export const ListItem: React.FC<LiteItemProp> = ({ title, handleRemoval, handleEdit, ...checkboxProps }) => {
    const [editMode, setEditMode] = useState<boolean>(false);

    if (editMode)
        return (
            <Form
                handleSubmit={(title) => {
                    handleEdit(title);
                    setEditMode(false);
                }}
                initialValue={title}
                handleCancel={() => setEditMode(false)}
            />
        );

    return (
        <StyledDiv>
            <Checkbox {...checkboxProps} />
            <Label>{title}</Label>

            <div className="right">
                <button className="action_btn" onClick={handleRemoval}>
                    <TrashIcon />
                </button>
                <button className="action_btn" onClick={() => setEditMode(true)}>
                    <Pencil1Icon />
                </button>
            </div>
        </StyledDiv>
    );
};
