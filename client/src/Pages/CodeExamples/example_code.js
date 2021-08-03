import Car from "../../Components/Carousel/Carousel";

export default {
	carousel_str: `<Carousel>
    <Carousel.Item>
        <h3>Page 1</h3>
    </Carousel.Item>
    <Carousel.Item>
        <h3>Page 2</h3>
    </Carousel.Item>
    <Carousel.Item>
        <h3>Page 3</h3>
    </Carousel.Item>
    <Carousel.Item>
        <h3>Page 4</h3>
    </Carousel.Item>
</Carousel>`,
	carousel: (
		<Car>
			<Car.Item>
				<h3>Page 1</h3>
			</Car.Item>
			<Car.Item>
				<h3>Page 2</h3>
			</Car.Item>
			<Car.Item>
				<h3>Page 3</h3>
			</Car.Item>
			<Car.Item>
				<h3>Page 4</h3>
			</Car.Item>
		</Car>
	),
};
