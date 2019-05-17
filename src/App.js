
import React from "react";
import { connect } from "react-redux";
import { getList, gotList } from "./redux/actions";
import {
  Container,
  Row,
  Col
} from "react-bootstrap";

import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import TodoList from "./components/TodoList";


class App extends React.Component {

  componentDidMount() {
    this.props.getList("Team To-Do List");
    if (!this.props.list) {
      this.props.gotList([{ id: 1, list_id: "Team To-Do List", todotext: "todotest 1", isCompleted: true },
      { id: 2, list_id: "Team To-Do List", todotext: "todotest 2", isCompleted: false },
      { id: 3, list_id: "Team To-Do List", todotext: "todotest 3", isCompleted: false }
      ]);

    }
  }
  render() {
    return (
      <Container>
        <Row>
          <Col sm={4} className="sidebar"><Sidebar internalList={this.props.list} /></Col>
          <Col sm={8} className="listside" ><TodoList internalList={this.props.list} /> </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { list, listLoading } = state.list;
  return { list, listLoading };
};
export default connect(mapStateToProps, { getList, gotList })(App);