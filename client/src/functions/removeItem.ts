import toast from "react-hot-toast";
import { SERVER } from "../data";

export type RemoveItem = (id: number) => Promise<void>;

const removeItem: RemoveItem = async (id) => {
    try {
        await fetch(`${SERVER}/items/${id}`, {
            method: "DELETE",
        }).then((res) => res.json());
    } catch (err) {
        console.error(err);
        toast.error(`Error deleting item`);
    }
};
export default removeItem;
