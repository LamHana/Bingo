import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#BF3131',
            dark: '#7D0A0A',
        },
        secondary: {
            main: '#EAD196',
        },
        success: {
            main: '#47D764',
        },
        info: {
            main: '#2F86EB',
        },
        warning: {
            main: '#FFC021',
        },
        error: {
            main: '#FF355B',
        },
        background: {
            default: '#BF3131',
            paper: '#FFFFFF',
        },
        text: {
            primary: '#0D0C11',
            secondary: '#6F5CF1',
            disabled: 'rgba(0,0,0,0.3)',
        },
    },
});
