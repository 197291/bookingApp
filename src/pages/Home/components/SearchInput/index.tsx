import React from 'react';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { styles } from './styles';

const SearchInput: React.FC = (props) => {
  const classes = styles(props);
  return (
    <div className="SearchInput">
      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search hotels"
          inputProps={{ 'aria-label': 'Search hotels' }}
        />
        <IconButton className={classes.iconButton} aria-label="Search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchInput;
