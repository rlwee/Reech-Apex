import { createGlobalStyle } from 'styled-components';

import flors from './Florsn37.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'flors';
        src: local('Font Name'), local('FontName'),
        url(${flors}) format('woff2'),
        font-weight: 300;
        font-style: normal;
    }
`;