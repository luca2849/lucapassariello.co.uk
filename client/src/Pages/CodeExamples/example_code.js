import Car from "../../Components/Carousel/Carousel";

const components = {
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
		<Car width="50%">
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

export default components;
