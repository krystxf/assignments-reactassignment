import toast from "react-hot-toast";
import { SERVER } from "../data";

const addItem = async (title: string, done = false) => {
    await fetch(`${SERVER}/items`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title,
            done,
        }),
    })
        .then((res) => {
            if (res.ok) toast.success("Item created!");
            else toast.error(`Something went wrong`);
        })
        .catch((err) => {
            console.error(err);
            toast.error("Error creating item");
        });

    return;
};

export default addItem;
