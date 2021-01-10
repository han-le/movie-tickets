import React from "react";
import { Route, Redirect } from "react-router-dom";
import FooterGuest from "../../components/FooterGuest";
import NavbarGuest from "../../components/NavbarGuest";

function AdminRender(props) {
  return (
    <div>
      {/*  Cai nay chay truoc loading page va de len html*/}
      {props.children}
      {/*<FooterGuest />*/}
    </div>
  );
}
export default function AdminLayout({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        if (localStorage.getItem("UserAdmin")) {
          return (
            <AdminRender>
              <Component {...propsComponent} />
            </AdminRender>
          );
        }
        return <Redirect to="/login" />;
      }}
    />
  );
}
