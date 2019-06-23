import React from 'react';
import Container from '@material-ui/core/Container';

import SearchInput from '../SearchInput';

const Home: React.FC = (props) => {
  return (
    <div className="Home">
      <Container>
        <SearchInput />
      </Container>
    </div>
  );
};

export default Home;
