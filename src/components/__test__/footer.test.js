/* eslint-disable */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Footer from '../faq/index';
import '@testing-library/jest-dom';

describe("Checks component", () => {
    it("Should have renders without crashing'", () => {
        const component = render(<Footer />);
        waitFor(() => expect(component).toBeInTheDocument());
    })
});