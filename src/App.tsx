import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './themes';

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Routes />
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
