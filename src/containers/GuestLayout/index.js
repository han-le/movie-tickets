import React from "react";
import { Route } from "react-router-dom";
import FooterGuest from "../../components/FooterGuest";
import NavbarGuest from "../../components/NavbarGuest";

function GuestRender(props) {
  return (
    <div>
      {/*  Cai nay chay truoc loading page va de len html*/}
      <NavbarGuest />
      {props.children}
      {/*<FooterGuest />*/}
    </div>
  );
}
export default function GuestLayout({ Component, ...props }) {
  
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <GuestRender>
          <Component {...propsComponent} />
        </GuestRender>
      )}
    />
  );
}
