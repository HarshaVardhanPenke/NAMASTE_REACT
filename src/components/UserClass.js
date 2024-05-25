// import { name } from "ejs";
import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)

       this.state={
            userInfo:{
            login:"Dummy",
            location:"Default"

       }
    }
       
    }
     async componentDidMount(){

        //console.log("child component did mount")
        //api call
        const data=await fetch("https://api.github.com/users/HarshaVardhanPenke");
        const json=await data.json();
    //    console.log(json);
        this.setState({
            userInfo: json,
        })

    }
    render(){
       // console.log("child render")
        const {login,location,
            avatar_url}=this.state.userInfo;
        // console.log(login)
        return(
            <div className="user-card">
                <img src={avatar_url}></img>
                <h2>Name: {login}</h2>
                <h3>Location:{location}</h3>
                <h4>Contact : @harsha</h4>
            </div>
        );
    }
}
export default UserClass;