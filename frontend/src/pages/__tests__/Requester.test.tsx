import Requester from "../Requester.tsx";
import {describe, expect, it} from "vitest";
import { render, screen } from "@testing-library/react"

describe('Requester', () =>{

    it('renders correctly',()=>{
        render(<Requester />)
        expect(screen.getByRole("heading",{name: "Requester page"})).toBeVisible()
    })

    it('should render location field', () => {
            render(<Requester />)
        screen.logTestingPlaygroundURL()
        expect(screen.getByRole("textbox",{name: ""})).toBeVisible()

    });

})