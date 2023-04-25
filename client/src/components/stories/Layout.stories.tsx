import { Meta, StoryObj } from "@storybook/react";

import { Layout } from "../Layout";

const meta = {
    title: "Layout",
    component: Layout,
    argTypes: {
        children: {
            control: {
                type: "text",
                defaultValue: "Lorem ipsum",
            },
        },
    },
} as Meta<typeof Layout>;
export default meta;
type Story = StoryObj<typeof Layout>;

export const Default: Story = {
    args: {
        children: "Lorem ipsum",
    },
};
