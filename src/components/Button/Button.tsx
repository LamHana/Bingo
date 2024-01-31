import { Button as MuiButton } from '@mui/material';
import { ReactNode } from 'react';

type ButtonProps = {
    bgColor: string;
    color: string;
    width: number;
    height: number;
    content: string;
    size?: 'small' | 'medium' | 'large';
    variant?: 'outlined' | 'text' | 'contained';
    type?: 'button' | 'reset' | 'submit';
    startIcon?: ReactNode;
};

const Button = ({
    bgColor,
    color,
    width,
    height,
    content,
    size = 'medium',
    variant = 'contained',
    type = 'button',
    startIcon,
}: ButtonProps) => {
    return (
        <MuiButton
            size={size}
            variant={variant}
            type={type}
            startIcon={startIcon}
            sx={{
                mt: 3,
                mb: 3,
                width: `${width}px`,
                height: `${height}px`,
                bgcolor: bgColor,
                color: color,
                fontWeight: 700,
                fontSize: '16px',
                textTransform: 'none',
            }}
        >
            {content}
        </MuiButton>
    );
};

export default Button;
