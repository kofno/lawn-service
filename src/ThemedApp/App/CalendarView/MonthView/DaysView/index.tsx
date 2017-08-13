import * as React from 'react';
import { observer, inject } from 'mobx-react';
import GridList from 'material-ui/GridList';
import DayView from './../DayView';
import Calendar from './../../../../../Calendar';
import { fromNullable } from 'maybeasy';

interface Props {
  calendar?: Calendar;
}

const DaysView: React.StatelessComponent<Props> = props => {
  const { calendar } = props;
  return fromNullable(calendar)
    .map(cal =>
      <GridList cols={7}>
        {cal.days.map(d => <DayView key={d.key} day={d} />)}
      </GridList>,
    )
    .getOrElse(<span>Calendar not configured</span>);
};

export default inject('calendar')(observer(DaysView));
