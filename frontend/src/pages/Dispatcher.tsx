// import tailwindcss from "@tailwindcss/vite";
import {sample9Line} from "../RequestType.ts";
import {data} from "react-router-dom";


export function Dispatcher () {

    const tableRow = sample9Line.map((el, index) => {
        return (
            <tr key={index}>
                <td><input type="checkbox"/></td>
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

            <table className="table-auto" aria-label= "distpatchTable">
                <thead>
                <tr>
                    <th><input type="checkbox"/></th>
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


        </>
    )

}
