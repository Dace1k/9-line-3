// import tailwindcss from "@tailwindcss/vite";
import type {RequestType} from "../RequestType.ts";

export function Dispatcher () {
    return (
        <>
            <h1>Outstanding MEDEVAC Requests</h1>

            <table className="table-auto" aria-label= "distpatchTable">
                <thead>
                <tr>
                    <th>Location</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        austin
                    </td>
                </tr>
                </tbody>
            </table>


        </>
    )

}
