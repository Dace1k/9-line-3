package mil.army.ninelineteamthree.request;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static mil.army.ninelineteamthree.request.RequestBuilder.request;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class RequestServiceTest {
    @Mock
    private RequestRepository requestRepository;

    @InjectMocks
    private RequestService requestService;

    @Test
    void ShouldSaveNewRequestToRepository(){
        var request= request().withId(10L).build();
        when(requestRepository.save(request)).thenReturn(request);
        Request result=requestService.createRequest(request);

        assertThat(result.getId()).isEqualTo(10L);

        verify(requestRepository, atLeastOnce()).save(request);

    }

}