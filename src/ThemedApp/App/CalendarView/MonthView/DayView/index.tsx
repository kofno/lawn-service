import * as React from 'react';
import { observer } from 'mobx-react';
import GridTile from 'material-ui/GridList/GridTile';
import { Day, title } from './../../../../../Calendar/Day';

const style: { body: React.CSSProperties } = {
  body: {
    backgroundColor: 'rgba(239, 235, 233, 0.3)',
  },
};

interface Props {
  day: Day;
}

const DayView: React.StatelessComponent<Props> = ({ day }) => {
  return <GridTile style={style.body} title={title(day)} />;
};

export default observer(DayView);
