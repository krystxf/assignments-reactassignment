import React from "react";
import styled from "styled-components";
import { Checkbox } from "./Checkbox";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";

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
    handleEdit: () => void;
    handleRemoval: () => void;
};

export const ListItem: React.FC<LiteItemProp> = ({ title, handleRemoval, handleEdit, ...checkboxProps }) => (
    <StyledDiv>
        <Checkbox {...checkboxProps} />
        <Label>{title}</Label>

        <div className="right">
            <button className="action_btn" onClick={() => handleEdit()}>
                <TrashIcon />
            </button>
            <button className="action_btn" onClick={() => handleRemoval()}>
                <Pencil1Icon />
            </button>
        </div>
    </StyledDiv>
);
