import * as React from 'react';
import { observer } from 'mobx-react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Card from 'material-ui/Card';
import CardHeader from 'material-ui/Card/CardHeader';
import SearchBar from './SearchBar';

const ServicesDrawer: React.StatelessComponent<{}> = () => {
  return (
    <Drawer open={true} docked={true} zDepth={1}>
      <AppBar iconElementLeft={<div />} />
      <SearchBar />
      <Card>
        <CardHeader title="Fall Clean-up" subtitle="9 houses" />
      </Card>
      <Card>
        <CardHeader title="Mowing" subtitle="37 houses" />
      </Card>
      <Card>
        <CardHeader title="Fertilize" subtitle="14 houses" />
      </Card>
    </Drawer>
  );
};

export default observer(ServicesDrawer);
