import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Switch, Route, useLocation } from 'react-router-dom';
import axios from 'axios';

import ViconeNavbar from 'components/ViconeNavbar';
import ViconeFooter from 'components/ViconeFooter';
import HomePage from 'containers/Home';
import NotFound from 'containers/NotFoundPage';
import NewsPage from 'containers/NewsPage';
import Routes from 'constants/routes';

import GlobalStyle from 'global-styles';

const AppWrapper = styled.div`
`;

function App() {
  const location = useLocation();
  const [operations, setOperations] = useState({});

  useEffect(() => {
    axios.get('http://api.vicone.vn/api/settings')
    .then(data => {
      const settings = data?.data ?? {};
      setOperations(settings);
    })
    .catch(err => {
      console.log(err);
    });
  }, []);
  return (
    <AppWrapper>
      <ViconeNavbar currentLocation={location} operations={operations} />
      <Switch>
        <Route exact path="/" render={(props) => <HomePage operations={operations} {...props} />} />
        <Route exact path={Routes.NEWS} component={NewsPage} />
        <Route component={NotFound} />
      </Switch>
      <ViconeFooter operations={operations} />
      <GlobalStyle />
    </AppWrapper>
  );
}

export default App;
