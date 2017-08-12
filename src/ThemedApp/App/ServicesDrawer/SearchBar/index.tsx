import * as React from 'react';
import { observer } from 'mobx-react';
import Toolbar from 'material-ui/Toolbar';
import ToolbarGroup from 'material-ui/Toolbar/ToolbarGroup';
import TextField from 'material-ui/TextField';

const SearchBar: React.StatelessComponent<{}> = () => {
  return (
    <Toolbar>
      <ToolbarGroup>
        <TextField hintText="Search Services" />
      </ToolbarGroup>
    </Toolbar>
  );
};

export default observer(SearchBar);
