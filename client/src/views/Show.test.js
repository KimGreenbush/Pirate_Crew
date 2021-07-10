/**
 * @jest-environment jsdom
 */

import React from "react";
import Show from "./Show";
import renderer from "react-test-renderer";

test("renders Show without crashing", () => {
	const component = renderer.create(<Show />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
