import toast from "react-hot-toast";
import { SERVER } from "../data";

export type AddItem = (title: string, done?: boolean) => Promise<void>;

const addItem: AddItem = async (title, done = false) => {
    try {
        await fetch(`${SERVER}/items`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                done,
            }),
        });

        toast.success("Item created!");
    } catch (err) {
        console.error(err);
        toast.error("Error creating item");
    }
};

export default addItem;
