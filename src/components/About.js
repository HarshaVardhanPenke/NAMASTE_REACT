import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";
class About extends React.Component{
    constructor(props){
        super(props)
    // console.log("parent constructor")
    }
    componentDidMount(){
//console.log("parent component did mount")
    }
    render(){
       // console.log("parent render")
        return(
            <div>
           
            <h1>about us page</h1>
            <div>
                LoggedIn user: <UserContext.Consumer>
                   { ({LoggedUser})=>(
                    //    <h1>{LoggedUser}</h1>    
                   <h1 className="text-xl font-bold">
                    {LoggedUser}</h1>                                 
                   )}
                </UserContext.Consumer>
            </div>
            <UserClass name={"Harsha"} location={"kakinada"}/>
        </div>
        )
    }
        
    
}

export default About;