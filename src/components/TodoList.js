import React from "react";
import { connect } from "react-redux";
import { Image, Container, Row, Col, ListGroup } from "react-bootstrap";
import { getList, gotList, addToList, editItem, deleteFromList } from "../redux/actions";
import moment from "moment";

import bg from "../assets/canyon.jpg";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagePath: ""
    };
  }
  componentDidMount() {



  }
  componentDidUpdate() {


  }

  itemStatChange(listItem) {

    var item = listItem;
    item.isCompleted = !item.isCompleted;
    this.props.editItem(item);

  }

  deleteItem(listItem) {

    var item = listItem;
    this.props.deleteFromList(item);
  }

  fillList = () => {
    if (this.props.internalList) {

      return this.props.internalList.map((item) =>

        this.getListItem(item)

      );

    }
    return null;
  }

  handleChange = (e, listItem) => {


    if (!listItem.isCompleted) {
      var item = listItem;
      item.todotext = e.target.value;
      this.props.editItem(item);
    }
  }

  getListItem = (listItem) => {
    var src = listItem.isCompleted ? "checked.png" : "unchecked.png";

    return (
      <ListGroup.Item key={listItem.id} className="todo-item">
        <img width={24} src={require("../assets/" + src)}
          onClick={this.itemStatChange.bind(this, listItem)}
        />
        <input className={`todo-list-item ${listItem.isCompleted ? "todo-done" : ""}`}
          type="text" value={listItem.todotext} onChange={(e) => this.handleChange(e, listItem)} />
        <img height={24} className="todo-item-erase" src={require("../assets/trash.png")}

          onClick={this.deleteItem.bind(this, listItem)}

        />

      </ListGroup.Item >
    );
  }
  addItem() {


    if (this.props.internalList) {
      let idx = this.props.internalList.length;
      idx++;
      let item = { id: idx, list_id: "Team To-Do List", todotext: "todotest " + idx, isCompleted: false };
      this.props.addToList(item);
    }


  }

  addItemDiv = () => {
    return (
      <ListGroup>
        <ListGroup.Item key={"additem"} className="add-item-button" onClick={this.addItem.bind(this)}>
          <img width={24} src={require("../assets/addicon.png")} />
          <span className="add-new-item"> Add a to-do </span>

        </ListGroup.Item >
      </ListGroup>

    );
  }

  render() {

    return (

      this.props.listLoading ? null // do something for loading
        :
        this.props.internalList && this.props.internalList.length > 0 ?
          <Container>
            <Row className="todos-header" style={{ backgroundImage: `url(${bg})` }}>
              <Col sm={12}></Col>
              <Col sm={12} style={{ paddingTop: 90 }} > {this.props.internalList[0].list_id} <br />
                <div className="date-span" >{moment().format("dddd, MMMM Do YYYY")} </div>

              </Col>
            </Row>
            <Row>
              <Col sm={12} style={{ padding: 0 }} >
                <ListGroup style={{ padding: 10, backgroundColor: "white" }}>
                  {this.fillList()}
                </ListGroup>
              </Col>
            </Row>
            <Row>
              <Col sm={12} style={{ padding: 10 }}>
                {this.addItemDiv()}
              </Col>
            </Row>
          </Container>
          : <span>Getting List</span>

    );

  }
}
const mapStateToProps = (state) => {
  const { listLoading } = state.list;
  return { listLoading };
};
export default connect(mapStateToProps, { getList, gotList, deleteFromList, editItem, addToList })(TodoList);

