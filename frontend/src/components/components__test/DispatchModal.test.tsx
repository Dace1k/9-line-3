
import {render, screen} from "@testing-library/react";
import {expect} from 'vitest';
import userEvent from '@testing-library/user-event'

import DispatchModal from "../DispatchModal.tsx";

describe("DispatchModal", () => {
    it("Should render DispatchModal Header", () => {
        render(<DispatchModal/>)
        expect(
            screen.getByRole("heading", { name: "MEDEVAC Request"})
        ).toBeVisible()
    })

    test('changes drop-down value', async () => {
        render(<DispatchModal />)
        const selectEl = screen.getByRole('combobox')

        // Choose an option
        await userEvent.selectOptions(selectEl, 'Team 1')
    })
})