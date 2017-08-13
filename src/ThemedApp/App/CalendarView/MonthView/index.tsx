import * as React from 'react';
import { observer } from 'mobx-react';
import ControlsView from './ControlsView';
import HeaderView from './HeaderView';
import DaysView from './DaysView';

const MonthView: React.StatelessComponent<{}> = () => {
  return (
    <div style={{ margin: '20px' }}>
      <ControlsView />
      <HeaderView />
      <DaysView />
    </div>
  );
};

export default observer(MonthView);
