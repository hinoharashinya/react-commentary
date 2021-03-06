import {Switch, Route} from "react-router-dom";

import {Home} from "./Home";
import {Page1} from "./Page1";
import {Page2} from "./Page2";
import {DetailA} from "./DetailA";
import {DetailB} from "./DetailB";
import { UrlParameter } from "./UrlParameter";
import { Page404 } from "./Page404";
import { CountUp } from "../memo/CountUp";

export const Routes = () => {
  return(
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/page1"
          render={({match: {url}}) => (
            <Switch>
              <Route exact path={url}>
                <Page1 />
              </Route>
              <Route path={`${url}/detailA`}>
                <DetailA />
              </Route>
              <Route path={`${url}/detailB`}>
                <DetailB />
              </Route>
            </Switch>
          )}
        />
        <Route
          path="/page2"
          render={({match: {url}}) => (
            <Switch>
              <Route exact path={url}>
                <Page2 />
              </Route>
              <Route path={`${url}/:id`}>
                <UrlParameter />
              </Route>
            </Switch>
          )}
        />
        <Route path="/countUp">
          <CountUp />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </>
  );
}
