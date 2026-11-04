import { sample9Line } from "../RequestType.ts";
import { useState } from "react";
import DispatchModal from "../components/DispatchModal.tsx";
import ViewModal from "../components/ViewModal.tsx";

export function Dispatcher() {
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [viewRowIndex, setViewRowIndex] = useState<number | null>(null);

    const handleCheckboxChange = (index: number, isChecked: boolean) => {
        setSelectedRows((previous) =>
            isChecked
                ? [...previous, index]
                : previous.filter((rowIndex) => rowIndex !== index)
        );
    };

    const handleSelectAll = (isChecked: boolean) => {
        setSelectedRows(
            isChecked ? sample9Line.map((_, index) => index) : []
        );
    };

    const tableRow = sample9Line.map((el, index) => (
        <tr
            key={index}
            className="border-b border-gray-200 hover:bg-gray-50"
        >
            <td className="px-3 py-4">
                <input
                    type="checkbox"
                    checked={selectedRows.includes(index)}
                    onChange={(e) =>
                        handleCheckboxChange(index, e.target.checked)
                    }
                    className="h-4 w-4 accent-[#647A27]"
                />
            </td>
            <td className="px-3 py-4">{el.location}</td>
            <td className="px-3 py-4">{el.callSign}</td>
            <td className="px-3 py-4">{el.precedence}</td>
            <td className="px-3 py-4">{el.specialEquipment}</td>
            <td className="px-3 py-4">{el.security}</td>
            <td className="px-3 py-4">{el.marking}</td>
            <td className="px-3 py-4">
                <button
                    type="button"
                    onClick={() => setViewRowIndex(index)}
                    className="font-semibold text-[#647A27] hover:underline"
                >
                    {el.details}
                </button>
            </td>
        </tr>
    ));

    return (
        <div className="min-h-screen bg-white text-black">
            <div className="mx-auto max-w-6xl px-6 py-10">

                <h1 className="mb-12 text-4xl font-medium text-black">
                    Outstanding MEDEVAC Requests
                </h1>

                {selectedRows.length > 0 && (
                    <div className="mb-4 flex items-center justify-between bg-[#F2F3F1] px-4 py-3">
                        <span className="font-medium text-gray-800">
                            {selectedRows.length} selected
                        </span>

                        <button
                            type="button"
                            onClick={() => setIsModalOpen(true)}
                            className="rounded border-2 border-[#647A27] px-6 py-2 font-semibold text-[#647A27] hover:bg-[#647A27] hover:text-white"
                        >
                            ASSIGN
                        </button>
                    </div>
                )}

                <div className="w-full overflow-x-auto">
                    <table
                        className="w-full table-auto text-left text-base text-black"
                        aria-label="dispatchTable"
                    >
                        <thead>
                        <tr className="border-b border-gray-200">
                            <th className="px-3 py-4">
                                <input
                                    type="checkbox"
                                    aria-label="Select all requests"
                                    checked={
                                        sample9Line.length > 0 &&
                                        selectedRows.length === sample9Line.length
                                    }
                                    onChange={(e) =>
                                        handleSelectAll(e.target.checked)
                                    }
                                    className="h-4 w-4 accent-[#647A27]"
                                />
                            </th>
                            <th className="px-3 py-4">Location</th>
                            <th className="px-3 py-4">Call Sign</th>
                            <th className="px-3 py-4">Precedence</th>
                            <th className="px-3 py-4">Special Equipment</th>
                            <th className="px-3 py-4">Security</th>
                            <th className="px-3 py-4">Marking</th>
                            <th className="px-3 py-4">Details</th>
                        </tr>
                        </thead>

                        <tbody>{tableRow}</tbody>
                    </table>
                </div>

                {isModalOpen && (
                    <DispatchModal
                        onClose={() => setIsModalOpen(false)}
                    />
                )}

            </div>
            {viewRowIndex !== null && (
                <ViewModal
                    data={sample9Line[viewRowIndex]}
                    onClose={() => setViewRowIndex(null)}
                />
            )}
        </div>
    );
}
