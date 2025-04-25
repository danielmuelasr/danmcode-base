import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Card, CardContent, useMediaQuery, useTheme } from "@mui/material";
import { Banner } from "../components/auth/banner";
import { RememberPasswordForm } from "../components/auth/remember.password.form";

export const RememberPassword = () => {
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
                backgroundColor: '#f0f4f8',
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
                    boxShadow: 2,
                    margin: 2,
                }}
            >
                {!isMobile && (
                    <Banner
                        title="¿Olvidaste tu contraseña?"
                        subtitle="Ingresa tu nombre de usuario y la recuperaremos"
                    />
                )}

                <Box sx={{ width: isMobile ? '100%' : '50%' }}>
                    <CardContent >
                        <RememberPasswordForm />
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
