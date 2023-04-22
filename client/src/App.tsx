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
import { addItem } from "./functions";

export interface Data {
    loading: boolean;
    data: Item[] | null;
    refetch: () => Promise<Item[]>;
    error: Error | null;
}

export const App: React.FC = () => {
    const [data, setData] = useState<Data["data"]>(null);
    const [loading, setLoading] = useState<Data["loading"]>(true);
    const [error, setError] = useState<Data["error"]>(null);

    const fetchData = async () => {
        const res = await fetch("http://localhost:3000/items?_sort=done,createdAt&_order=asc,desc", {
            method: "GET",
        })
            .then((res) => res.json())
            .catch((err) => {
                setError(err);
                setLoading(false);
                toast.error(`Something went wrong`);
            });

        setData(res);
        setLoading(false);

        return res as Item[];
    };

    const handleAddItem = async (title: string, done = false) => {
        await addItem(title, done);
        await fetchData();
        return;
    };

    useEffect(() => {
        fetchData();
    }, []);

    const doneCount = loading ? 0 : data?.filter(({ done }) => done)?.length || 0;

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
                                    handleRemoval={() => console.log("remove", id)}
                                />
                            ))}
                        </List>
                    )}
                    <Footer doneItems={doneCount} todoItems={data?.length || 0 - doneCount} />
                </Layout>
            </Container>
        </ThemeProvider>
    );
};
