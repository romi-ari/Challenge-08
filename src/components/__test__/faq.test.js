/* eslint-disable */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Faq from '../faq/index';
import '@testing-library/jest-dom';

describe("Checks component", () => {
    it("Should have renders without crashing'", () => {
        const component = render(<Faq />);
        waitFor(() => expect(component).toBeInTheDocument());
    }),
    it("Should have display 'Frequently Asked Question'", () => {
        render(<Faq />);
        const titleValue = screen.getByText(/Frequently Asked Question/i)
        expect(titleValue).toBeInTheDocument();
    })
});