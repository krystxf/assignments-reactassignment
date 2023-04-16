import { Container } from "./components/layout";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { TodoList } from "./components/TodoList";

export const App: React.FC = () => (
    <ThemeProvider>
        <Container>
            <TodoList />
        </Container>
    </ThemeProvider>
);
