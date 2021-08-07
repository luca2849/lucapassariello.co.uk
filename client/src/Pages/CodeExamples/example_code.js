import Car from "../../Components/Carousel/Carousel";
import Toc from "../../Components/TableOfContents/TableOfContents";

const components = [
	{
		name: "carousel",
		created: "July 2021",
		project: "Personal Portfolio",
		desc: "The Carousel component was created to showcase my skills, however upon creating the component, I had other ideas for that section. The component is however still useful and works well, is responsive, and allows for a couple of different configuration options. \n Any valid JSX can be rendered in each Carousel Item.",
		code: "https://github.com/luca2849/lucapassariello.co.uk/tree/main/client/src/Components/Carousel",
		props: [
			{
				name: "width",
				desc: "Defines the width of the carousel component.",
				type: "String/Integer",
				possible_values: ["75%", "'500px'", "500", "'500'"],
				optional: true,
				default: "500",
			},
			{
				name: "duration",
				desc: "Defines the duration of the Carousel slide change animation in milliseconds.",
				type: "Integer",
				possible_values: ["300", "1000"],
				optional: true,
				default: "300",
			},
		],
		how: "The main challenge when creating the Carousel was how to hide the non-displayed slides without affecting the layout of the rest of the page. The solution found was to render all slides (items) as seperate flex items inside a relativley positioned container, with a fixed (or percentage-based) width. \n When changing slide, via the arrows or through the slide selection buttons, the distance to offset the container by is calculated using the width of the Carousel, and the entire Carousel is then transformed by that new offset, getting the user to the correct page. \n Another key feature of this Carousel is its responsiveness. I wanted the user to be able to set a variable width for the Carousel, which they can do via the width prop. This caused some issues when resizing the window, which was solved with an event listener, checking for a change in window size, and recalculating the offsets when this occurs.",
		examples: [
			{
				name: "Basic",
				desc: "This is a basic implementation of the carousel component.",
				string: `<Carousel>
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
				component: (
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
			},
			{
				name: "Variable Width",
				desc: "This is an implementation using a variable percentage width.",
				string: `<Carousel width="50%">
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
				component: (
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
			},
		],
	},
	{
		name: "Table of Contents",
		created: "August 2021",
		project: "Personal Portfolio",
		desc: "The Table of Contents component was created to use on this page, so navigation between documentation sections would be easier. Essentially, it is just a different way of formatting a HTML list, with extra styling. \n Because this component is a practical extension of HTML unordered lists, nested lists can be used to show different sections to the table of contents, allowing for more possible use cases.",
		code: "https://github.com/luca2849/lucapassariello.co.uk/tree/main/client/src/Components/TableOfContents",
		props: [
			{
				name: "bullets",
				desc: "Determines whether bullet points/numbers are shown in the ToC.",
				type: "Boolean",
				possible_values: ["true", "false"],
				optional: true,
				default: "false",
			},
			{
				name: "numbers",
				desc: "Determines whether numbers are used instead of bullet points.",
				type: "Boolean",
				possible_values: ["true", "false"],
				optional: true,
				default: "false",
			},
		],
		how: "",
		examples: [
			{
				name: "Basic",
				desc: "This is a basic implementation of the table of contents component.",
				string: `<Toc>
  <Toc.List>
    <Toc.Item>Item 1</Toc.Item>
    <Toc.Item>Item 2</Toc.Item>
    <Toc.Item>Sublist Header</Toc.Item>
    <Toc.List>
      <Toc.Item>Sublist Item</Toc.Item>
    </Toc.List>
  </Toc.List>
</Toc>`,
				component: (
					<Toc>
						<Toc.List>
							<Toc.Item>Item 1</Toc.Item>
							<Toc.Item>Item 2</Toc.Item>
							<Toc.Item>Sublist Header</Toc.Item>
							<Toc.List>
								<Toc.Item>Sublist Item</Toc.Item>
							</Toc.List>
						</Toc.List>
					</Toc>
				),
			},
			{
				name: "Numbered Markers",
				desc: "This implementation shows how to allow numbers to be used as bullet point markers.",
				string: `<Toc bullets={true} numbers={true}>
  <Toc.List>
    <Toc.Item>Item 1</Toc.Item>
    <Toc.Item>Item 2</Toc.Item>
    <Toc.Item>Sublist Header</Toc.Item>
    <Toc.List>
      <Toc.Item>Sublist Item</Toc.Item>
    </Toc.List>
  </Toc.List>
</Toc>`,
				component: (
					<Toc bullets={true} numbers={true}>
						<Toc.List>
							<Toc.Item>Item 1</Toc.Item>
							<Toc.Item>Item 2</Toc.Item>
							<Toc.Item>Sublist Header</Toc.Item>
							<Toc.List>
								<Toc.Item>Sublist Item</Toc.Item>
							</Toc.List>
						</Toc.List>
					</Toc>
				),
			},
		],
	},
];

export default components;
