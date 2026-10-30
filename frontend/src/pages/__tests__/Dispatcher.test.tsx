import {Dispatcher} from "../Dispatcher.tsx";
import {render, screen} from "@testing-library/react";
import {expect} from 'vitest';
import type {RequestType} from "../RequestType.ts";
import {sample9Line} from "../../RequestType.ts";


describe('dispatcherPage', () => {
    it('should display heading for dispatcher page', () => {
        render(<Dispatcher/>);
        expect(
            screen.getByRole('heading', {name: 'Outstanding MEDEVAC Requests'})
        ).toBeVisible()

    });
    it('should show location and data in table', () => {

        render(<Dispatcher/>);
        expect(screen.getByRole('table', {name: /distpatchTable/i})).toBeInTheDocument()
        expect(screen.getByRole('columnheader', {name: /Location/i})).toBeVisible()
        expect(screen.getByRole('cell', {name: sample9Line[0].location})).toBeVisible()

    });

    it('should show call sign and data in table', () => {

        render(<Dispatcher/>);
        expect(screen.getByRole('columnheader', {name: /CallSign/i})).toBeVisible()
        expect(screen.getByRole('cell', {name: sample9Line[0].callSign})).toBeVisible()

    });

    it('should show precedence and data in table', () => {

        render(<Dispatcher/>);
        expect(screen.getByRole('columnheader', {name: /precedence/i})).toBeVisible()
        expect(screen.getByRole('cell', {name: sample9Line[0].precedence})).toBeVisible()

    });

    it('should show special equipment and data in table', () => {

        render(<Dispatcher/>);
        expect(screen.getByRole('columnheader', {name: /specialEquipment/i})).toBeVisible()
        expect(screen.getByRole('cell', {name: sample9Line[0].specialEquipment})).toBeVisible()

    });

    it('should show security and data in table', () => {

        render(<Dispatcher/>);
        expect(screen.getByRole('columnheader', {name: /security/i})).toBeVisible()
        expect(screen.getByRole('cell', {name: sample9Line[0].security})).toBeVisible()

    });

    it('should show markings and data in table', () => {

        render(<Dispatcher/>);
        expect(screen.getByRole('columnheader', {name: /marking/i})).toBeVisible()
        expect(screen.getByRole('cell', {name: sample9Line[0].marking})).toBeVisible()

    });
    it('should show details and data in table', () => {

        render(<Dispatcher/>);
        expect(screen.getByRole('columnheader', {name: /details/i})).toBeVisible()
        expect(screen.getByRole('cell', {name: sample9Line[0].details})).toBeVisible()

    });
    it('should show checkboxes', () => {
        render(<Dispatcher/>);

        const checkboxes = screen.getAllByRole('checkbox');

        expect(checkboxes).toHaveLength(sample9Line.length + 1);

        checkboxes.forEach((checkbox) => {
            expect(checkbox).toBeVisible();
        });
    })
});