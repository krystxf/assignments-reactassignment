import { Footer, Header, Layout } from "./layout";
import { List } from "./List";

export const TodoList: React.FC = () => {
    return (
        <Layout>
            <Header onAdd={() => console.warn("unimplemented")}>To Dos</Header>
            <List />
            <Footer />
        </Layout>
    );
};
