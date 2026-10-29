// import tailwindcss from "@tailwindcss/vite";
import {sample9Line} from "../RequestType.ts";


export function Dispatcher () {
    return (
        <>
            <h1>Outstanding MEDEVAC Requests</h1>

            <table className="table-auto" aria-label= "distpatchTable">
                <thead>
                <tr>
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
                <tr>
                    <td>{sample9Line[0].location}</td>
                    <td>{sample9Line[0].callSign}</td>
                    <td>{sample9Line[0].precedence}</td>
                    <td>{sample9Line[0].specialEquipment}</td>
                    <td>{sample9Line[0].security}</td>
                    <td>{sample9Line[0].marking}</td>
                    <td>{sample9Line[0].details}</td>

                </tr>
                </tbody>
            </table>


        </>
    )

}
