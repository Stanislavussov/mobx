import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import userStore from "./store/user.store";
import { observer } from "./mobx/react";

class Home extends React.Component {
  onChangeHandler = (e) => userStore.setName(e.target.value);

  render() {
    return (
      <div>
        <h1>Enter page</h1>
        <div>Enter your name</div>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type={"text"}
              value={userStore.user.name}
              onChange={this.onChangeHandler}
            />
          </Form.Group>
          <Link to={"/office"}>Login</Link>
        </Form>
      </div>
    );
  }
}

export default observer(Home);
