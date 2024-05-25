import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
import { beforeEach } from "node:test";

describe('Contact us page test cases', () => { 
   
    // beforeAll(()=>{
    //     console.log("before all");
    // })
    // beforeEach(()=>{
    //     console.log("before each")
    // })


    it("should load contact us component",()=>{
        render(<Contact/>);
       
        const heading=screen.getByRole("heading");
    
    expect(heading).toBeInTheDocument();
    
    })
    
    it("should load button inside contact component",()=>{
        render(<Contact/>);
       
        const button=screen.getByRole("button");
    
    expect(button).toBeInTheDocument();
    
    })
    
    it("should load input name inside Contact component",()=>{
        render(<Contact/>);
       
        const inputName=screen.getByPlaceholderText("name");
    
    expect(inputName).toBeInTheDocument();
    
    })
    
    it("Should load two input boxes on the Contact component",()=>{
        render(<Contact/>)
    
        const inputBoxes=screen.getAllByRole("textbox");
        expect(inputBoxes.length).toBe(2);
       
    })
 })

