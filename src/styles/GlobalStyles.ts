import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *, body, html {
        margin: 0;
        padding: 0;
        font-family: "Roboto",sans-serif;
    }

    /* override class framework */
    .MuiPaper-elevation4 {
        box-shadow: 0 8px 44px -27px rgba(0,0,0,.65);
    }
`;
