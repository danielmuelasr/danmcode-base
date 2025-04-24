import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: '"DM Sans", sans-serif',
        h1: {
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: 700,
        },
        h2: {
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: 700,
        },
        h3: {
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: 700,
        },
        h4: {
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: 700,
        },
        h5: {
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: 700,
        },
        h6: {
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: 700,
        },
    },
    components: {
        MuiTextField: {
            defaultProps: {
                variant: 'filled',
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    fontFamily: `'DM Sans', sans-serif`,
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: '"DM Sans", sans-serif',
                    textTransform: 'uppercase',
                    fontWeight: 900,
                    fontSize: '0.70rem',
                    borderRadius: '0.5rem',
                    padding: '0.5rem 1rem',
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                filled: {
                    textTransform: 'uppercase',
                    fontWeight: 900,
                    fontSize: '0.70rem',
                    fontFamily: '"DM Sans", sans-serif',
                },
            },
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    fontFamily: '"DM Sans", sans-serif',
                    backgroundColor: '#F1F5F9',
                    borderRadius: '0.5rem',
                    '&:before': {
                        borderBottom: '1px solid #048068',
                    },
                    '&:hover:before': {
                        borderBottom: '1px solid #048068',
                    },
                    '&.Mui-focused:before': {
                        borderBottom: '2px solid #048068',
                    },
                },
                input: {
                    fontFamily: '"DM Sans", sans-serif',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: '0px 4px 12px rgba(0,0,0,0.08)',
                    border: 'none',
                },
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    boxShadow: '4px 0 12px rgba(0, 0, 0, 0.1)',
                    border: 'none',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#ffffff',
                    color: '#06112D',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    fontWeight: 900,
                    fontSize: '0.7rem',
                    fontFamily: '"DM Sans", sans-serif',
                },
            },
        },
    },
    palette: {
        primary: {
            main: '#048068',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#FFCE93',
            contrastText: '#06112D',
        },
        error: {
            main: '#FF6157',
        },
        success: {
            main: '#61C877',
        },
        grey: {
            500: '#6A7081',
        },
        background: {
            default: '#F5F5F5',
            paper: '#FFFFFF',
        },
        text: {
            primary: '#06112D',
            secondary: '#6A7081',
        },
    },
});

export default theme;
