import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routesGuest, routesUser, routesAdmin, routesLogin } from "./routes";
import GuestLayout from "./containers/GuestLayout";
import PageNotFound from "./containers/PageNotFound";
import AuthPage from "./containers/AuthPage";
import 'antd/dist/antd.css';

function App() {
  const showLayoutGuest = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <GuestLayout
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };

  const showLayoutLogin = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          // lỗi là do đoạn này em return về thẳng component nhưng nếu vậy thì sẽ không có được những hàm do routing hỗ trợ như history match, blabla,..
          <Route
            key={index}
            exact={item.exact}
            path={item.path}
            render={(propsComponent) => <item.component {...propsComponent}/>}
          />
        );
      });
    }
  };

  return (
    <BrowserRouter>
      <div>
        <Switch>
          {showLayoutGuest(routesGuest)}
          {showLayoutLogin(routesLogin)}
          <Route path="" component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
