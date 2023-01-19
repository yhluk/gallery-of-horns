import React from "react";
import { Container, Row } from "react-bootstrap";
import HornedBeast from "./HornedBeast";
import './index.css';


class Main extends React.Component {
  render() {
    return (
      <>
        <main>
          <Container>
            <Row xs={1} sm={2} md={3}>
              {this.props.data.map((hornedBeast) =>
                <HornedBeast
                  title={hornedBeast.title}
                  description={hornedBeast.description}
                  image_url={hornedBeast.image_url}
                  key={hornedBeast._id}
                  handleShowModal={this.props.handleShowModal}
                />
              )}
            </Row>
          </Container>
        </main>
      </>
    )
  }
}

export default Main;