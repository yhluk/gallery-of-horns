import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json"

class Main extends React.Component{
  render(){
    return(
      <>
        <HornedBeast
          title={"1st-beast"}
          imgUrl={"https://images.unsplash.com/photo-1502641923341-7d3e5c05bd73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"} 
          description={"small beast"}
        />

        <HornedBeast
          title={"2nd-beast"}
          imgUrl={"https://images.unsplash.com/photo-1507824154544-21a54a06a929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} 
          description={"big beast"}
        />

        <HornedBeast
          title={"3rd-beast"}
          imgUrl={"https://images.unsplash.com/photo-1532007195987-bb4ddeaf052d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"} 
          description={"weird beast"}
        />

        <HornedBeast
          title={"4th-beast"}
          imgUrl={"https://images.unsplash.com/photo-1592393830922-2e8568bd3d09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"} 
          description={"say what beast"}
        />

        <HornedBeast
          title={"5th-beast"}
          imgUrl={"https://images.unsplash.com/photo-1632665745163-84b8342ee740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1829&q=80"}
          description={"outdated beast"}
        />

      </>
    )
  }
}

export default Main;