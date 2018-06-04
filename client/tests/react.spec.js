import React from "react";
import { expect } from "chai";
import Enzyme, { shallow } from "enzyme"; // shallow renders one layer deep
import Adapter from "enzyme-adapter-react-16";
import { spy } from "sinon";

const adapter = new Adapter();
Enzyme.configure({ adapter });

// import components to be test here

import Main from "../components/Main";

describe(" :: React :: components", () => {
  let shallowComponent;

  beforeEach("Create component", () => {
    // 'shallow' is a method provided by the enzyme library.
    // It performs a 'virtual render', the component, just as if a parent component had rendered it (or just as if
    // we passed it to ReactDOM.render). However, it doesn't render to the real DOM. Instead, it returns a 'wrapper'.
    // This 'wrapper' object contains information about what the rendered component would look like, and provides
    // useful methods for testing it.
    shallowComponent = shallow(<Main />);
  });

  it("has a State", () => {
    // ShallowWrapper.state() gives us the current `this.state` of the component
    expect(shallowComponent.state()).to.be.an("object");
  });
});
