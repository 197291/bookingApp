import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { styles } from './styles';

interface Props {
  setSearcValue: (val: string) => void;
}

const SearchInput: React.FC<Props> = (props) => {
  const classes = styles(props);
  const [val, setInputValue] = useState('');

  return (
    <div className="SearchInput">
      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search hotels"
          inputProps={{ 'aria-label': 'Search hotels' }}
          onChange={(e) => setInputValue(e.target.value)}
          value={val}
        />
        <IconButton
          onClick={() => props.setSearcValue(val)}
          className={classes.iconButton}
          aria-label="Search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchInput;
