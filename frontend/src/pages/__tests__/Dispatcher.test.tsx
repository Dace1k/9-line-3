// @vitest-environment jsdom
import { Dispatcher } from "../Dispatcher.tsx";
import { render, screen, fireEvent,waitFor} from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { sample9Line } from "../../RequestType.ts";

// Mock API calls so tests don't require the backend
vi.mock("../../nineLineApi/NineLineApis.ts", () => ({
    fetchAllRequests: vi.fn().mockResolvedValue([]),
}));

describe("dispatcherPage", () => {

    it("should display heading for dispatcher page", () => {
        render(<Dispatcher />);

        expect(
            screen.getByRole("heading", {
                name: "Outstanding MEDEVAC Requests",
            })
        ).toBeVisible();
    });


    it("should show location and data in table", () => {
        render(<Dispatcher />);

        expect(
            screen.getByRole("table", { name: /dispatchTable/i })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("columnheader", { name: /location/i })
        ).toBeVisible();

        expect(
            screen.getByRole("cell", {
                name: sample9Line[0].location,
            })
        ).toBeVisible();
    });

    it("should show call sign and data in table", () => {
        render(<Dispatcher />);

        expect(
            screen.getByRole("columnheader", { name: /call sign/i })
        ).toBeVisible();

        expect(
            screen.getByRole("cell", {
                name: sample9Line[0].callSign,
            })
        ).toBeVisible();
    });

    it("should show precedence and data in table", () => {
        render(<Dispatcher />);

        expect(
            screen.getByRole("columnheader", { name: /precedence/i })
        ).toBeVisible();

        expect(
            screen.getByRole("cell", {
                name: sample9Line[0].precedence,
            })
        ).toBeVisible();
    });

    it("should show special equipment and data in table", () => {
        render(<Dispatcher />);

        expect(
            screen.getByRole("columnheader", {
                name: /special equipment/i,
            })
        ).toBeVisible();

        expect(
            screen.getByRole("cell", {
                name: sample9Line[0].specialEquipment,
            })
        ).toBeVisible();
    });

    it("should show security and data in table", () => {
        render(<Dispatcher />);

        expect(
            screen.getByRole("columnheader", { name: /security/i })
        ).toBeVisible();

        expect(
            screen.getByRole("cell", {
                name: sample9Line[0].security,
            })
        ).toBeVisible();
    });

    it("should show marking and data in table", () => {
        render(<Dispatcher />);

        expect(
            screen.getByRole("columnheader", { name: /marking/i })
        ).toBeVisible();

        expect(
            screen.getByRole("cell", {
                name: sample9Line[0].marking,
            })
        ).toBeVisible();
    });

    it("should show details VIEW buttons in table", () => {
        render(<Dispatcher />);

        expect(
            screen.getByRole("columnheader", { name: /details/i })
        ).toBeVisible();

        expect(
            screen.getAllByRole("button", { name: /view/i })
        ).toHaveLength(sample9Line.length);
    });

    it("should show checkboxes", () => {
        render(<Dispatcher />);

        const checkboxes = screen.getAllByRole("checkbox");

        expect(checkboxes).toHaveLength(sample9Line.length + 1);

        checkboxes.forEach((checkbox) => {
            expect(checkbox).toBeVisible();
        });
    });

    it("should allow selecting a single request", () => {
        render(<Dispatcher />);

        const checkboxes = screen.getAllByRole("checkbox");

        fireEvent.click(checkboxes[1]);

        expect(checkboxes[1]).toBeChecked();

        expect(
            screen.getByText("1 selected")
        ).toBeVisible();
    });

    it("should allow selecting multiple requests", () => {
        render(<Dispatcher />);

        const checkboxes = screen.getAllByRole("checkbox");

        fireEvent.click(checkboxes[1]);
        fireEvent.click(checkboxes[2]);

        expect(checkboxes[1]).toBeChecked();
        expect(checkboxes[2]).toBeChecked();

        expect(
            screen.getByText("2 selected")
        ).toBeVisible();
    });

    it("should deselect a request when unchecked", () => {
        render(<Dispatcher />);

        const checkboxes = screen.getAllByRole("checkbox");

        fireEvent.click(checkboxes[1]);
        fireEvent.click(checkboxes[1]);

        expect(checkboxes[1]).not.toBeChecked();

        expect(
            screen.queryByText("1 selected")
        ).not.toBeInTheDocument();
    });

    it("should select all requests using header checkbox", () => {
        render(<Dispatcher />);

        const selectAll = screen.getByRole("checkbox", {
            name: /select all requests/i,
        });

        fireEvent.click(selectAll);

        const checkboxes = screen.getAllByRole("checkbox");

        checkboxes.forEach((checkbox) => {
            expect(checkbox).toBeChecked();
        });

        expect(
            screen.getByText(`${sample9Line.length} selected`)
        ).toBeVisible();
    });

    it("should deselect all requests using header checkbox", () => {
        render(<Dispatcher />);

        const selectAll = screen.getByRole("checkbox", {
            name: /select all requests/i,
        });

        fireEvent.click(selectAll);
        fireEvent.click(selectAll);

        const checkboxes = screen.getAllByRole("checkbox");

        checkboxes.forEach((checkbox) => {
            expect(checkbox).not.toBeChecked();
        });

        expect(
            screen.queryByText(`${sample9Line.length} selected`)
        ).not.toBeInTheDocument();
    });

    it("should display ASSIGN button when a request is selected", () => {
        render(<Dispatcher />);

        expect(
            screen.queryByRole("button", { name: /^assign$/i })
        ).not.toBeInTheDocument();

        fireEvent.click(screen.getAllByRole("checkbox")[1]);

        expect(
            screen.getByRole("button", { name: /^assign$/i })
        ).toBeVisible();
    });

    it("should open assignment modal when ASSIGN is clicked", () => {
        render(<Dispatcher />);

        fireEvent.click(screen.getAllByRole("checkbox")[1]);

        fireEvent.click(
            screen.getByRole("button", { name: /^assign$/i })
        );

        expect(
            screen.getByRole("heading", {
                name: /^MEDEVAC Request$/i
            })
        ).toBeVisible();

        expect(
            screen.getByLabelText(/responder/i)
        ).toBeVisible();
    });

    it("should close assignment modal when CANCEL is clicked", () => {
        render(<Dispatcher />);

        fireEvent.click(screen.getAllByRole("checkbox")[1]);

        fireEvent.click(
            screen.getByRole("button", { name: /^assign$/i })
        );

        fireEvent.click(
            screen.getByRole("button", { name: /cancel/i })
        );

        expect(
            screen.queryByRole("heading", {
                name: /^MEDEVAC Request$/i
            })
        ).not.toBeInTheDocument();

        expect(
            screen.getByText("1 selected")
        ).toBeVisible();
    });

    it("should open VIEW modal for the selected request", () => {
        render(<Dispatcher />);

        const viewButtons = screen.getAllByRole("button", {
            name: /view/i,
        });

        fireEvent.click(viewButtons[0]);

        const modal = screen.getByRole("dialog", {
            name: /MEDEVAC Request/i,
        });

        expect(modal).toBeVisible();
        expect(modal).toHaveTextContent(sample9Line[0].location);
        expect(modal).toHaveTextContent(sample9Line[0].callSign);
    });

    it("should open VIEW modal with the correct row data", () => {
        render(<Dispatcher />);

        const viewButtons = screen.getAllByRole("button", {
            name: /view/i,
        });

        fireEvent.click(viewButtons[1]);

        const modal = screen.getByRole("dialog", {
            name: /MEDEVAC Request/i,
        });

        expect(modal).toHaveTextContent(sample9Line[1].location);
        expect(modal).toHaveTextContent(sample9Line[1].callSign);
    });

    it("should close VIEW modal when CANCEL is clicked", () => {
        render(<Dispatcher />);

        fireEvent.click(
            screen.getAllByRole("button", { name: /view/i })[0]
        );

        expect(
            screen.getByRole("dialog")
        ).toBeInTheDocument();

        fireEvent.click(
            screen.getByRole("button", { name: /cancel/i })
        );

        expect(
            screen.queryByRole("dialog")
        ).not.toBeInTheDocument();
    });

    it("should close VIEW modal using the close button", () => {
        render(<Dispatcher />);

        fireEvent.click(
            screen.getAllByRole("button", { name: /view/i })[0]
        );

        fireEvent.click(
            screen.getByRole("button", { name: /close/i })
        );

        expect(
            screen.queryByRole("dialog")
        ).not.toBeInTheDocument();
    });

    it("should preserve selected rows after closing VIEW modal", () => {
        render(<Dispatcher />);

        const checkboxes = screen.getAllByRole("checkbox");

        fireEvent.click(checkboxes[1]);

        fireEvent.click(
            screen.getAllByRole("button", { name: /view/i })[0]
        );

        fireEvent.click(
            screen.getByRole("button", { name: /cancel/i })
        );

        expect(checkboxes[1]).toBeChecked();

        expect(
            screen.getByText("1 selected")
        ).toBeVisible();
    });
    it("should preserve selected rows after closing VIEW modal", () => {
        // Keep your existing test code here
    });

    // NEW TEST GOES HERE
    it("should load requests from the backend", async () => {
        render(<Dispatcher />);

        await waitFor(() => {
            expect(
                screen.getByText("Requests loaded from backend: 0")
            ).toBeInTheDocument();
        });
    });


});
