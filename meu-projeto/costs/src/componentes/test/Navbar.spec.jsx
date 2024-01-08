import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import {Link } from "react-router-dom";

import Navbar from "../layout/Navbar"

const mockNavigate = jest.fn();
jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useNavigate: () => mockNavigate
}))

describe("Navbar", () => {
    it("should render correctly", () => {
        render(
            <Link>
                <Navbar />
            </Link>
            
    )
})

    it("should call navigate when hist the button", () =>{
        render(
            <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <AsideNav />
            </QueryClientProvider>
            </BrowserRouter>
        ) 
            const btn = screen.getByText("Movies Lib")

            fireEvent.click(btn)

            expect()
    })
})
    
        
