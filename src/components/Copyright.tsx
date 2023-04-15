import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

const Copyright = () => {
    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            width={"sm"}
            sx={{ pt: 1, pb: 4 }}
        >
            <Typography variant="body2" sx={{ pt: 0 }} color="text.secondary" align="center" >
                O utilizador é responsável pelos valores declarados no IRS
            </Typography>
            <Typography variant="body2" sx={{ pt: 0 }} color="text.secondary" align="center" >
                Os ficheiros submetidos na plataforma são processados localmente no browser. 
            </Typography>
            <Typography variant="body2" sx={{ pt: 0 }} color="text.secondary" align="center" >
                {'Copyright © '}
                Diogo Ponte
                {' '}
                {new Date().getFullYear()}
                {'. '}
            </Typography>
        </Stack>
    );
}

export { Copyright }
