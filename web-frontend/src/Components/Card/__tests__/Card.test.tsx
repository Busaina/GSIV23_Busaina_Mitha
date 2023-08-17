import { render, screen } from "@testing-library/react";
import Card from "../Card";

describe("Card component", () => {
  const props = {
    title: "Test Title",
    description: "Test Description",
    rating: 4.5,
    id: "test-card",
    img: "test-image.jpg",
  };

  it("renders with props correctly", () => {
    render(<Card {...props} />);

    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.description)).toBeInTheDocument();
    expect(screen.getByText(props.rating.toString())).toBeInTheDocument();
  });
});
