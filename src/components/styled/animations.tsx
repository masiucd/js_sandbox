/* eslint-disable import/prefer-default-export */
import { keyframes } from 'styled-components';


export const ZoomIn = keyframes`

    -webkit-animation-name: zoomIn;
    animation-name: zoomIn;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;

  0% {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }

  50% {
    opacity: 1;
  }

`;
