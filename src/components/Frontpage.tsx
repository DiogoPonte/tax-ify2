import { Fragment } from 'react'

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Copyright } from './Copyright'
import Typography from '@mui/material/Typography';
import { CardActionArea, createTheme, Paper, Stack, styled, ThemeProvider } from '@mui/material';

const FrontPageContent = () => {
    const navigate = useNavigate();
    const theme = createTheme({
        typography: {
            fontSize: 14,
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <Container component="main" maxWidth="sm" sx={{ height: '100vh', pt: 8, pb: 4 }}>
                <Stack
                    direction="column"
                    justifyContent="space-between"
                    alignItems="space-between"
                    sx={{ height: '100%', pt: 0, pb: 2 }}
                >
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={6}
                        width="sm"
                    >
                        <Typography
                            component="h1"
                            variant="h3"
                            align="center"
                            color="text.primary"
                            gutterBottom
                            sx={{ fontWeight: 'bold', pt: 8 }}
                        >
                            Tax-ify
                        </Typography>
                        <Typography alignSelf="center" align="center" variant="h6" sx={{ pt: 3 }} component="p">
                            Calcula os lucros ou prejuizos utilizando a metodologia FIFO para efeitos de declaração do Anexo J do IRS
                        </Typography>
                        <Typography alignSelf="center" variant="h6" component="p" sx={{ pt: 2 }}>
                        Selecione o tipo de ativo:
                        </Typography>

                        <Container component="main" sx={{ width: '100%', pt: 4, pb: 4 }}>

                            <Stack
                                direction="column"
                                spacing={6}
                                justifyContent="center"
                                alignItems="center"
           
                            >
                               {/*<Card sx={{ maxWidth: 430,  width: "100%!important" }} onClick={() => {
                                    navigate("/crypto");
                                }}>
                                    {<CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Crypto
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Por exemplo: Ethereumm, BTC.
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Plataformas suportadas: <b>Coinbase, Coinbase Pro</b>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                            </Card>*/}

                                <Card sx={{ maxWidth: 430,width: "100%!important"}} onClick={() => {
                                    navigate("/securities");
                                }}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Titúlos
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Ações, ETF's, fundos e outros títulos.
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Plataformas suportadas: <b>Degiro</b>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Stack>
                        </Container>
                    </Stack>
                    <Copyright />
                </Stack>


            </Container>

        </ThemeProvider>
    );
}

export { FrontPageContent as Frontpage }
