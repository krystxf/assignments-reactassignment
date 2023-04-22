import React, { createContext, useState, useEffect } from "react";
import type { Item, DataProvider, DataProviderProps } from "./types";
import toast from "react-hot-toast";

const DEFAULT: DataProvider = {
    loading: true,
    data: null,
    error: null,
    refetch: async () => [],
};

export const DataContext = createContext<DataProvider>(DEFAULT);

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [data, setData] = useState<DataProvider["data"]>(DEFAULT.data);
    const [loading, setLoading] = useState<DataProvider["loading"]>(DEFAULT.loading);
    const [error, setError] = useState<DataProvider["error"]>(DEFAULT.error);

    const fetchData = async () => {
        const res = await fetch("http://localhost:3000/items?_sort=done,createdAt&_order=desc,desc", {
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

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <DataContext.Provider
            value={{
                data,
                loading,
                error,
                refetch: fetchData,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;
