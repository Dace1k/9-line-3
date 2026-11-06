
import { useState, useEffect, useCallback } from "react";
import DispatchModal from "../components/DispatchModal.tsx";
import ViewModal from "../components/ViewModal.tsx";
import { fetchAllRequests } from "../nineLineApi/NineLineApis.ts";
import type { Request, RequestType } from "../RequestType.ts";

export function Dispatcher() {
    const [requests, setRequests] = useState<Request[]>([]);
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [viewRowIndex, setViewRowIndex] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // GET saved requests from Spring Boot / PostgreSQL
    const loadRequests = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const data = await fetchAllRequests();

            console.log("Backend requests:", data);

            setRequests(data);
            setSelectedRows([]);
            setViewRowIndex(null);
        } catch (err) {
            console.error("Failed to load requests:", err);
            setError("Unable to retrieve requests from the backend.");
        } finally {
            setLoading(false);
        }
    }, []);

    // Load requests when Dispatcher opens
    useEffect(() => {
        void loadRequests();
    }, [loadRequests]);

    // Convert backend objects into table/modal objects
    const tableData: RequestType[] = requests.map((request) => ({
        location: request.location,
        callSign: request.callSign ?? "Not provided",
        numberOfPatients: request.numberOfPatients ?? 0,
        precedence: request.precedence ?? "Not provided",
        specialEquipment: request.specialEquipment ?? "Not provided",
        litterPatients: request.litterPatients ?? 0,
        ambulatoryPatients: request.ambulatoryPatients ?? 0,
        security: request.security ?? "Not provided",
        marking: request.marking ?? "Not provided",
        patientNationality: request.patientNationality ?? "Not provided",
        nbcContamination: request.nbcContamination ?? "Not provided",
        details: "View"
    }));

    const handleCheckboxChange = (index: number, isChecked: boolean) => {
        setSelectedRows((previous) =>
            isChecked
                ? [...previous, index]
                : previous.filter((rowIndex) => rowIndex !== index)
        );
    };

    const handleSelectAll = (isChecked: boolean) => {
        setSelectedRows(
            isChecked ? tableData.map((_, index) => index) : []
        );
    };

    const tableRow = tableData.map((el, index) => (
        <tr
            key={requests[index].id ?? index}
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

                <h1 className="mb-8 text-4xl font-medium text-black">
                    Outstanding MEDEVAC Requests
                </h1>

                <div className="mb-5 flex items-center justify-between">
                    <p className="text-gray-600">
                        Requests loaded from backend: {requests.length}
                    </p>

                    <button
                        type="button"
                        onClick={() => void loadRequests()}
                        disabled={loading}
                        className="rounded border-2 border-[#647A27] px-4 py-2 font-semibold text-[#647A27] hover:bg-[#647A27] hover:text-white disabled:opacity-50"
                    >
                        {loading ? "Loading..." : "Refresh Requests"}
                    </button>
                </div>

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

                {error && (
                    <p role="alert" className="mb-4 text-red-600">
                        {error}
                    </p>
                )}

                {!loading && !error && requests.length === 0 && (
                    <p className="mb-4 text-gray-600">
                        No MEDEVAC requests found.
                    </p>
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
                                        tableData.length > 0 &&
                                        selectedRows.length === tableData.length
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

            {viewRowIndex !== null && tableData[viewRowIndex] && (
                <ViewModal
                    data={tableData[viewRowIndex]}
                    onClose={() => setViewRowIndex(null)}
                />
            )}
        </div>
    );
}
