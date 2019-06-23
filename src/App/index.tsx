import React from 'react';
import { Provider } from 'react-redux';
import store from 'core/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>HELLO</div>
    </Provider>
  );
};

export default App;
