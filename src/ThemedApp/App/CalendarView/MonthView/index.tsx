import * as React from 'react';
import { observer } from 'mobx-react';
import ControlsView from './ControlsView';
import HeaderView from './HeaderView';
import WeekView from './WeekView';

const MonthView: React.StatelessComponent<{}> = () => {
  return (
    <div style={{ margin: '20px' }}>
      <ControlsView />
      <HeaderView />
      <WeekView />
    </div>
  );
};

export default observer(MonthView);
