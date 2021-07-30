import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Switch, Route, useLocation } from "react-router-dom";
import axios from "axios";
import MessengerCustomerChat from "react-messenger-customer-chat";

import ViconeNavbar from "components/ViconeNavbar";
import ViconeFooter from "components/ViconeFooter";
import Routes from "constants/routes";

import HomePage from "containers/Home";
import NotFound from "containers/NotFoundPage";
import NewsPage from "containers/NewsPage";
import NewsDetailsPage from "containers/NewsDetailsPage";

import GlobalStyle from "global-styles";

const AppWrapper = styled.div``;

function App() {
  const location = useLocation();
  const [operations, setOperations] = useState({});
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.vicone.vn/api/settings")
      .then((data) => {
        const settings = data?.data ?? {};
        setOperations(settings);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("https://api.vicone.vn/api/news?limit=5&page=1")
      .then((data) => {
        const news = data?.data?.data ?? [];
        setNewsList(news);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <AppWrapper>
      <ViconeNavbar
        currentLocation={location}
        operations={operations}
        newsList={newsList}
      />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <HomePage operations={operations} {...props} />}
        />
        <Route exact path={Routes.NEWS} component={NewsPage} />
        <Route
          exact
          path={`${Routes.NEWS}/:slug`}
          component={NewsDetailsPage}
        />
        <Route component={NotFound} />
      </Switch>
      <MessengerCustomerChat
        pageId="<PAGE_ID>"
        appId="<APP_ID>"
        greetingDialogDisplay="fade"
        shouldShowDialog
      />
      <ViconeFooter operations={operations} />
      <GlobalStyle />
    </AppWrapper>
  );
}

export default App;
