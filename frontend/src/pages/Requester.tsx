import type {Request} from "../RequestType";

const apiBaseURL = "http://localhost:8080";

type requestPromise = (request: Request) => Promise<Request>;
type requestList = () => Promise<Request[]>;



export const saveRequest: requestPromise = (request: Request) => {
    return fetch(apiBaseURL + "api/request", {
        method: 'POST',
        headers:
            {
                'Content-Type': 'application/json',
            },
        body: JSON.stringify(request)
    }).then((response) => {
        return response.json();
    })
};

export const fetchAllRequests: requestList = async ()=>{
    return fetch(apiBaseURL + "api/request", {
        method:'GET',
    })
        .then((response) => {
            return response.json();
        })
}


