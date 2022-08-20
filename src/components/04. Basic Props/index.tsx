// Tutorial -4 Basic Props

import React from "react";

// use 'type' for applications and 'interface' for library
type GreetProps = {
	name: string;
	messageCount: number;
	isLoggedIn: Boolean; //Boolean Type
};

const Greet = (props: GreetProps) => {
	return (
		<div>
			Welcome {props.name}. You have {props.messageCount} unread messages.
		</div>
	);
};
// -----------------------------------------------------------------------------------------------------
type Personprops = {
	// Object Type
	name: {
		FirstName: string;
		age: number;
	};
};

const Person = (props: Personprops) => {
	return (
		<div>
			My name is {props.name.FirstName} and Im {props.name.age} years old.
		</div>
	);
};

// -------------------------------------------------------------------------------------------------------
type Props = {
	// Array of Objects Type
	names: {
		first: string;
		last: string;
	}[];
};

const PersonList = (props: Props) => {
	return (
		<React.Fragment>
			{/* <div>Bruce Wayne</div>
			<div>Clark Kent</div>
			<div>princess Diana</div> */}
			{props.names.map((item) => (
				<div>
					{item.first} {item.last}
				</div>
			))}
		</React.Fragment>
	);
};
// -------------------------------------------------------------------------------------------------------
function App() {
	const personname = {
		FirstName: "karthik",
		age: 28,
	};

	const nameList = [
		{
			first: "Bruce",
			last: "wayne",
		},
		{
			first: "Clark",
			last: "Kent",
		},
		{
			first: "Princess",
			last: "diana",
		},
	];
	return (
		<div className='App'>
			<Greet name='Karthik' messageCount={20} isLoggedIn={true} />
			<Person name={personname} />
			<PersonList names={nameList} />
		</div>
	);
}
