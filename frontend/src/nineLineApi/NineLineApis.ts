import type {Request} from "../RequestType";

const apiBaseURL = "http://localhost:8080";

type requestPromise = (request: Request) => Promise<Request>;
type requestList = () => Promise<Request[]>;

// POST - Create a new MEDEVAC request
export const saveRequest: requestPromise = async (request: Request) => {
    const response = await fetch(apiBaseURL + "/api/request", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
    });

    if (!response.ok) {
        throw new Error("Failed to save MEDEVAC request");
    }

    return response.json();
};

// GET - Retrieve all MEDEVAC requests
export const fetchAllRequests = async (): Promise<Request[]> => {
    const response = await fetch("http://localhost:8080/api/request");

    if (!response.ok) {
        throw new Error("Failed to fetch MEDEVAC requests");
    }

    return response.json();
};
