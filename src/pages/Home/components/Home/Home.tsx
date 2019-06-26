import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';

import SearchInput from '../SearchInput';
import { ConnectedProps } from '.';
import Hotels from '../Hotels';

const Home: React.FC<ConnectedProps> = (props) => {
  const { getHotels, hotels, setSearcValue } = props;

  useEffect(() => {
    return getHotels();
  }, []);

  return (
    <div className="Home">
      <Container>
        <SearchInput setSearcValue={setSearcValue} />
        <Hotels hotels={hotels} />
      </Container>
    </div>
  );
};

export default Home;
