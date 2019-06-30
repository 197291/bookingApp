import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';

import SearchInput from 'pages/Home/components/SearchInput';
import Hotels from 'pages/Home/components/Hotels';
import { ConnectedProps } from '.';
import { styles } from './styles';

const Home: React.FC<ConnectedProps> = (props) => {
  const { getHotels, hotels, setSearcValue } = props;
  const classes = styles(props);
  useEffect(() => {
    getHotels();
  }, [getHotels]);

  return (
    <div className="Home">
      <Container classes={{ root: classes.root }}>
        <SearchInput setSearcValue={setSearcValue} />
        <Hotels hotels={hotels} />
      </Container>
    </div>
  );
};

export default Home;
