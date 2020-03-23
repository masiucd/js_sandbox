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


export const FadeInDown = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    }

  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }

`;
