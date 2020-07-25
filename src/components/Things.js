import React from "react";

function Things() {
	return (
		<div className="my-24">
			<div className="text-2xl mb-12 text-center uppercase font-hairline tracking-wide">
				Things TO DO
			</div>
			<div className="grid-cols-3 grid gap-0 md:gap-8">
				<div>
					<span className="flex justify-center text-lg my-8 text-center ">
						Wineries Tour
					</span>
					<span className="flex justify-center mx-8  align-center text-center italic text-gray-500">
						I'm a paragraph. Click here to add your own text and edit me.
					</span>
				</div>
				<div>
					<span className=" flex justify-center text-lg my-8 text-center">
						Cultural Sites
					</span>
					<span className="flex justify-center align-center mx-8 text-center italic text-gray-500">
						I'm a paragraph. Click here to add your own text and edit me.
					</span>
				</div>
				<div>
					<span className="flex justify-center text-lg my-8 ">
						Market Tour{" "}
					</span>
					<span className="flex justify-center mx-8 text-center italic text-gray-500">
						I'm a paragraph. Click here to add your own text and edit me.
					</span>
				</div>
				<div>
					<span className="flex justify-center text-lg my-8 text-center">
						Leisure Activities
					</span>
					<span className="flex justify-center mx-8 text-center italic text-gray-500">
						I'm a paragraph. Click here to add your own text and edit me.
					</span>
				</div>
				<div>
					<span className="flex justify-center text-lg my-8 text-center">
						Birds Safari
					</span>
					<span className="flex justify-center mx-8 text-center italic text-gray-500">
						I'm a paragraph. Click here to add your own text and edit me.
					</span>
				</div>
				<div>
					<span className="flex justify-center text-lg my-8 text-center">
						Horse Riding
					</span>
					<span className="flex justify-center mx-8 text-center italic text-gray-500">
						I'm a paragraph. Click here to add your own text and edit me.
					</span>
				</div>
			</div>
		</div>
	);
}

export default Things;
