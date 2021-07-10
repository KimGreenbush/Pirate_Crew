/**
 * @jest-environment jsdom
 */

import React from "react";
import Pirate from "./Pirate";
import renderer from "react-test-renderer";

test("renders Pirate without crashing", () => {
	const component = renderer.create(<Pirate />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
