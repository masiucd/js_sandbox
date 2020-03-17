import { DefaultTheme } from 'styled-components';


const theme: DefaultTheme = {
  borderRadius: '1rem',
  appSize: '10px',
  shadow: {
    lightShadow: '2px 5px 3px 0px rgba(1, 2, 8, 0.5)',
    darkShadow: '4px 10px 5px 0px rgba(12, 22, 00, 0.7)',
    blackShadow: '4px 10px 5px 0px rgba(2, 2, 8, 0.5)',
  },
  colors: {
    primary: '#2A2C2B',
    secondary: '#274250',
    green: '#45BF55',
    danger: '#e14f3f',
    dark: '#767679',
    common: '#1B76FF',
    white: '#fff',
    offWhite: '#f3f3f3',
    darkRGBA: 'rgba(0,0,0,0.4)',
  },
  size: {
    maxWidth: '1000px',
    mainSpacing: '4px',
  },
  transition: {
    mainTransition: 'all 0.3s linear',
    secondaryTransition: 'all 0.3s ease-in-out',
    quickTransition: 'all 200ms ease-in-out',
  },
};

export default theme;
