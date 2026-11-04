
import { useState } from "react";
import type { RequestType } from "../RequestType.ts";

interface ViewModalProps {
    data: RequestType;
    onClose: () => void;
    onAssign?: (responder: string) => void;
}

export default function ViewModal({
                                      data,
                                      onClose,
                                      onAssign,
                                  }: ViewModalProps) {
    const [responder, setResponder] = useState("");

    const requestDetails = [
        ["Location", data.location],
        ["Call Sign", data.callSign],
        ["Number of Patients", data.numberOfPatients],
        ["Precedence", data.precedence],
        ["Special Equipment", data.specialEquipment],
        ["Litter Patient", data.litterPatients],
        ["Ambulatory Patient", data.ambulatoryPatients],
        ["Security at Pick-up site", data.security],
        ["Method of Marking", data.marking],
        ["Patient Nationality and Status", data.patientNationality],
        ["NBC Contamination", data.nbcContamination],
    ];

    const handleAssign = () => {
        if (!responder) return;

        onAssign?.(responder);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="view-modal-title"
                className="flex max-h-[90vh] w-full max-w-[850px] flex-col rounded-md bg-white text-black shadow-2xl"
            >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-200 px-8 py-5">
                    <h2
                        id="view-modal-title"
                        className="text-2xl font-medium"
                    >
                        MEDEVAC Request
                    </h2>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close"
                        className="text-3xl text-gray-500 hover:text-black"
                    >
                        &times;
                    </button>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto px-8 py-8">
                    <div className="mx-auto max-w-[650px]">
                        <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] sm:gap-x-6">
                            {requestDetails.map(([label, value]) => (
                                <div
                                    key={label}
                                    className="grid grid-cols-1 gap-1 sm:col-span-2 sm:grid-cols-subgrid"
                                >
                                    <span className="font-semibold sm:text-right">
                                        {label}
                                    </span>

                                    <span>{value}</span>
                                </div>
                            ))}
                        </div>

                        {/* Responder selection */}
                        <div className="mt-10 sm:ml-[50%] sm:pl-3">
                            <label
                                htmlFor="view-responder"
                                className="mb-2 block font-medium text-gray-500"
                            >
                                Responder
                            </label>

                            <select
                                id="view-responder"
                                value={responder}
                                onChange={(e) =>
                                    setResponder(e.target.value)
                                }
                                className="w-full rounded border border-gray-300 bg-white p-3 text-black shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            >
                                <option value="">
                                    Select an option
                                </option>
                                <option value="Team 1">Team 1</option>
                                <option value="Team 2">Team 2</option>
                                <option value="Team 3">Team 3</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-end gap-6 border-t border-gray-200 px-8 py-5">
                    <button
                        type="button"
                        onClick={handleAssign}
                        disabled={!responder}
                        className="rounded bg-yellow-400 px-14 py-3 font-semibold text-black shadow-md hover:bg-yellow-500 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        ASSIGN
                    </button>

                    <button
                        type="button"
                        onClick={onClose}
                        className="font-medium text-gray-500 hover:text-black"
                    >
                        CANCEL
                    </button>
                </div>
            </div>
        </div>
    );
}
