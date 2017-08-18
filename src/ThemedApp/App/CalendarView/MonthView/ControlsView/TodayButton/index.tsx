import * as React from 'react';
import { observer } from 'mobx-react';
import FlatButton from 'material-ui/FlatButton';
import Calendar from 'calendaria';

const style = {
  margin: '10px 12px',
};

interface Props {
  calendar: Calendar;
}

const TodayButton: React.StatelessComponent<Props> = ({ calendar }) => {
  return (
    <FlatButton style={style} onTouchTap={() => calendar.moveToToday()}>
      Today
    </FlatButton>
  );
};

export default observer(TodayButton);
