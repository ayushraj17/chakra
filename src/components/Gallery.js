import React from "react";
import one from "../images/1.jpg";
import two from "../images/2.jpg";
import three from "../images/3.jpg";
import four from "../images/4.jpg";
import five from "../images/5.jpg";
import six from "../images/6.jpg";
import seven from "../images/7.jpg";
import eight from "../images/8.jpg";
import nine from "../images/9.jpg";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function Gallery() {
	return (
		<div className="mt-18">
			<div className="text-2xl mb-12 text-center uppercase font-hairline tracking-wide">
				Gallery
			</div>
			<CarouselProvider
				naturalSlideWidth={100}
				naturalSlideHeight={50}
				totalSlides={3}
				isPlaying={true}
			>
				<Slider>
					<Slide index={0}>
						<div className="grid grid-cols-3 gap-6">
							<img className="" src={one} alt="" />
							<img className="" src={two} alt="" />
							<img src={three} alt="" />
						</div>
					</Slide>
					<Slide index={1}>
						<div className="grid grid-cols-3 gap-6">
							<img className="" src={four} alt="" />
							<img className="" src={five} alt="" />
							<img src={six} alt="" />
						</div>
					</Slide>
					<Slide index={2}>
						<div className="grid grid-cols-3 gap-6">
							<img className="" src={seven} alt="" />
							<img className="" src={eight} alt="" />
							<img src={nine} alt="" />
						</div>
					</Slide>
				</Slider>
			</CarouselProvider>
		</div>
	);
}

export default Gallery;
