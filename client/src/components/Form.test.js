/**
 * @jest-environment jsdom
 */

import React from "react";
import Form from "./Form";
import renderer from "react-test-renderer";

test("renders Form without crashing", () => {
	const component = renderer.create(<Form />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
