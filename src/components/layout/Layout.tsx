/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../utils/theme';
import GlobalStyles from '../styled/GlobalStyles';
import Navbar from './nav/Navbar';

interface P {
  children: React.ReactNode;
}

const Layout: React.FC<P> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Navbar />
    <main className="MainApp">
      {children}
    </main>
  </ThemeProvider>
);
export default Layout;
