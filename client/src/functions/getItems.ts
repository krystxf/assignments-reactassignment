import { SERVER } from "../data";

export type GetItems = () => Promise<object | []>;

const getItems: GetItems = async () =>
    await fetch(`${SERVER}/items?_sort=done,createdAt&_order=asc,desc`, {
        method: "GET",
    }).then((res) => res.json());

export default getItems;
