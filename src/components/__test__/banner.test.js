/* eslint-disable */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Banner from '../banner/index';
import '@testing-library/jest-dom';

describe("Checks component", () => {
    it("Should have renders without crashing'", () => {
        const component = render(<Banner />);
        waitFor(() => expect(component).toBeInTheDocument());
    }),
    it("Should have display 'Sewa Mobil di Bekasi Sekarang'", () => {
        render(<Banner />);
        const titleValue = screen.getByText(/Sewa Mobil di Bekasi Sekarang/i)
        expect(titleValue).toBeInTheDocument();
    })
});