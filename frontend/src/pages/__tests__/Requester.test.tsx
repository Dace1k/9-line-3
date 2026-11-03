import {Requester} from "../Requester.tsx";
import {expect, test, vi} from "vitest";
import {render, screen} from "@testing-library/react"
import {userEvent} from "@testing-library/user-event/dist/cjs/setup/index.js";
import {saveRequest} from "../../nineLineApi/NineLineApis.ts";

vi.mock("../../nineLineApi/NineLineApis", () => ({
    saveRequest: vi.fn()
}));


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
        vi.mocked(saveRequest).mockResolvedValue({status:200});
        const alertSpy = vi.spyOn(window, "alert").mockImplementationOnce(() => {
        })
        render(<Requester/>)
        screen.logTestingPlaygroundURL()
        const location = screen.getByRole("textbox", {name: /Location/i});
        await userEvent.type(location, "MGRS3");
        expect(screen.getByRole("textbox", {name: /location/i})).toBeVisible()
        const submit = screen.getByRole("button", {name: /submit/i})
        await user.click(submit)
        expect(alertSpy).toHaveBeenCalledWith("Nine Line Location Submitted = MGRS3")
        alertSpy.mockRestore();
        expect(saveRequest).toHaveBeenCalledTimes(1)

    })

    it('should show invalid MGRS error', async () => {
        render(<Requester/>)
        screen.logTestingPlaygroundURL()
        const location = screen.getByRole("textbox", {name: /Location/i});
        await userEvent.type(location, "MGRS");
        expect(screen.getByRole("textbox", {name: /location/i})).toBeVisible()
        expect(screen.getByRole("textbox", {name: /location/i})).toHaveValue("MGRS")
        expect(screen.getByRole("locationError")).toBeVisible()
    });
    it('should not show invalid MGRS error', async () => {
        render(<Requester/>)
        screen.logTestingPlaygroundURL()
        const location = screen.getByRole("textbox", {name: /Location/i});
        await userEvent.type(location, "4Q FJ 1234 6789");
        expect(screen.getByRole("textbox", {name: /location/i})).toBeVisible()
        expect(screen.getByRole("textbox", {name: /location/i})).toHaveValue("4Q FJ 1234 6789")
        expect(screen.queryByRole("locationError")).not.toBeInTheDocument();
    });


})