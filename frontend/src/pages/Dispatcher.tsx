import { sample9Line } from "../RequestType.ts";
import { useState } from "react";
import DispatchModal from "../components/DispatchModal.tsx";

export function Dispatcher() {
    // Track the index of the row currently selected for dispatch (null means closed)
    const [activeRowIndex, setActiveRowIndex] = useState<number | null>(null);

    const handleCheckboxChange = (index: number, isChecked: boolean) => {
        // If checked, open modal for this row. If unchecked, close it.
        setActiveRowIndex(isChecked ? index : null);
    };

    const tableRow = sample9Line.map((el, index) => {
        return (
            <tr key={index}>
                <td>
                    <input
                        type="checkbox"
                        checked={activeRowIndex === index}
                        onChange={(e) => handleCheckboxChange(index, e.target.checked)}
                    />
                </td>
                <td>{el.location}</td>
                <td>{el.callSign}</td>
                <td>{el.precedence}</td>
                <td>{el.specialEquipment}</td>
                <td>{el.security}</td>
                <td>{el.marking}</td>
                <td>
                    <button type="button">{el.details}</button>
                </td>
            </tr>
        );
    });

    return (
        <>
            <h1>Outstanding MEDEVAC Requests</h1>

            <table className="table-auto" aria-label="dispatchTable">
                <thead>
                <tr>
                    <th><input type="checkbox" disabled /></th>
                    <th>Location</th>
                    <th>CallSign</th>
                    <th>Precedence</th>
                    <th>SpecialEquipment</th>
                    <th>Security</th>
                    <th>Marking</th>
                    <th>Details</th>
                </tr>
                </thead>
                <tbody>
                {tableRow}
                </tbody>
            </table>

            {activeRowIndex !== null && (
                <DispatchModal
                    data={sample9Line[activeRowIndex]}
                    onClose={() => setActiveRowIndex(null)}
                />
            )}
        </>
    );
}
