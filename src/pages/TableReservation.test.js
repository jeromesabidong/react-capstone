import { screen } from "@testing-library/react";
import TableReservation from "./TableReservation";

test('Renders the form heading', () => {
    render(<TableReservation />);
    const headingElement = screen.getByText('Make your Reservation');
    expect(headingElement).toBeInTheDocument();
})
