// Tutorial -5 Advanced Props

import React from "react";

// use 'type' for applications and 'interface' for library
type GreetProps = {
	name: string;
	messageCount?: number; //optional type
	isLoggedIn: Boolean; //Boolean Type
};

const Greet = (props: GreetProps) => {
	const { messageCount = 0 } = props;
	return (
		<div>
			Welcome {props.name}. You have {messageCount} unread messages.
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
type PersonListProps = {
	// Array of Objects Type
	names: {
		first: string;
		last: string;
	}[];
};

const PersonList = (props: PersonListProps) => {
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
// ----------------------------------------------05----------------------------------------------------------
type statusProps = {
	status: string;
	// status: 'success' | 'error'| 'loading';
};
const Status = (props: statusProps) => {
	let message;
	if (props.status === "loading") {
		message = "Loading....";
	} else if (props.status === "success") {
		message = "Data Fetched SuccessFully";
	} else if (props.status === "error") {
		message = "Error Fetching Data";
	}
	return (
		<div>
			<div>Loading....</div>
			<div>Data Fetched SuccessFully</div>
			<div>Error Fetching data</div>
		</div>
	);
};
// ----------------------------------------------05---------------------------------------------------------
type HeadingProps = {
	children: string; // children Type
};

const Heading = (props: HeadingProps) => {
	return <div>{props.children}</div>;
};
// ----------------------------------------------05--------------------------------------------------------
type oscarProp = {
	children: React.ReactNode; // component Type
};
const Oscar = (props: oscarProp) => {
	return <div>{props.children}</div>;
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
			<Status status='success' />
			<Heading>Hello</Heading>
			<Oscar>
				<Heading>Oscar goes to Lenardo Dicaprio</Heading>
			</Oscar>
			<Greet name='Karthik' isLoggedIn={true} />
		</div>
	);
}
