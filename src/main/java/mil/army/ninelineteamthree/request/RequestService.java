package mil.army.ninelineteamthree.request;

import org.springframework.stereotype.Service;

@Service
public class RequestService {
    private final RequestRepository requestRepository;

    public RequestService(RequestRepository requestRepository) {
        this.requestRepository = requestRepository;
    }

    public Request createRequest(Request request){
        return requestRepository.save(request);

    }
}
