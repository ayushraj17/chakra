import React from "react";
// import one from "../images/1.jpg";
// import two from "../images/2.jpg";
// import three from "../images/3.jpg";
// import four from "../images/4.jpg";
// import five from "../images/5.jpg";
// import six from "../images/6.jpg";
// import seven from "../images/7.jpg";
// import eight from "../images/8.jpg";
// import nine from "../images/9.jpg";
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
							<img
								className=""
								src="https://images.unsplash.com/photo-1560920452-da0369e98fe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
								alt=""
							/>
							<img
								className=""
								src="https://images.unsplash.com/photo-1523699289804-55347c09047d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
								alt=""
							/>
							<img
								src="https://images.unsplash.com/photo-1579102357795-b6c8850c662b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
								alt=""
							/>
						</div>
					</Slide>
					<Slide index={1}>
						<div className="grid grid-cols-3 gap-6">
							<img
								className=""
								src="https://images.unsplash.com/photo-1580747182325-66c1cbcdb289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
								alt=""
							/>
							<img
								className=""
								src="https://images.unsplash.com/photo-1579102312541-82a59b269d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
								alt=""
							/>
							<img
								src="https://images.unsplash.com/photo-1579102307284-2faa7aa72b1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
								alt=""
							/>
						</div>
					</Slide>
					<Slide index={2}>
						<div className="grid grid-cols-3 gap-6">
							<img
								className=""
								src="https://images.unsplash.com/photo-1576007632052-e802ee16efe9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
								alt=""
							/>
							<img
								className=""
								src="https://images.unsplash.com/photo-1576007614078-ca9d3be1e1af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
								alt=""
							/>
							<img
								src="https://images.unsplash.com/photo-1588351829783-6edb9bd6af6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
								alt=""
							/>
						</div>
					</Slide>
				</Slider>
			</CarouselProvider>
		</div>
	);
}

export default Gallery;
