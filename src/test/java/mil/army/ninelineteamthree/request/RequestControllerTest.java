
package mil.army.ninelineteamthree.request;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import org.springframework.http.MediaType;

import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.List;

import static mil.army.ninelineteamthree.request.RequestBuilder.request;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


class RequestControllerTest {

    private MockMvc mockMvc;
    private RequestService requestService;

    @BeforeEach
    void setUp() {
        requestService = mock(RequestService.class);

        RequestController controller =
                new RequestController(requestService);

        mockMvc = MockMvcBuilders
                .standaloneSetup(controller)
                .build();
    }

    @Test
    void shouldCreateNewRequest() throws Exception {

        Request savedRequest = request()
                .withId(1L)
                .withLocation("Austin")
                .build();

        when(requestService.createRequest(any(Request.class)))
                .thenReturn(savedRequest);

        mockMvc.perform(post("/api/request")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                    "location": "Austin"
                                }
                                """))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.location").value("Austin"));

        verify(requestService).createRequest(any(Request.class));
    }

    @Test
    void shouldGetAllRequests() throws Exception {

        Request firstRequest = request()
                .withId(1L)
                .withLocation("Austin")
                .build();

        Request secondRequest = request()
                .withId(2L)
                .withLocation("Orlando")
                .build();

        when(requestService.getAllRequests())
                .thenReturn(List.of(firstRequest, secondRequest));

        mockMvc.perform(get("/api/request"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].id").value(1))
                .andExpect(jsonPath("$[0].location").value("Austin"))
                .andExpect(jsonPath("$[1].id").value(2))
                .andExpect(jsonPath("$[1].location").value("Orlando"));

        verify(requestService).getAllRequests();
    }
}
