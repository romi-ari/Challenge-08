/* eslint-disable */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Testimonial from '../testimonial/index';
import '@testing-library/jest-dom';

describe("Checks component", () => {
    it("Should have renders without crashing'", () => {
        const component = render(<Testimonial />);
        waitFor(() => expect(component).toBeInTheDocument());
    }),
    it("Should have display 'Testimonial'", () => {
        render(<Testimonial />);
        const titleValue = screen.getByText(/Testimonial/i)
        expect(titleValue).toBeInTheDocument();
    })
});