import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
	@import url('https://rsms.me/inter/inter.css');

  	${normalize}
  	${reset}

  	body {
		font-family: 'Inter', sans-serif;
  	}
`;
