import toast from "react-hot-toast";

const addItem = async (title: string, done = false) => {
    await fetch("http://localhost:3000/items", {
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
            if (res.ok) {
                toast.success("Item created!");
            } else {
                toast.error(`Something went wrong`);
            }
        })
        .catch((err) => {
            toast.error(`Error: ${err?.message || ""}`);
        });

    return;
};

export default addItem;
