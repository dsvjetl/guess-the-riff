import { Typography } from '@mui/material';
import { colorTheme } from '../../utils/colorTheme';

const Header = () => {
  return (
    <header>
      <Typography
        variant={'h1'}
        fontWeight={'normal'}
        align={'center'}
        fontSize={50}
        bgcolor={colorTheme.palette.primary.dark}
        color={colorTheme.palette.primaryCustom.light}
        p={1}
      >
        Guess the Riff! 🎸
      </Typography>
    </header>
  );
};

export default Header;
