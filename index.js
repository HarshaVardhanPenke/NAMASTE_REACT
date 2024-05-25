import React from "react";
import ReactDOM from "react-dom/client";

/**
 * header
 * body
 *    restaurant-cards
 *            image
 *            name
 *            cusines
 * footer
 */
const title = (
  <h1 id="title" key="h2">
    Food villa
  </h1>
);

const HeaderComponent = () => {
  return (
    <div className="header">
    {title}
           <div className="Nav-items">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
                <li>Cart</li>

              </ul>
           </div>
    </div>
  );
};
const RestaurantList=[{
  name:"Yati",
  image:"https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=1788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  cusines:["Dumbiryani","fry piece biryani"],
  
},{
  name:"chandrika",
  image:"https://images.unsplash.com/photo-1633945274309-2c16c9682a8c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  cusines:["Dilkush"],

},{
  name:"burger king",
  image:"https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  cusines:["Chicken Burger"," Veg buger"],

}];

const RestaurantCards=({name,image,cusines})=>{
  
  return(
    <div className="Restaurant-Card">
      <img src={image}></img>
      <h2>{name}</h2>
      <h4>{cusines.join(" , ")}</h4>
    </div>
  );
}

const Body=()=>{
  return (
    <div className="cards">
         {RestaurantList.map(restaurant =>{
          return <RestaurantCards {...restaurant} />
         })} 
    </div>
  );
}

const AppLayout=()=>{
  return(
      <>
          <HeaderComponent />
          <Body />
          {/* <footer/> */}
      </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
