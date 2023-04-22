export interface Item {
    id: number;
    title: string;
    done: boolean;
    createdAt: number;
}

export interface DataProvider {
    loading: boolean;
    data: Item[] | null;
    refetch: () => Promise<Item[]>;
    error: Error | null;
}

export interface DataProviderProps {
    children: React.ReactNode;
}
