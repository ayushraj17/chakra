import React from "react";
import AppBar from "./AppBar";
import Title from "./Title";
import Banner from "./Banner";
import Form from "./Form";
import About from "./About";
import Card from "./Card";
import Card2 from "./Card2";
import GridServices from "./GridServices";
import Gallery from "./Gallery";
import Things from "./Things";
import ContactForm from "./ContactForm";
import Map from "./Map";
import Chat from "./Chat";
// import SideNav from "./SideNav";
import Header from "./Header";

function App() {
	return (
		<div>
			{/* <AppBar /> */}
			<Header />
			<div className="container px-2 md:px-20 m-auto mt-32 ">
				<div>
					<div id="/">
						<span>
							<Title />

							<Banner />
							<Form />
						</span>
					</div>
				</div>

				<div id="About">
					<span>
						<About />
					</span>
				</div>
				<div id="Rooms">
					<span>
						<Card />
					</span>
				</div>
				<div id="Services">
					<span>
						<GridServices />
					</span>
				</div>
				<div id="Gallery">
					<span>
						<Gallery />
					</span>
				</div>
				<div id="See">
					<span>
						<Things />
					</span>
				</div>
				<Card2 />
			</div>
			<div id="Contact">
				<span>
					<ContactForm />
				</span>
			</div>
			<Map />
			<Chat />
		</div>
	);
}

export default App;
