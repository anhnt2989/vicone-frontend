import React from 'react';
import styled from 'styled-components';
import { Switch, Route, useLocation } from 'react-router-dom';

import ViconeNavbar from 'components/ViconeNavbar';
import ViconeFooter from 'components/ViconeFooter';
import HomePage from 'containers/Home';
import NotFound from 'containers/NotFoundPage';
import NewsPage from 'containers/NewsPage';
import Routes from 'constants/routes';

import GlobalStyle from 'global-styles';

const AppWrapper = styled.div``;

function App() {
  const location = useLocation();

  return (
    <AppWrapper>
      <ViconeNavbar currentLocation={location} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path={Routes.NEWS} component={NewsPage} />
        <Route component={NotFound} />
      </Switch>
      <ViconeFooter />
      <GlobalStyle />
    </AppWrapper>
  );
}

export default App;
