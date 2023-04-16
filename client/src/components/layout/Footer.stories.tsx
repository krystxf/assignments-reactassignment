import { Meta, StoryObj } from "@storybook/react";

import { Footer } from "./Footer";

const meta = {
    title: "Layout/Footer",
    component: Footer,
} as Meta<typeof Footer>;
export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
    args: {
        doneItemCount: 3,
        todoItemCount: 10,
    },
};

export const EmptyList: Story = {
    args: {},
};
