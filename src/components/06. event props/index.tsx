// Tutorial -6 Event Props

import React from "react";

type buttonProps = {
	// when function does accept parameter or return value, since it doesnt return anything so 'void'
	handleClick?: () => void;

	// when passing event as the parameter,
	// Type of the click event is React.MouseEvent and to be more specific , since it is a button click <HTMLButtonElement>
	handleEventFn: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void; // Event Type
};

const Button = (props: buttonProps) => {
	return (
		<div>
			{/* <button onClick={props.handleClick}>click</button> */}
			<button
				onClick={(event) => {
					props.handleEventFn(event, 1); // if i make handleEventFn optional, it shows the error, 'cannot invoke an object which is possiblly undefined'
				}}
			>
				click
			</button>
		</div>
	);
};
// -------------------------------------------Example 02-----------------------------------------------------------
type inputProps = {
	value: string;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input = (props: inputProps) => {
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event);
	};
	return (
		<div>
			{/* <input type='text' value={props.value} onChange={props.handleChange} /> */}
			<input type='text' value={props.value} onChange={handleInputChange} />
		</div>
	);
};
// ----------------------------------------------------------------------------------------------------------------

const App = () => {
	return (
		<div>
			{/* <Button
				handleClick={() => {
					console.log("button clicked");
				}}
			/> */}
			<Button
				handleEventFn={(event, id) => {
					console.log("Button clicked", event, id);
				}}
			/>
			<Input
				value='Hello'
				handleChange={(event) => {
					console.log(event);
				}}
			/>
		</div>
	);
};

// -----------------------------------------------------------------------------------------------------------------
