import CloseIcon from '@mui/icons-material/Close';
import { Alert, Box, Collapse, IconButton } from '@mui/material';

interface ICustomAlert {
    message: string;
    title: string;
    severity: 'error' | 'info' | 'success';
    isOpen: boolean;
    onClose?: () => void
}

export const CustomAlert = (props: ICustomAlert) => {
    const { message, title, severity, isOpen, onClose } = props;

    return (
        <Box sx={{ width: '100%' }}>
            <Collapse in={isOpen}>
                <Alert
                    severity={severity}
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={onClose}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                    <strong>{title}</strong>: {message}
                </Alert>
            </Collapse>
        </Box>
    );
};