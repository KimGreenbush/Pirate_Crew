/**
 * @jest-environment jsdom
 */

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import renderer from "react-test-renderer";

it("renders App without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<App />, div);
});

test("App get pirates", () => {
	const component = renderer.create(
		<App />,
	)
	let tree = component.toJSON()
	expect(tree).toMatchSnapshot();
})