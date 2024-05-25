import { fireEvent, render,screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA_NAME from "../mocks/mockResMenu.json"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import Cart from "../Cart"
global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA_NAME);
        }
    })
})

it("should load restaurant menu component"  ,async()=>{
    await act (async()=>
    render(
        <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
         <RestaurantMenu />
         <Cart/>
    </Provider>
    </BrowserRouter>
    ))
    const accordionHeader=screen.getByText("Combos(5)")
    fireEvent.click(accordionHeader);
    expect(screen.getAllByTestId("foodItems").length).toBe(5);
 
    const addBtn=screen.getAllByRole("button",{name:"Add +"});
    fireEvent.click(addBtn[0]);

    expect(screen.getByText("Cart -(1)")).toBeInTheDocument();
    fireEvent.click(addBtn[0]);
    expect(screen.getByText("Cart -(2)")).toBeInTheDocument();
    
    expect(screen.getAllByTestId("foodItems").length).toBe(7);
    // fireEvent.click.getByRole("Button",{name :"Clear cart"})
    // expect(screen.getAllByTestId("foodItems").length).toBe(5);
})