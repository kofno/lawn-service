import * as React from 'react';
import { observer } from 'mobx-react';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Calendar from 'calendaria';

const style = {
  transform: 'rotate(180deg)',
};

interface Props {
  calendar: Calendar;
}

const PreviouseMonthButton: React.StatelessComponent<Props> = ({ calendar }) => {
  return (
    <IconButton iconStyle={style} onTouchTap={() => calendar.moveToPreviousMonth()}>
      <FontIcon className="material-icons">play_arrow</FontIcon>
    </IconButton>
  );
};

export default observer(PreviouseMonthButton);
