import { Switch, Redirect, Route } from "react-router-dom";
import { GiveFeedback, Home, NotFound, ReviewFeedback } from "src/views";

export function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/give">
        <Redirect to="/" />
      </Route>
      <Route
        exact
        path="/give/:personId"
        render={(props) => {
          const { personId } = props.match.params;
          return <GiveFeedback key={personId} personId={personId} />;
        }}
      />
      <Route
        exact
        path="/give/:personId/:questionId"
        render={(props) => {
          const { personId, questionId } = props.match.params;
          return <GiveFeedback personId={personId} questionId={questionId} />;
        }}
      />
      <Route exact path="/review">
        <ReviewFeedback />
      </Route>
      <Route
        exact
        path="/review/:personId"
        render={(props) => {
          const { personId } = props.match.params;
          return <ReviewFeedback key={personId} personId={personId} />;
        }}
      />
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
