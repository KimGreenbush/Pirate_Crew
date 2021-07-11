/**
 * @jest-environment jsdom
 */

import React from "react";
import Pirates from "./Pirates";
import renderer from "react-test-renderer";

test("renders Pirates without crashing", () => {
	const component = renderer.create(<Pirates />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});