import { Meta, StoryObj } from "@storybook/react";

import ButtonComponent from "../Button";

const meta = {
    title: "Button",
    component: ButtonComponent,
    argTypes: {
        children: {
            control: {
                type: "text",
            },
        },
        className: {
            options: ["danger", ""],
            control: {
                type: "select",
                defaultValue: "",
            },
        },
        type: {
            options: ["button", "submit", "reset"],
            control: {
                type: "select",
                defaultValue: "button",
            },
        },
    },
} as Meta<typeof ButtonComponent>;
export default meta;
type Story = StoryObj<typeof ButtonComponent>;
export const Button: Story = {
    args: {
        children: "Lorem ipsum dolor",
        className: "",
        type: "button",
    },
};
export const Submit: Story = {
    args: {
        ...Button.args,
        type: "submit",
    },
};

export const Danger: Story = {
    args: {
        ...Button.args,
        className: "danger",
    },
};
