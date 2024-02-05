import {
    Box,
    Container,
    Divider,
    Link,
    Stack,
    Typography,
} from '@mui/material';
import * as Style from './Login.styled';
import Cover from '@/assets/imgs/login.png';
import { theme } from '@/themes';
import { FcGoogle } from 'react-icons/fc';
import Button from '@/components/Button/Button';

const Login = () => {
    return (
        <>
            <Style.LoginCover url={Cover} />
            <Container>
                <Box
                    component="form"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box>
                        <Typography color={theme.palette.secondary.main}>
                            Username
                        </Typography>
                        <Style.InputField
                            margin="dense"
                            type="text"
                            id="username"
                            name="username"
                            variant="outlined"
                            InputProps={{
                                style: {
                                    borderRadius: '8px',
                                },
                            }}
                            placeholder="Username"
                        />
                    </Box>
                    <Button
                        type="submit"
                        size="large"
                        variant="contained"
                        height={48}
                        width={290}
                        bgColor={theme.palette.secondary.main}
                        color={theme.palette.primary.dark}
                        content="Sign In"
                    />
                </Box>
                <Divider
                    sx={{
                        color: theme.palette.secondary.main,
                        margin: '0 36px',
                        fontSize: '14px',
                        '&.MuiDivider-root': {
                            '&::before': {
                                borderTop: `thin solid ${theme.palette.secondary.main}`,
                            },
                            '&::after': {
                                borderTop: `thin solid ${theme.palette.secondary.main}`,
                            },
                        },
                    }}
                >
                    Or Sign In With
                </Divider>
                <Stack alignItems={'center'}>
                    <Button
                        size="large"
                        variant="contained"
                        height={48}
                        width={290}
                        bgColor={theme.palette.primary.dark}
                        color={theme.palette.secondary.main}
                        content="Login With Google"
                        startIcon={<FcGoogle size={26} />}
                    />
                    <Box>
                        <Typography
                            component={'span'}
                            color={theme.palette.secondary.main}
                        >
                            Can not sign in?
                        </Typography>

                        <Link
                            component={'span'}
                            sx={{
                                color: theme.palette.secondary.main,
                                fontWeight: 700,
                            }}
                        >
                            {' '}
                            Contact us
                        </Link>
                    </Box>
                </Stack>
            </Container>
        </>
    );
};

export default Login;
