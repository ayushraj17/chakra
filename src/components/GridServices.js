import React from "react";

function GridServices() {
	return (
		<div className="my-48 h-screen">
			<div className="text-2xl mb-12 text-center uppercase font-hairline tracking-wide">
				Our services
			</div>
			<div className="grid-cols-3 grid gap-8">
				<div>
					<span class="material-icons flex justify-center text-4xl text-gray-700">
						free_breakfast
					</span>
					<span className="flex justify-center text-lg my-2 ">Breakfast</span>
					<span className="flex justify-center mx-8 text-center italic text-gray-500">
						I'm a paragraph. Click here to add your own text and edit me.
					</span>
				</div>
				<div>
					<span class="material-icons flex justify-center text-4xl text-gray-700">
						grass
					</span>
					<span className="flex justify-center text-lg my-2 ">Garden</span>
					<span className="flex justify-center mx-8 text-center italic text-gray-500">
						I'm a paragraph. Click here to add your own text and edit me.
					</span>
				</div>
				<div>
					<span class="material-icons flex justify-center text-4xl text-gray-700">
						waves
					</span>
					<span className="flex justify-center text-lg my-2 ">Pool</span>
					<span className="flex justify-center mx-8 text-center italic text-gray-500">
						I'm a paragraph. Click here to add your own text and edit me.
					</span>
				</div>
				<div>
					<span class="material-icons flex justify-center text-4xl text-gray-700">
						wifi
					</span>
					<span className="flex justify-center text-lg my-2 ">Wi-Fi</span>
					<span className="flex justify-center mx-8 text-center italic text-gray-500">
						I'm a paragraph. Click here to add your own text and edit me.
					</span>
				</div>
				<div>
					<span class="material-icons flex justify-center text-4xl text-gray-700">
						local_laundry_service
					</span>
					<span className="flex justify-center text-lg my-2 text-center">
						Daily HouseKeeping
					</span>
					<span className="flex justify-center mx-8 text-center italic text-gray-500">
						I'm a paragraph. Click here to add your own text and edit me.
					</span>
				</div>
				<div>
					<span class="material-icons flex justify-center text-4xl text-gray-700">
						local_dining
					</span>
					<span className="flex justify-center text-lg my-2 text-center">
						In-Room Dining service
					</span>
					<span className="flex justify-center mx-8 text-center italic text-gray-500">
						I'm a paragraph. Click here to add your own text and edit me.
					</span>
				</div>
			</div>
		</div>
	);
}

export default GridServices;
