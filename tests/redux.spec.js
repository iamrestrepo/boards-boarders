import { expect } from "chai";
import { createStore } from "redux";

//import functions
import reducer from "../client/reducers/root";

describe(" :: REDUX :: Testing connected components", () => {
  it("sets error message when trying to save empty title", () => {
    // There are two ways to render connected components:
    // 1. Wrap the component with Provider:
    // const wrapper = mount(<Provider store={store}><SampleConnectedComponentForm/></Provider>);
    // 2. Exporting connected component itself besides exporting connected wrap.
    // simply add export near class definition, there should be two exports for one class, assume we have that:

    // Mock mapStateToProps and mapDispatchToProps
    const props = {
      arrPropFromStore: [],
      objPropFromStore: {},
      actions: {
        methodToDispatch: () => {
          return Promise.resolve();
        }
      }
    };

    const wrapper = mount(<SampleConnectedComponentForm {...props} />);
    const saveButton = wrapper.find("input").last();
    expect(saveButton.prop("type").toBe("submit"));
    saveButton.simulate("click");

    expect(wrapper.state().errors.title).toBe("Title is empty.");
  });
});
