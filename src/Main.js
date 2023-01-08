import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component{
  render(){
    return(
      <>
      <HornedBeast title="title" imgUrl="url" description="description"/>
      <HornedBeast title="title" imgUrl="url" description="description"/>
      </>
    )
  }
}

export default Main;