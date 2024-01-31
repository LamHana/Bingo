import { theme } from '@/themes';
import { Box, Button, TextField, styled } from '@mui/material';

export const LoginCover = styled(Box)<{ url: string }>`
    height: 306px;
    background-image: ${({ url }) => (url ? `url(${url})` : null)};
    /* background-size: cover; */
    background-position: center center;
`;

export const InputField = styled(TextField)`
    width: 290px;
    .MuiInputBase-root {
        border: 2px solid ${theme.palette.primary.dark};
    }

    & .MuiOutlinedInput-root {
        & fieldset {
            border-color: 'rgba(0, 0, 0, 0.23)'; // default
            border-radius: 6px;
        }
        &.Mui-focused fieldset {
            border-radius: 6px;
            border: 0; // focus
        }
        & input {
            color: ${theme.palette.secondary.main};
        }
    }
`;

export const LoginButton = styled(Button)`
    margin-top: 32px;
    margin-bottom: 32px;
    width: 290px;
    height: 48px;
    font-weight: 700;
    font-size: 16px;
    text-transform: none;
`;
