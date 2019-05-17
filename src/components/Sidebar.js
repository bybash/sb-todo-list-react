import React from "react";
import { connect } from "react-redux";
import { Image, Container, Row, Col, ListGroup } from "react-bootstrap";
import { getUser, gotUser } from "../redux/actions";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagePath: ""
    };
  }
  componentDidMount() {

    this.props.getUser("guglielmo");

  }
  componentDidUpdate() {

    if (!this.props.user) {
      this.props.gotUser({ name: "Guglielmo Marconi", image: "guglielmo-marconi.jpg" });
    }
  }

  listTheLists = () => {
    if (this.props.internalList && this.props.internalList.length > 0) {
      return (
        <ListGroup>
          <ListGroup.Item key={this.props.internalList[0].list_id} className="sidebar-item" >
            <img width={24} src={require("../assets/listicon.png")} />
            <span> {this.props.internalList[0].list_id} </span>

          </ListGroup.Item >
        </ListGroup>

      );
    }
    return null;
  }

  render() {

    return (

      this.props.userLoading ? null // do something for loading
        :
        this.props.user ?
          <Container style={{ padding: 15 }} >
            <Row>
              <Col sm={12}> <Image width={50} height={50} src={require("../assets/" + this.props.user.image)} roundedCircle />

                <div style={{ paddingLeft: 10, fontWeight: 600, display: "inline-flex" }} >{this.props.user && this.props.user.name} </div>
              </Col>

            </Row>
            <Row style={{ marginTop: 20 }}>
              <Col sm={12}>
                {this.listTheLists()}
              </Col>
            </Row>
          </Container>
          : <span>Getting User Info</span>

    );

  }
}
const mapStateToProps = (state) => {
  const { user, userLoading } = state.list;
  return { user, userLoading };
};
export default connect(mapStateToProps, { getUser, gotUser })(Sidebar);

