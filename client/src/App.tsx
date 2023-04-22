import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { Toaster } from "react-hot-toast";
import DataProvider from "./providers/DataProvider";

export const App: React.FC = () => {
    return (
        <>
            <Toaster />

            <DataProvider>
                <ThemeProvider>
                    <Container>
                        <Layout>
                            <Header>To Do app</Header>
                            <List />
                            <Footer />
                        </Layout>
                    </Container>
                </ThemeProvider>
            </DataProvider>
        </>
    );
};
