import {type FormEvent, useState} from "react";
import {saveRequest} from "../nineLineApi/NineLineApis.ts";

export function NineLineRequestForm() {
    const [formData, setFormData] = useState({location: ""});
    const [locationValid, setLocationValid] = useState(true)


    function handleSubmit(event: FormEvent) {
        event.preventDefault()

        try {
            if (locationValid) {
                saveRequest(formData)
                alert(`Nine Line Location Submitted = ${formData.location}`);
            } else {
                throw new Error("Bad location");
            }
        } catch (err) {
            alert(err)
        }


    }

    function isValidLocation(value: string): boolean {
        const mgrsPattern = /^\d{1,2}[C-HJ-NP-X]\s?[A-HJ-NP-Z]{2}\s?\d{4}\s?\d{4}$/;
        return mgrsPattern.test(value.trim());
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;
        setFormData((prevState) => ({...prevState, [name]: value}));
        setLocationValid(isValidLocation(value));
    }


    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-lg">

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4 rounded-md">
                        <div>
                            <label htmlFor="location"
                                   className="block text-sm font-medium leading-6 text-gray-900">Location</label>
                            <input onChange={handleChange}

                                   id="location" name="location" type="text" required
                                   className="relative mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                                   placeholder="MGRS"/>
                            {locationValid ? <></> : <p role="locationError">errors does not = MGRS</p>}
                        </div>
                        {/*<div>*/}
                        {/*    <label htmlFor="password"*/}
                        {/*           className="block text-sm font-medium leading-6 text-gray-900">Password</label>*/}
                        {/*    <input id="password" name="password" type="password" autoComplete="current-password"*/}
                        {/*           required*/}
                        {/*           className="relative mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"*/}
                        {/*           placeholder="••••••••"/>*/}
                        {/*</div>*/}
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox"
                                   className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember
                                me</label>
                        </div>


                    </div>

                    <div>
                        <button type="submit"
                                className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-200">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}