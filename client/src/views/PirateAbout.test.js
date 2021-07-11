/**
 * @jest-environment jsdom
 */

import React from "react";
import PirateAbout from "./PirateAbout";
import renderer from "react-test-renderer";

test("renders PirateAbout without crashing", () => {
	const component = renderer.create(<PirateAbout />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
