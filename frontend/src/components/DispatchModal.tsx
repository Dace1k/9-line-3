
import {useState} from "react";
import type {RequestType} from "../RequestType.ts";


interface DispatchModalProps {
    data?: RequestType;
    onClose?: () => void;
}

export default function DispatchModal({
                                          data,
                                          onClose,
                                      }: DispatchModalProps) {
    const [responder, setResponder] = useState("");

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="flex h-[425px] w-[450px] max-w-[95vw] flex-col rounded-md bg-white text-black shadow-2xl">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                    <h4 className="text-2xl font-medium">
                        MEDEVAC Request
                    </h4>

                    <button
                        type="button"
                        onClick={onClose}
                        className="text-2xl text-gray-500 hover:text-black"
                    >
                        &times;
                    </button>
                </div>

                {/* Body */}
                <div className="flex-1 px-12 pt-12">
                    <label
                        htmlFor="responder"
                        className="mb-1 block text-sm font-medium text-gray-600"
                    >
                        Responder
                    </label>

                    <select
                        id="responder"
                        value={responder}
                        onChange={(e) => setResponder(e.target.value)}
                        className="w-full rounded-md border border-gray-300 bg-white p-3 text-gray-800 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    >
                        <option value="">Select an option</option>
                        <option value="Team 1">Team 1</option>
                        <option value="Team 2">Team 2</option>
                        <option value="Team 3">Team 3</option>
                    </select>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-end gap-6 border-t border-gray-200 px-6 py-4">
                    <button
                        type="button"
                        onClick={() => {
                            console.log("Assigning:", responder, data);
                            onClose?.();
                        }}
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
