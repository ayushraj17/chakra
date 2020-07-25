import React from "react";
import ScrollspyNav from "react-scrollspy-nav";

function AppBar() {
	return (
		<ScrollspyNav
			scrollTargetIds={[
				"home",
				"about",
				"rooms",
				"services",
				"gallery",
				"see",
				"contact",
			]}
			offset={-200}
			activeNavClass="text-gray-500"
			scrollDuration="500"
			headerBackground="true"
		>
			<div
				className="bg-gray-900  z-50  w-screen fixed   py-8"
				style={{ top: "0px" }}
			>
				<ul class="flex  justify-between items-center bg-gray-900   w-screen lg:px-56  ">
					<li class="mr-3">
						<a
							class="inline-block  rounded py-2 px-4   text-white"
							href="#home"
						>
							HOME
						</a>
					</li>
					<li class="mr-3">
						<a
							class="inline-block  rounded py-2 px-4   text-white"
							href="#about"
						>
							ABOUT
						</a>
					</li>
					<li class="mr-3">
						<a
							class="inline-block  rounded py-2 px-4   text-white"
							href="#rooms"
						>
							ROOMS
						</a>
					</li>
					<li class="mr-3">
						<a
							class="inline-block  rounded py-2 px-4   text-white"
							href="#services"
						>
							SERVICES
						</a>
					</li>
					<li class="mr-3">
						<a
							class="inline-block  rounded py-2 px-4   text-white"
							href="#gallery"
						>
							GALLERY
						</a>
					</li>
					<li class="mr-3">
						<a class="inline-block  rounded py-2 px-4   text-white" href="#see">
							SEE & DO
						</a>
					</li>
					<li class="mr-3">
						<a
							class="inline-block  rounded py-2 px-4   text-white"
							href="#contact"
						>
							CONTACT
						</a>
					</li>
					<li class="mr-3">
						<a
							class="inline-block  border border-white hover:bg-white hover:text-gray-900 rounded py-2 px-4   text-white"
							href="#book"
						>
							Book a Room
						</a>
					</li>
				</ul>
			</div>
		</ScrollspyNav>
	);
}

export default AppBar;
