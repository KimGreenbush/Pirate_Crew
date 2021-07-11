/**
 * @jest-environment jsdom
 */

import React from "react";
import DeleteButton from "./DeleteButton";
import renderer from "react-test-renderer";

test("renders DeleteButton without crashing", () => {
	const component = renderer.create(<DeleteButton />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
