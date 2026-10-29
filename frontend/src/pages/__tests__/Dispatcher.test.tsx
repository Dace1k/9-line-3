import {Dispatcher} from "../Dispatcher.tsx";
import {render, screen} from "@testing-library/react";
import { expect } from 'vitest';
import type {RequestType} from "../RequestType.ts";


describe('dispatcherPage', () => {
    it('should display heading for dispatcher page', () => {
       render(<Dispatcher/>);
       expect(
           screen.getByRole('heading',{name: 'Outstanding MEDEVAC Requests'})
       ).toBeVisible()

    });
    it( 'should show location and data in table',()=>{


        render(<Dispatcher/>);
       expect(screen.getByRole('table',{name:/distpatchTable/i})).toBeInTheDocument()
        expect(screen.getByRole('columnheader',{name:/Location/i})).toBeVisible()
        expect(screen.getByRole('cell',{name:/austin/i})).toBeVisible()


    });

});