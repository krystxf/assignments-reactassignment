import React from "react";
import styled from "styled-components";

import { Checkbox } from "../../form/Checkbox";
import { ListItemEditButton } from "./ListItemEditButton";
import { ListItemLabel } from "./ListItemLabel";
import { ListItemRemoveButton } from "./ListItemRemoveButton";

const StyledListItem = styled.div`
    display: flex;
    align-items: center;
`;

export type ListItemProps = {
    label: string;
    isDone?: boolean;
    onEdit: (value: string) => void;
    onRemove: () => void;
    onToggleDone?: (isDone: boolean) => void;
};

export const ListItem: React.FC<ListItemProps> = ({ label, isDone, onEdit, onRemove, onToggleDone }) => (
    <StyledListItem>
        <Checkbox checked={isDone} onCheckedChange={onToggleDone} />
        <ListItemLabel>{label}</ListItemLabel>
        <ListItemEditButton onClick={() => null} />
        <ListItemRemoveButton onClick={onRemove} />
    </StyledListItem>
);
