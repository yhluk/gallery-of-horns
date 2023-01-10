import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component{
  render(){
    return(
      <>
      <HornedBeast 
      title={"1st-beast"} 
      imgUrl={"https://images.unsplash.com/photo-1502641923341-7d3e5c05bd73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"} description={"small beast"}
      />

      <HornedBeast 
      title={"2nd-beast"} 
      imgUrl={"https://images.unsplash.com/photo-1507824154544-21a54a06a929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} description={"big beast"}
      />
      </>
    )
  }
}

export default Main;