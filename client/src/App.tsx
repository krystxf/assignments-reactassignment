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
import { addItem, editItem, getItems, removeItem } from "./functions";
import type { AddItem as HandleAddItem, EditItem as HandleEditItem, RemoveItem as HandleRemoveItem } from "./functions";

export const App: React.FC = () => {
    const [data, setData] = useState<Item[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {
        try {
            const res = await getItems();
            setData(res as Item[]);
            setLoading(false);
        } catch (err) {
            setError(err as Error);
            setLoading(false);
            toast.error(`Error fetching data`);
        }
    };

    const handleAddItem: HandleAddItem = async (title, done = false) => {
        await addItem(title, done);
        await fetchData();
    };

    const handleRemoveItem: HandleRemoveItem = async (id) => {
        await removeItem(id);
        await fetchData();
    };

    const handleEditItem: HandleEditItem = async (id, { title, done }) => {
        await editItem(id, { title, done });
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
                        <div>Error: {error.message}</div>
                    ) : (
                        <List>
                            {data?.map(({ id, title, done }) => (
                                <ListItem
                                    key={id}
                                    title={title}
                                    defaultChecked={done}
                                    onCheckedChange={(done) => handleEditItem(id, { done: !!done })}
                                    handleEdit={(title) => handleEditItem(id, { title })}
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
