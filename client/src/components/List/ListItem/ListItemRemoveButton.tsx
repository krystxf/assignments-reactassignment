import { TrashIcon } from "@radix-ui/react-icons";
import React from "react";

export type ListItemRemoveButtonProps = {
    onClick: () => void;
};

export const ListItemRemoveButton: React.FC<ListItemRemoveButtonProps> = ({ onClick }) => (
    <button onClick={onClick}>
        <TrashIcon />
    </button>
);
