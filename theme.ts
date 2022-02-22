import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#2C394B',
            paper: '#082032'
        }
    },
});

export default darkTheme;