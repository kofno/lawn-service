import * as React from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import AppBar from 'material-ui/AppBar';
import CalendarView from './CalendarView';
import ServicesDrawer from './ServicesDrawer';

const App: React.StatelessComponent<{}> = () => {
  return (
    <div style={{ paddingLeft: '256px' }}>
      <AppBar title="Lawn Service" />
      <CalendarView />
      <ServicesDrawer />
      {process.env.NODE_ENV === 'development' && <DevTools />}
    </div>
  );
};

export default observer(App);
