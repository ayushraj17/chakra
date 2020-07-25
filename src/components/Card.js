import React from "react";
import banner2 from "../images/banner2.jpg";

function Card() {
	return (
		<div className=" relative flex justify-center items-center z-10 text-center">
			<img src={banner2} className="mb-12" alt="banner" />
			<div
				className="absolute  bg-white text-center "
				style={{ width: "400px", height: "350px" }}
			>
				<div className="mt-12 text-2xl uppercase font-hairline tracking-wide">
					Our rooms
				</div>
				<div className="text-center italic mx-12 mt-6 text-gray-500">
					I'm a paragraph. Click here to add your own text and edit me. I’m a
					great place for you to tell a story and let your users know a little
					more about you.
				</div>
				<button className="bg-transparent hover:bg-gray-900 flex m-auto mt-12 border border-gray-900 py-2 px-4 text-gray-900 hover:text-white">
					Book a Room
				</button>
			</div>
		</div>
	);
}

export default Card;
