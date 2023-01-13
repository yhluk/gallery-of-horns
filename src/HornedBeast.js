import React from "react";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './index.css'


class HornedBeast extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      clickedFavorite: 0
    }
  }

  handleFavorite = () =>
  {
    this.setState({
      clickedFavorite: this.state.clickedFavorite + 1
    });
  }

  render() {

    return (
      <div className = "beast">
        <Card id="card" style={{ width: '18rem',  height: '30rem'}}>
          <Card.Img 
          style={{ height: '18rem' }}
          src={this.props.image_url}
          alt={this.props.title}
          onClick = {this.handleFavorite}
          />
          <Card.Title as='h2'>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text> I like it! {this.state.clickedFavorite} 🫶</Card.Text>
        </Card>


      </div>
    )
  }
}

export default HornedBeast;