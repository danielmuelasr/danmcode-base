import { Box, Card, CardContent, useMediaQuery, useTheme } from "@mui/material";
import { Banner } from "../components/auth/banner";
import { LoginForm } from "../components/auth/login.form";

export const LoginPage = () => {
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
                {!isMobile && (<Banner title="Análisis de comisiones" subtitle="Protécnica Ingeniería" />)}

                <Box sx={{ width: isMobile ? '100%' : '50%' }}>
                    <CardContent>
                        <LoginForm />
                    </CardContent>
                </Box>
            </Card>
        </Box>
    );
};