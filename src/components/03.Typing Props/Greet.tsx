// Tutorial -3 Typing Props

// use 'type' for applications and 'interface' for library
type GreetProps = {
	name: string;
	messageCount: number;
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
function App() {
	const personname = {
		FirstName: "karthik",
		age: 28,
	};
	return (
		<div className='App'>
			<Greet name='Karthik' messageCount={20} />
			<Person name={personname} />
		</div>
	);
}
