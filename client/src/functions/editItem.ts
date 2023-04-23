import toast from "react-hot-toast";
import { SERVER } from "../data";

const editItem = async (id: number, { title, done }: { title?: string; done?: boolean }) => {
    if (!title && done === undefined) return; // nothing to update

    await fetch(`${SERVER}/items/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, done }),
    })
        .then((res) => res.json())
        .catch((err) => {
            console.error(err);
            toast.error(`Error updating data`);
        });
};

export default editItem;
