import toast from "react-hot-toast";
import { SERVER } from "../data";

export type EditItem = (id: number, { title, done }: { title?: string; done?: boolean }) => Promise<void>;

const editItem: EditItem = async (id, { title, done }) => {
    if (!title && done === undefined) return; // nothing to update

    try {
        await fetch(`${SERVER}/items/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, done }),
        });
    } catch (err) {
        console.error(err);
        toast.error(`Error updating data`);
    }
};

export default editItem;
