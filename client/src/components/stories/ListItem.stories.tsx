import { Meta, StoryObj } from "@storybook/react";
import { userEvent } from "@storybook/testing-library";
import { ListItem } from "../ListItem";

const meta = {
    title: "List Item",
    component: ListItem,
    argTypes: {
        handleRemoval: { action: "removed" },
        handleEdit: { action: "edited" },
    },
} as Meta<typeof ListItem>;
export default meta;
type Story = StoryObj<typeof ListItem>;
export const ToDo: Story = {
    args: {
        title: "Lorem ipsum dolor",
    },
};

export const Done: Story = {
    args: {
        ...ToDo.args,
        checked: true,
    },
};

export const Hover: Story = {
    play: async ({ canvasElement }) => {
        await userEvent.hover(canvasElement.getElementsByClassName("listItem")[0]);

        // await userEvent.click(canvasElement.querySelector("button")!);
    },
    args: {
        ...ToDo.args,
    },
};
