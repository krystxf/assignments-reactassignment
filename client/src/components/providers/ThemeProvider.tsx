import { blackA, grass, olive } from "@radix-ui/colors";
import React, { PropsWithChildren } from "react";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";

import { GlobalStyle } from "../styles/GlobalStyle";

const theme = {
    colors: {
        ...olive,
        ...grass,
        ...blackA,
    },
};

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => (
    <ThemeProviderStyled theme={theme}>
        <GlobalStyle />
        {children}
    </ThemeProviderStyled>
);
