import React from "react";
import data from "./data.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import SelectedBeast from "./SelectedBeast";
import Form from 'react-bootstrap/Form';
import { Container } from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: '',
      image_url: '',
      description: '',
      updatedHornData: data
    }
  }

  handleShowModal = (title, image_url, description) =>      // Modal handler
  {
    this.setState({
      showModal: true,
      title: title,
      description: description,
      image_url: image_url
    })
  }

  handleCloseModal = () =>                        // Close modal handler
  {
    this.setState({
      showModal: false
    })
  }

filterBeasts = (e) =>{              //Filtering page
  e.preventDefault();
  const hornsSelector = e.target.value;
  let updatedHornData;

  if (hornsSelector === "")
  {
    updatedHornData = data;
  }
  else if (hornsSelector === "1")
  {
    updatedHornData = data.filter(beast => beast.horns === 1);
  }
  else if (hornsSelector === "2")
  {
    updatedHornData = data.filter(beast => beast.horns === 2);
  }
  else if (hornsSelector === "3")
  {
    updatedHornData = data.filter(beast => beast.horns === 3);
  }
  else if (hornsSelector === "100")
  {
    updatedHornData = data.filter(beast => beast.horns === 100);
  }

  this.setState(
    {updatedHornData: updatedHornData}
  )

} 

  render() {
    return (
      <>
        <Header />

        <Container>
          <Form>
            <Form.Group>
              <Form.Select size="lg" onChange={this.filterBeasts}>
                <option value={""}>All Beasts</option>
                <option value={"1"}>1 horn</option>
                <option value={"2"}>2 horns</option>
                <option value={"3"}>3 horns</option>
                <option value={"100"}>100 horns</option>
              </Form.Select>
            </Form.Group>
          </Form>
          
        </Container>

        <Main
          data={this.state.updatedHornData}
          handleShowModal={this.handleShowModal} />

        <SelectedBeast
          data={this.state.updatedHornData}
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
          title={this.state.title}
          image_url={this.state.image_url}
          description={this.state.description}

        />

        <Footer />
      </>
    )
  }
}

export default App;

