import { Box, Button, Card, CardContent, useMediaQuery, useTheme } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { Banner } from "../components/auth/banner";
import { SignupForm } from "../components/auth/signup.form";

export const SignupPage = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                height: '100vh',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            }}
        >
            <Card
                sx={{
                    width: '100%',
                    maxWidth: 900,
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    boxShadow: 3,
                    margin: 2,
                }}
            >

                {!isMobile && (
                    <Banner
                        title="Crea tu cuenta"
                        subtitle="Registra tus datos"
                    />
                )}

                <Box sx={{ width: isMobile ? '100%' : '60%' }}>
                    <CardContent>
                        <SignupForm />
                    </CardContent>
                    <Box sx={{
                        mb: 2,
                        width: '100%',
                        maxWidth: 900,
                        display: 'flex',
                        justifyContent: 'flex-end',
                        pr: 2
                    }}>
                        <Button
                            variant="text"
                            startIcon={<ArrowBack />}
                            onClick={() => window.history.back()}
                        >
                            Regresar
                        </Button>
                    </Box>
                </Box>


            </Card>
        </Box>
    )
}
