import { fireEvent, render,screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/mockResLisData.json";
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"



global.fetch=jest.fn(()=>{
   return Promise.resolve({
    json:()=>{
        return Promise.resolve(MOCK_DATA);
    }
   })
})


it("Should search res list under nation ",async()=>{
      
            await act(async ()=>render(
            <BrowserRouter>   
            <Body/>
            </BrowserRouter>
            )) 
        
   const   cardsBeforeSearch = screen.getAllByTestId("resCard");       

  expect(cardsBeforeSearch.length).toBe(9);
    const searchBtn=screen.getByRole("button",{name :"Search"});
   
   const searchInput=screen.getByTestId("searchInput");
   fireEvent.change(searchInput,{target :{value:"pizza"}})
   fireEvent.click(searchBtn);
       const cardsAfterSearch=screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(1);
        
 

})

it("Should filter top rated restaurants",async()=>{
      
    await act(async ()=>render(
    <BrowserRouter>   
    <Body/>
    </BrowserRouter>
    )) 

const   cardsBeforeSearch = screen.getAllByTestId("resCard");       

expect(cardsBeforeSearch.length).toBe(9);

const topRatedbtn=screen.getByRole("button",{name:"Top Rated Restaurants"});
fireEvent.click(topRatedbtn)

const cardsAfterFilter=screen.getAllByTestId("resCard");
expect(cardsAfterFilter.length).toBe(7)



})