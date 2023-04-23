import toast from "react-hot-toast";
import { SERVER } from "../data";

const removeItem = async (id: number) => {
    return fetch(`${SERVER}/items/${id}`, {
        method: "DELETE",
    })
        .then((res) => res.json())
        .catch((err) => {
            console.error(err);
            toast.error(`Error deleting item`);
        });
};
export default removeItem;
