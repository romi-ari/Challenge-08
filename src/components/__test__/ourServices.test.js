/* eslint-disable */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import OurServices from '../ourServices/index';
import '@testing-library/jest-dom';

describe("Checks component", () => {
    it("Should have renders without crashing'", () => {
        const component = render(<OurServices />);
        waitFor(() => expect(component).toBeInTheDocument());
    }),
    it("Should have display 'Best Car Rental for any kind of trip in Bekasi'", () => {
        render(<OurServices />);
        const titleValue = screen.getByText(/Best Car Rental for any kind of trip in Bekasi/i)
        expect(titleValue).toBeInTheDocument();
    })
});