import * as React from 'react';
import { observer } from 'mobx-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { theme } from './Theme';
import App from './App';

const ThemedApp: React.StatelessComponent<{}> = () => {
  return (
    <MuiThemeProvider muiTheme={theme}>
      <App />
    </MuiThemeProvider>
  );
};

export default observer(ThemedApp);
