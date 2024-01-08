import React from 'react';
import { Box } from '@mui/material';

const Home = () => {
	return (
		<Box
			sx={{
				flex: 1,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				gap: 5
			}}
		>
			{/* <img src="/BG.png" style={{ maxHeight: '50%', maxWidth: '50%' }} alt="Techover" /> */}
			{/* <Button
				size="large"
				variant="contained"
				onClick={() => (window.location.href = 'https://www.academy.techover.nu')}
			>
				Ansök nu!
			</Button> */}
		</Box>
	);
};

export default Home;
