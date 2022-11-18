/* eslint-disable */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import WhyUs from '../whyUs/index';
import '@testing-library/jest-dom';

describe("Checks component", () => {
    it("Should have renders without crashing'", () => {
        const component = render(<WhyUs />);
        waitFor(() => expect(component).toBeInTheDocument());
    }),
    it("Should have display 'Why Us?'", () => {
        render(<WhyUs />);
        const titleValue = screen.getByText(/Why Us?/i)
        expect(titleValue).toBeInTheDocument();
    })
});