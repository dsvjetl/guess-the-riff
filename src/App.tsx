import './App.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { AppRoutes } from './routing/index';
import { colorTheme } from './shared/utils/colorTheme';

function App() {
  document.documentElement.style.backgroundColor =
    colorTheme.palette.primaryCustom.light;

  return <AppRoutes />;
}

export default App;
