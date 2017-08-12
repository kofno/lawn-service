import * as React from 'react';
import { observer } from 'mobx-react';
import GridList from 'material-ui/GridList';
import GridTile from 'material-ui/GridList/GridTile';

const Header: React.StatelessComponent<{}> = () => {
  return (
    <GridList cols={7}>
      <GridTile title="Sun" rows={0.25} />
      <GridTile title="Mon" rows={0.25} />
      <GridTile title="Tue" rows={0.25} />
      <GridTile title="Wed" rows={0.25} />
      <GridTile title="Thu" rows={0.25} />
      <GridTile title="Fri" rows={0.25} />
      <GridTile title="Sat" rows={0.25} />
    </GridList>
  );
};

export default observer(Header);
