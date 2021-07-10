/**
 * @jest-environment jsdom
 */

import React from "react";
import ReactDOM from "react-dom";
import AddForm from "./AddForm.jsx";
import renderer from "react-test-renderer";

it("renders AddForm without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<AddForm />, div);
});

// test("AddForm get pirates", () => {
// 	const component = renderer.create(<AddForm />);
// 	let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();

//     tree.props.clearForm()
//     tree.toJSON()
//     expect(tree).toMatchSnapshot()
// });