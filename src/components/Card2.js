import React from "react";
import banner2 from "../images/banner2.jpg";
import {
	CarouselProvider,
	Slider,
	Slide,
	DotGroup,
	Dot,
} from "pure-react-carousel";
// import "pure-react-carousel/dist/react-carousel.es.css";
function Card2() {
	return (
		<div className=" relative flex justify-center items-center z-10 text-center">
			<img src={banner2} className="mb-12" alt="" />
			<div
				className="absolute  bg-white text-center "
				style={{ width: "400px", height: "350px" }}
			>
				<div className="mt-12 text-2xl uppercase font-hairline tracking-wide">
					Guest Review
				</div>
				<div className="text-center italic mx-12 mt-16 text-gray-500">
					<CarouselProvider
						naturalSlideWidth={100}
						naturalSlideHeight={125}
						totalSlides={3}
						isPlaying={true}
					>
						<Slider>
							<Slide index={0}>
								“I'm a paragraph. Click here to add your own text and edit me.
								I’m a great place for you to tell a story and let your users
								know a little more about you.”
							</Slide>

							<Slide index={1}>
								“I'm a paragraph. Click here to add your own text and edit me."
							</Slide>
							<Slide index={2}>
								"I am the third Review.“I'm a paragraph. Click here to add your
								own text and edit me.
							</Slide>
						</Slider>
						<DotGroup>
							<Dot slide={0} />
							<Dot slide={1} />
							<Dot slide={2} />
						</DotGroup>
					</CarouselProvider>
					.
				</div>
			</div>
		</div>
	);
}

export default Card2;
