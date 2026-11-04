package mil.army.ninelineteamthree.request;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class RequestService {
    private final RequestRepository requestRepository;

    public RequestService(RequestRepository requestRepository) {
        this.requestRepository = requestRepository;
    }

    public Request createRequest(Request request){
        return requestRepository.save(request);

    }
    public List<Request> getAllRequests() {
        return requestRepository.findAll();
    }

}
