// Layout.js
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet } from 'react-router-dom';
import { theme } from '@/themes';
import {
    Avatar,
    Container,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Stack,
} from '@mui/material';
import { useState } from 'react';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', 'History', 'Account'];

const Layout = (props: Props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{ textAlign: 'left', px: 2 }}
        >
            <Typography
                variant="h6"
                sx={{ my: 2 }}
            >
                MENU
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem
                        key={item}
                        disablePadding
                    >
                        <ListItemButton sx={{ textAlign: 'left' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                sx={{
                    bgcolor: theme.palette.background.paper,
                }}
            >
                <Toolbar
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, color: theme.palette.primary.dark }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Stack
                        direction="row"
                        spacing={2}
                        alignItems={'center'}
                    >
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ color: theme.palette.primary.dark }}
                        >
                            Kle Ăn Cứt
                        </Typography>
                        <Avatar />
                    </Stack>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Container sx={{ maxWidth: '354px' }}>
                <Outlet />
            </Container>
        </Box>
    );
};

export default Layout;
