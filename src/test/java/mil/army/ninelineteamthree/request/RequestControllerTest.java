package mil.army.ninelineteamthree.request;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;
import tools.jackson.databind.ObjectMapper;
import tools.jackson.databind.json.JsonMapper;

import java.util.ArrayList;
import java.util.List;

import static mil.army.ninelineteamthree.request.RequestBuilder.request;
import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.hamcrest.Matchers.matchesPattern;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.web.servlet.function.RequestPredicates.contentType;

@WebMvcTest(RequestController.class)
class RequestControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private JsonMapper jsonMapper;

    @MockitoBean
    RequestService requestService;

    @Captor
    ArgumentCaptor<Request> captor = ArgumentCaptor.forClass(Request.class);

    Request newRequest;


//    @Test
//    void shouldCreateNewRequestUsingPostTest() throws Exception {
//        Request body = new Request(1L, "your house");
//        when(requestService.createRequest(any(Request.class))).thenReturn(body);
//
//        mockMvc.perform(post("/api/request").contentType(MediaType.APPLICATION_JSON).content(jsonMapper.writeValueAsString(body)))
//
//                .andExpect(status().isCreated())
//                .andExpect(jsonPath("$[0].location").value("your house"))
//                .andExpect(jsonPath("$.id").value(1));
//        verify(requestService).createRequest(captor.capture());

    /// /        assertEquals(1L, captor.getValue().getId());
    /// /        assertEquals("your house", captor.getValue().getLocation());
//
//
//        ArgumentCaptor<Request> captor =
//                ArgumentCaptor.forClass(Request.class);
//        verify(requestService, only()).createRequest(captor.capture());
//
//    }
    @Test
    void shouldCreateNewRequestUsingPostTest() throws Exception {
        // What the controller should pass to the service
        Request expectedInput = new Request(null, "your house");

        // What the mocked service returns after saving
        Request savedRequest = new Request(1L, "your house");

        when(requestService.createRequest(any(Request.class)))
                .thenReturn(savedRequest);

        mockMvc.perform(post("/api/request")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                    "location": "your house"
                                }
                                """))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.location").value("your house"))
                .andExpect(jsonPath("$.id").value(1));

        ArgumentCaptor<Request> captor =
                ArgumentCaptor.forClass(Request.class);

        verify(requestService, only())
                .createRequest(captor.capture());

        assertThat(captor.getValue())
                .usingRecursiveComparison()
                .isEqualTo(expectedInput);
    }

}