import React from "react";
import { observer } from "./mobx/react";
import userStore from "./store/user.store";

class Office extends React.Component {
  render() {
    return (
      <>
        <h1>Hi, {userStore.user.name}</h1>
      </>
    );
  }
}

export default observer(Office);
