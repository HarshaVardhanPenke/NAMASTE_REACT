import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body=()=>{ 

const [ListOfrestaurant,SetListOfrestaurant]=useState([]);
// 


//for filtered restaurants only
const [filteredRestaurants,SetFilteredRestaurants]=useState([]);

const [searchText,setSearchText]=useState("")


const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);


console.log("body rendered",ListOfrestaurant);

 useEffect( ()=>{
    FetchData()
 },[]);
const FetchData= async()=>{
   const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
   const json=await data.json();
   // console.log(json);
   SetListOfrestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.
      infoWithStyle?.restaurants
      );

      console.log("data is",json.data.cards[4].card.card.gridElements.
         infoWithStyle.restaurants);
   SetFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.
         infoWithStyle?.restaurants)

}
const onlineStatus=useOnlineStatus();
if(onlineStatus==false) return (<div><h1>You are offline! check your internet connection</h1></div>)

const {LoggedUser,setUserName}=useContext(UserContext);

    return  ListOfrestaurant.length===0 ? <Shimmer />:
    (
         <div className="body">
            
            <div className="filter flex justify-center m-4">
              <div >
               <input type="text" data-testid="searchInput" testivalue={searchText} className="border border-solid border-black" onChange={(e)=>{
                  setSearchText(e.target.value);
                  
                  SetFilteredRestaurants(FilteredRestaurants);
               }}></input>
               <button className="m-4 py-1  bg-green-200 px-4 rounded-md" onClick={()=>{
                  console.log(searchText)
                  
                  const FilteredRestaurants=ListOfrestaurant.filter((res)=>
                     res.info.name.toLowerCase().includes(searchText.toLowerCase())
                  )
                  console.log(FilteredRestaurants)
                  SetFilteredRestaurants(FilteredRestaurants);
               }}>Search</button>
               
              

            <button className="px-4  m-4 py-1 bg-gray-100 rounded-md" 
            onClick={() => {
             const FilteredList = ListOfrestaurant.filter(
            (res) => res.info.avgRating > 4.0,
           
          );
         SetFilteredRestaurants(FilteredList);
         console.log("clicked" , FilteredList)
        }
            }>Top Rated Restaurants</button>
           <label>UserName : </label>
            <input className="border border-black" value={LoggedUser} onChange={(e)=>setUserName(e.target.value)} ></input>
       </div>
            </div>
      
        <div className="flex flex-wrap gap-12 justify-evenly mt-12"> 
                {
                 filteredRestaurants.map((restaurant)=>(
                    <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                    
                    
                    {/* { //promoted
                      restaurant.data.promoted ? (<RestaurantCardPromoted  resData={restaurant}/>)
                       :(<RestaurantCard  resData={restaurant}/>)
                    } */}
                     <RestaurantCard  resData={restaurant}/>
                     </Link>
                    ))
                }
               
            </div>
         </div>
  
    )
  }

  export default Body;