import { Typography } from '@mui/material';
import { colorTheme } from '../../utils/colorTheme';

const Header = () => {
  return (
    <header>
      <Typography
        variant={'h1'}
        align={'center'}
        fontSize={50}
        color={colorTheme.palette.primary.light}
        bgcolor={colorTheme.palette.primary.dark}
        p={1}
      >
        Guess the Riff! 🎸
      </Typography>
    </header>
  );
};

export default Header;
