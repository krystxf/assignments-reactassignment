import { SERVER } from "../data";

export type GetItems = ({ signal }?: { signal?: AbortSignal | null | undefined }) => Promise<object | []>;

const getItems: GetItems = async (props) =>
    await fetch(`${SERVER}/items?_sort=done,createdAt&_order=asc,desc`, {
        method: "GET",
        signal: props?.signal,
    }).then((res) => res.json());

export default getItems;
