import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ItemPage from "./itemsPage";
import ItemDetail from "./ItemDetail";
import Header from "./header";
import Footer from "./footer";

const Customer = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/items/:genre/:id">
            <Header />
            <ItemDetail genre="electric_guitar" />
            <Footer />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/items/electric_guitar/">
            <Header />
            <ItemPage genre="electric_guitar" />
            <Footer />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/items/acoustic_guitar/">
            <Header />
            <ItemPage genre="acoustic_guitar" />
            <Footer />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/items/bass/">
            <Header />
            <ItemPage genre="bass" />
            <Footer />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/items/effector/">
            <Header />
            <ItemPage genre="effector" />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Customer;
