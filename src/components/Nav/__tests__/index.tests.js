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

    //SECOND TEST| COMPARE PUBLISHED VERSION
    it("matches snapshot", () => {
        const { asFragment } = render(<Nav/>);
        expect(asFragment()).toMatchSnapshot();
    });
});

//TEST FOR CAMERA EMOJI IS VISIBLE
describe("emoji is visible", () => {
    it("insert emoji into the h2", () => {
        const { getByLabelText } = render(<Nav/>);
        expect(getByLabelText("camera")).toHaveTextContent("📸");
    });
});

//TEST FOR LINK VISIBLITY
describe("links are visible", () => {
    it("insert text into the links", () => {
        const { getByTestId } = render(<Nav/>);
        expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
        expect(getByTestId("about")).toHaveTextContent("About me");
    });
});