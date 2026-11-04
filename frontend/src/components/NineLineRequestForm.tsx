import {type ChangeEvent, type FormEvent, useState} from "react";
import {saveRequest} from "../nineLineApi/NineLineApis.ts";

export function NineLineRequestForm() {
    const [formData, setFormData] = useState({location: "", contact: ""});
    const [locationValid, setLocationValid] = useState(true)
    const [contactValid, setContactValid] = useState(true)

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()
        if (!locationValid || !contactValid) {
            alert("please check form for invalid inputs")
            return;
        }
        try {
            const savedRequest = await saveRequest(formData)
            alert(`nine line submitted. ref ID: ${savedRequest.id}`);
        } catch (err) {
            alert(err instanceof Error ? err.message : "Request could not be submitted");
        }
    }


    function isValidLocation(value: string): boolean {
        const mgrsPattern = /^\d{1,2}[C-HJ-NP-X]\s?[A-HJ-NP-Z]{2}\s?\d{4}\s?\d{4}$/;
        return mgrsPattern.test(value.trim());
    }


    function isValidContact(value: string): boolean {
        if (value.trim() === "") {
            return false;
        }
        return true;
    }


    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });

        if (name === "location") {
            setLocationValid(isValidLocation(value));
        }

        if (name === "contact") {
            setContactValid(isValidContact(value));
        }
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
                            {locationValid ? <></> : <p role="locationError">Invalid Location</p>}
                        </div>
                    </div>
                    <div className="space-y-4 rounded-md">
                        <div>
                            <label htmlFor="contact"
                                   className="block text-sm font-medium leading-6 text-gray-900">Radio Frequency /
                                Call-sign / Suffix</label>
                            <input onChange={handleChange}

                                   id="contact" name="contact" type="text" required
                                   className="relative mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                                   placeholder="Radio Frequency / Call-sign / Suffix"/>
                            {contactValid ? <></> : <p role="contactError">Required Field</p>}
                        </div>
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