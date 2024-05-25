import { Provider } from "react-redux"
import Header from "../Header"
import { fireEvent, render,screen } from "@testing-library/react"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

it("should load header component with a login button",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>    
                <Header/>
            </Provider>
        </BrowserRouter>
     )
     const loginButton= screen.getByRole("button");
    
     expect(loginButton).toBeInTheDocument();


})
it("should load header component with cart items zero",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>    
                <Header/>
            </Provider>
        </BrowserRouter>
     )
     const cartItems= screen.getByText("Cart -(0)");
    
     expect(cartItems).toBeInTheDocument();


})
it("should load header component with cart items anything",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>    
                <Header/>
            </Provider>
        </BrowserRouter>
     )
     const cartItems= screen.getByText(/Cart/);
    
     expect(cartItems).toBeInTheDocument();


})

it("should change login button to logout when clicking",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>    
                <Header/>
            </Provider>
        </BrowserRouter>
     )
     const loginButton= screen.getByRole("button", {name:"login"});
    fireEvent.click(loginButton)
    const logOutButton= screen.getByRole("button", {name:"logout"});
    
     expect(logOutButton).toBeInTheDocument();


})