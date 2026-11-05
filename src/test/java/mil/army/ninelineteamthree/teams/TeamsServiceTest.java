package mil.army.ninelineteamthree.teams;

import mil.army.ninelineteamthree.request.RequestService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.stereotype.Repository;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class TeamsServiceTest {

    @Mock
    private TeamsRepository teamsRepository;

    @InjectMocks
    private TeamsService teamsService;



}