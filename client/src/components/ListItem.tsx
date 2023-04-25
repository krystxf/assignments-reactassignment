import React, { useState } from "react";
import styled from "styled-components";
import { Checkbox } from "./Checkbox";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { Form } from "./form";
import Button from "./Button";

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 4px 10px;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
    transition: height 2s ease-in-out;
    min-height: 30px;
    row-gap: 4px;
    gap: 8px;

    .action_btn {
        display: none;
        opacity: 0;
    }

    .hover {
        background-color: ${(props) => props.theme.colors.blackA2};
    }

    :hover {
        &.listItem {
            background-color: ${(props) => props.theme.colors.blackA2};
        }

        .action_btn {
            display: block;
            opacity: 1;
        }
    }

    .right {
        margin-left: auto;
        display: flex;
        gap: 8px;
    }
`;

export type LiteItemProp = CheckboxProps & {
    title: string;
    handleEdit: (title: string) => void;
    handleRemoval: () => void;
};

export const ListItem: React.FC<LiteItemProp> = ({ title, handleRemoval, handleEdit, ...checkboxProps }) => {
    const [editMode, setEditMode] = useState<boolean>(false);

    return (
        <StyledDiv className={editMode ? "editMode" : "listItem"}>
            {editMode ? (
                <Form
                    handleSubmit={(title) => {
                        handleEdit(title);
                        setEditMode(false);
                    }}
                    initialValue={title}
                    handleCancel={() => setEditMode(false)}
                />
            ) : (
                <>
                    <Checkbox {...checkboxProps} />
                    <span>{title}</span>

                    <div className="right">
                        <Button className="action_btn danger" onClick={handleRemoval}>
                            <TrashIcon />
                        </Button>
                        <Button className="action_btn" onClick={() => setEditMode(true)}>
                            <Pencil1Icon />
                        </Button>
                    </div>
                </>
            )}
        </StyledDiv>
    );
};
