import {Dispatcher} from "../Dispatcher.tsx";
import {render, screen} from "@testing-library/react";
import { expect } from 'vitest';

describe('dispatcherPage', () => {
    it('should display heading for dispatcher page', () => {
       render(<Dispatcher/>);
       expect(
           screen.getByRole('heading',{name: 'Outstanding MEDEVAC Requests'})
       ).toBeVisible()

    });
});