// import {useEffect, useState} from "react";
import type {RequestType} from "../RequestType.ts";


interface DispatchModalProps {
    data?: RequestType
    onClose?: () => void
}

export default function DispatchModal({}: DispatchModalProps) {
    return (
        <div>
            <h4>MEDEVAC Request</h4>
            <label>MEDEVAC Team
            <select className="w-full p-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white">blank
                <option>Select an option</option>
                <option>Team 1</option>
                <option>Team 2</option>
                <option>Team 3</option>
            </select>
            <br/>
            <button type="submit">Assign</button>
        </label>
        </div>
    )
}