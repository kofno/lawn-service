import * as React from 'react';
import { observer } from 'mobx-react';
import MonthView from './MonthView';

const CalendarView: React.StatelessComponent<{}> = () => {
  return <MonthView />;
};

export default observer(CalendarView);
