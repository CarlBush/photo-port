import React from "react";
//render = Jest creates a simulated DOM in a Node.js environment to approximate the DOM
//cleanup = remove components from the DOM to prevent memory leaking, as well as variable or data collisions
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "../index";

//No leftover memory data that could give us false results.
afterEach(cleanup);

describe("Nav component", () => {
    //FIRST TEST | RENDERING
    it("renders", () => {
        render(<Nav/>);
    });
});