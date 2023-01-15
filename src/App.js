import React from "react";
import data from "./data.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import SelectedBeast from "./SelectedBeast";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      showModal:false,
      title:'',
      image_url:'',
      description:''
    }
  }

handleShowModal = (title, image_url, description) =>
{
  this.setState({
    showModal: true,
    title: title,
    description: description,
    image_url: image_url
  })
}

handleCloseModal = () =>
{
  this.setState({
    showModal: false
  })
}
  render() {
    return (
      <>
        <Header />

        <Main
          data={data}
          handleShowModal={this.handleShowModal} />

        <SelectedBeast
          data={data}
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