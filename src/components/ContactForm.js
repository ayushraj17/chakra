import React from "react";

function ContactForm() {
	return (
		<div className="bg-gray-200 h-auto  py-12">
			<div className="mt-12 text-2xl uppercase font-hairline px-18  text-center tracking-wide">
				Contact us
			</div>
			<div className="text-center italic py-12 text-lg text-gray-500 tracking-widest">
				info@mysite.com / 500 Terry Francois Street, San Francisco, CA 94158 /
				Tel: 123-456-7890
			</div>
			<form className="flex justify-center flex-wrap md:mx-0 mx-2">
				<div className="grid w-full md:w-5/12 grid-cols-2 gap-4 ">
					<div className="w-full">
						<input
							class="appearance-none block w-full bg-white  text-gray-900  py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="name"
							type="text"
							placeholder="Name*"
						/>
					</div>
					<div>
						<input
							class="appearance-none block w-full bg-white text-gray-900  py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="name"
							type="email"
							placeholder="Email*"
						/>
					</div>
					<div className="col-span-2">
						<input
							class="appearance-none block w-full bg-white text-gray-900  py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="name"
							type="text"
							placeholder="Subject"
						/>
					</div>
					<div className="col-span-2 ">
						<textarea
							rows="5"
							class="appearance-none block w-full bg-white text-gray-900 h-48 py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="name"
							type="textarea"
							placeholder="Message"
						/>
					</div>
					<div className="col-span-2">
						<button className="bg-gray-900 py-2 mx-3  md:mx-0 text-white w-full  ">
							Send
						</button>
					</div>
				</div>
			</form>

			{/* <form className="flex justify-center flex-wrap -mx-3 mb-2 mr-px">
				<div class="w-full md:w-3/12 px-3 mb-6 md:mb-0">
					<input
						class="appearance-none block w-full bg-white text-gray-900  py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="name"
						type="text"
						placeholder="Name*"
					/>
				</div>
				<div class="w-full  md:w-3/12 px-3 mb-6 md:mb-0">
					<input
						class="appearance-none block w-full bg-white text-gray-900  py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="name"
						type="email"
						placeholder="Email*"
					/>
				</div>
				<input
					class="appearance-none block w-full bg-white text-gray-900 mt-4  py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					id="name"
					type="email"
					placeholder="Email*"
				/>
				
			</form> */}
		</div>
	);
}

export default ContactForm;
