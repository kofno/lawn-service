import * as React from 'react';
import { observer } from 'mobx-react';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Calendar from 'calendaria';

interface Props {
  calendar: Calendar;
}

const NextMonthButton: React.StatelessComponent<Props> = ({ calendar }) => {
  return (
    <IconButton onTouchTap={() => calendar.moveToNextMonth()}>
      <FontIcon className="material-icons">play_arrow</FontIcon>
    </IconButton>
  );
};

export default observer(NextMonthButton);
