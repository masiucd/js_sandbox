import 'styled-components';


// and extend them!
declare module 'styled-components'{
  export interface DefaultTheme{
    borderRadius: string;
    appSize: string;
    shadow: {
      lightShadow: string;
      darkShadow: string;
      blackShadow: string;
    };

    colors: {
      green: string;
      primary: string;
      secondary: string;
      dark: string;
      darkRGBA: string;
      white: string;
      offWhite: string;
      danger: string;
      common: string;
    };
    size: {
      maxWidth: string;
      mainSpacing: string;
    };
    transition: {
      mainTransition: string;
      secondaryTransition: string;
      quickTransition: string;
    };
  }
}
