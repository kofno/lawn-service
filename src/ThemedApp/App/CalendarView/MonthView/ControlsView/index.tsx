import * as React from 'react';
import { observer, inject } from 'mobx-react';
import Toolbar from 'material-ui/Toolbar';
import ToolbarGroup from 'material-ui/Toolbar/ToolbarGroup';
import ToolbarTitle from 'material-ui/Toolbar/ToolbarTitle';
import Calendar from './../../../../../Calendar';
import * as Month from './../../../../../Calendar/Month';
import PreviouseMonthButton from './PreviousMonthButton';
import NextMonthButton from './NextMonthButton';
import TodayButton from './TodayButton';
import { fromNullable } from 'maybeasy';

const styles = {
  paddLeft: { padding: '0 10px 0 0' },
  title: { minWidth: '150px' },
};

interface Props {
  calendar?: Calendar;
}

const Controls: React.StatelessComponent<Props> = props => {
  const { calendar } = props;
  return fromNullable(calendar)
    .map(cal => {
      const { month } = cal;
      const title = `${Month.name(month)} ${String(cal.year)}`;
      return (
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <div style={styles.paddLeft}>&nbsp;</div>
            <ToolbarTitle text={title} style={styles.title} />
            <PreviouseMonthButton calendar={cal} />
            <TodayButton calendar={cal} />
            <NextMonthButton calendar={cal} />
          </ToolbarGroup>
        </Toolbar>
      );
    })
    .getOrElse(<span>Calendar was not set up Properly</span>);
};

export default inject('calendar')(observer(Controls));
