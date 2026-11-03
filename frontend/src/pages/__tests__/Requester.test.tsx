import {Requester} from "../Requester.tsx";
import {expect} from "vitest";
import {render, screen} from "@testing-library/react"
import {userEvent} from "@testing-library/user-event/dist/cjs/setup/index.js";


describe('Requester', () => {
    let alertMock;
    beforeEach(async () => {
        vi.clearAllMocks();
    });

    const user = userEvent.setup();

    it('renders correctly', () => {
        render(<Requester/>)
        expect(screen.getByRole("heading", {name: /Requester page/i})).toBeVisible()
    })

    it('should render location field', async () => {
        render(<Requester/>)
        screen.logTestingPlaygroundURL()
        const location = screen.getByRole("textbox", {name: /Location/i});
        await userEvent.type(location, "MGRS");
        expect(screen.getByRole("textbox", {name: /location/i})).toBeVisible()
        expect(screen.getByRole("textbox", {name: /location/i})).toHaveValue("MGRS")


    });
    it('should show success alert on submit', async () => {
        render(<Requester/>)
        screen.logTestingPlaygroundURL()
        const location = screen.getByRole("textbox", {name: /Location/i});
        await userEvent.type(location, "MGRS");
        expect(screen.getByRole("textbox", {name: /location/i})).toBeVisible()
        const submit = screen.getByRole("button", {name: /submit/i})
        await user.click(submit)
        const alertSpy=vi.spyOn(window, "alert").mockImplementationOnce(() =>)
    })


})