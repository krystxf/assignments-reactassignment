import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";

import { List } from "./List";
import { ListItem, ListItemProps } from "./ListItem/ListItem";

const meta = {
    title: "List/List",
    component: List,
} as Meta<typeof List>;
export default meta;

type Story = StoryObj<typeof List>;

const emptyHandlers: Pick<ListItemProps, "onRemove" | "onEdit"> = {
    onRemove: action("Removal requested"),
    onEdit: action("Edit requested"),
};

export const WithItems: Story = {
    args: {
        children: (
            <>
                <ListItem {...emptyHandlers} label={"Lorem ipsum dolor"} />,
                <ListItem {...emptyHandlers} label={"Nullam Adipiscing Ridiculus Fusce"} />,
                <ListItem {...emptyHandlers} label={"Mattis Tristique Parturient "} />,
            </>
        ),
    },
};
