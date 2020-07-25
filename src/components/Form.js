import React from "react";

function Form() {
	return (
		<div>
			<form>
				<div class="flex flex-wrap -mx-3 mb-2 mr-px">
					<div class="w-full md:w-3/12 px-3 mb-6 md:mb-0">
						<label
							class="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
							for="grid-city"
						>
							Check In
						</label>
						<input
							class="appearance-none block w-full bg-white text-gray-900 border border-gray-900 py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-city"
							type="date"
							placeholder="Albuquerque"
						/>
					</div>
					<div class="w-full md:w-3/12 px-3 mb-6 md:mb-0">
						<label
							class="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
							for="grid-city"
						>
							Check Out
						</label>
						<input
							class="appearance-none block w-full bg-white text-gray-900 border border-gray-900 py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-city"
							type="date"
							placeholder="Albuquerque"
						/>
					</div>
					<div class="w-full md:w-2/12 px-3 mb-6 md:mb-0">
						<label
							class="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
							for="grid-city"
						>
							Adults
						</label>
						<input
							class="appearance-none block w-full bg-white text-gray-900 border border-gray-900 py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-city"
							type="number"
							placeholder="1"
							defaultValue="1"
						/>
					</div>
					<div class="w-full md:w-2/12 px-3 mb-6 md:mb-0">
						<label
							class="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
							for="grid-city"
						>
							Kids
						</label>
						<input
							class="appearance-none block w-full bg-white text-gray-900 border border-gray-900 py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-city"
							type="number"
							placeholder="0"
							defaultValue="0"
						/>
					</div>
					<button className="bg-gray-900 py-3 mx-3 md:py-0 md:mx-0 text-white w-full md:w-2/12 text-small mt-5 ">
						Search
					</button>
				</div>
			</form>
		</div>
	);
}

export default Form;
