import { Box, Typography } from "@mui/material";

interface BannerProps {
    title?: string;
    subtitle?: string;
}

export const Banner = (props: BannerProps) => {

    const { title, subtitle } = props;

    return (
        <Box
            sx={{
                width: '50%',
                backgroundColor: '#2459a3',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                flexDirection: 'column',
                padding: 4,
            }}
        >
            <Typography variant="h4" fontWeight={700} sx={{ textAlign: 'center' }}>
                {title || 'Bienvenido a la plataforma'}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, textAlign: 'center' }}>
                {subtitle || 'Inicie sesión para continuar'}
            </Typography>
        </Box>
    );

}