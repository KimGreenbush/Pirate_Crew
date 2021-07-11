/**
 * @jest-environment jsdom
 */

import React from "react";
import AddForm from "./AddForm.jsx";
import renderer from "react-test-renderer";

test("renders AddForm without crashing", () => {
	const component = renderer.create(<AddForm />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});