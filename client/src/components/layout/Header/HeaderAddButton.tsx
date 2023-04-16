import { PlusIcon } from "@radix-ui/react-icons";
import React from "react";

export type HeaderAddButtonProps = {
    onClick: () => void;
};

export const HeaderAddButton: React.FC<HeaderAddButtonProps> = ({ onClick }) => (
    <button onClick={onClick}>
        <PlusIcon />
    </button>
);
