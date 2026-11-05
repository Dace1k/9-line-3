package mil.army.ninelineteamthree.teams;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/teams")
public class TeamsController {

    private final TeamsService teamsService;

    public TeamsController(TeamsService teamsService) {this.teamsService = teamsService;}

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Teams CreateNewTeams(@RequestBody Teams teams) {return teamsService.createTeams(teams);}

    @GetMapping
    public List<Teams> getAllTeams(){ return teamsService.getAllTeams(); }


}
