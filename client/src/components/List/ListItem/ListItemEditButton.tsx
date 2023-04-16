import { Pencil1Icon } from "@radix-ui/react-icons";
import React from "react";

export type ListItemEditButtonProps = {
    onClick: () => void;
};

export const ListItemEditButton: React.FC<ListItemEditButtonProps> = ({ onClick }) => (
    <button onClick={onClick}>
        <Pencil1Icon />
    </button>
);
