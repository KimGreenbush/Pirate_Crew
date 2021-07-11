/**
 * @jest-environment jsdom
 */

import React from "react";
import Main from "./Main";
import renderer from "react-test-renderer";

test("renders Main without crashing", () => {
	const component = renderer.create(<Main />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
