import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import toast, { Toaster } from "react-hot-toast";
import React, { useState, useEffect } from "react";
import { Item } from "./types";
import { ListItem } from "./components/ListItem";
import { addItem, removeItem } from "./functions";
import { SERVER } from "./data";

export const App: React.FC = () => {
    const [data, setData] = useState<Item[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {
        const res = await fetch(`${SERVER}/items?_sort=done,createdAt&_order=asc,desc`, {
            method: "GET",
        })
            .then((res) => res.json())
            .catch((err) => {
                setError(err);
                setLoading(false);
                toast.error(`Error fetching data`);
            });

        setData(res);
        setLoading(false);

        return res as Item[];
    };

    const handleAddItem = async (title: string, done = false) => {
        await addItem(title, done);
        await fetchData();
    };

    const handleRemoveItem = async (id: number) => {
        await removeItem(id);
        await fetchData();
    };

    useEffect(() => {
        fetchData();
    }, []);

    const doneCount = data?.filter(({ done }) => done)?.length;
    const todoCount = data?.filter(({ done }) => !done)?.length;

    return (
        <ThemeProvider>
            <Toaster />

            <Container>
                <Layout>
                    <Header handleAddItem={handleAddItem}>To Do app</Header>
                    {loading ? (
                        <div>Loading...</div>
                    ) : error ? (
                        <div>Error: {error?.message || ""}</div>
                    ) : (
                        <List>
                            {data?.map(({ id, title, done }) => (
                                <ListItem
                                    key={id}
                                    title={title}
                                    checked={done}
                                    handleEdit={() => console.log("edit", id)}
                                    handleRemoval={() => handleRemoveItem(id)}
                                />
                            ))}
                        </List>
                    )}
                    <Footer doneItems={doneCount} todoItems={todoCount} />
                </Layout>
            </Container>
        </ThemeProvider>
    );
};
