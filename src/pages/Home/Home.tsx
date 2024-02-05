import { theme } from '@/themes';
import {
    Chip,
    Container,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    Stack,
} from '@mui/material';
import { AiOutlineDollar } from 'react-icons/ai';
import FlappyNom from '@/assets/imgs/FlappyBird.png';
import Bingo from '@/assets/imgs/Bingo.png';
import TaiXiu from '@/assets/imgs/TaiXiu.png';
const Home = () => {
    const games = [
        {
            id: 1,
            name: 'Flappy Nom',
            img: FlappyNom,
        },
        {
            id: 2,
            name: 'Lô Tô',
            img: Bingo,
        },
        {
            id: 3,
            name: 'Tài Xỉu',
            img: TaiXiu,
        },
    ];
    return (
        <Container>
            <Stack
                alignItems={'center'}
                sx={{ mb: 5 }}
            >
                <Chip
                    icon={<AiOutlineDollar size={26} />}
                    label="Wallet: 2.000.000$"
                    color="secondary"
                    sx={{
                        color: theme.palette.primary.dark,
                        fontWeight: 700,
                        mt: 3,
                        width: '240px',
                        height: '52px',
                        borderRadius: '50px',
                        fontSize: '16px',
                    }}
                />
            </Stack>

            <ImageList sx={{ width: 290 }}>
                {games.map((game) => (
                    <ImageListItem
                        key={game.id}
                        cols={2}
                        sx={{ display: 'flex', alignItems: 'center' }}
                    >
                        <img
                            src={game.img}
                            alt={game.name}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            position="below"
                            title={game.name}
                            sx={{
                                color: '#fff',
                                fontWeight: '500',
                                fontSize: '18px',
                            }}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Container>
    );
};

export default Home;
