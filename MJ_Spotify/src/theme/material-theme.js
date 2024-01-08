import { createTheme } from '@mui/material';

export const themeOptions = createTheme({
	palette: {
		primary: {
			main: '#ffffff',
			light: '#ffffff',
			dark: '#ffffff',
			contrastText: '#000000'
		},
		background: {
			default: '#000000',
			paper: '#121212'
		},
		text: {
			primary: '#ffffff',
			secondary: '#b3b3b3'
		},
		divider: '#ffffff'
	}
});
