import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { ThemeProvider } from '@mui/material';
import { theme } from './themes';

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Routes />
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
