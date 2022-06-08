import React from "react";
//render = Jest creates a simulated DOM in a Node.js environment to approximate the DOM
//cleanup = remove components from the DOM to prevent memory leaking, as well as variable or data collisions
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "../index";

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
  ]
  const mockCurrentCategory = jest.fn();
  const mockSetCurrentCategory = jest.fn();
//No leftover memory data that could give us false results.
afterEach(cleanup);

//FIRST TEST | RENDERING
describe("Nav component", () => {
    it("renders", () => {
      render(
        <Nav
          categories={categories}
          setCurrentCategory={mockSetCurrentCategory}
          currentCategory={mockCurrentCategory}
        />
      );
    });

    //SECOND TEST| COMPARE PUBLISHED VERSION
    it("matches snapshot", () => {
        const { asFragment } = render(
          <Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
          />
        );
        expect(asFragment()).toMatchSnapshot();
      });
    });

//TEST FOR CAMERA EMOJI IS VISIBLE
describe("emoji is visible", () => {
    it("inserts emoji into the h2", () => {
      const { getByLabelText } = render(
        <Nav
          categories={categories}
          setCurrentCategory={mockSetCurrentCategory}
          currentCategory={mockCurrentCategory}
        />
      );
      expect(getByLabelText("camera")).toHaveTextContent("📸");
    });
  });

//TEST FOR LINK VISIBLITY
describe("links are visible", () => {
    it("inserts text into the links", () => {
      const { getByTestId } = render(
        <Nav
          categories={categories}
          setCurrentCategory={mockSetCurrentCategory}
          currentCategory={mockCurrentCategory}
        />
      );
      expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
      expect(getByTestId("about")).toHaveTextContent("About me");
    });
  });