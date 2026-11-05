package mil.army.ninelineteamthree.teams;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeamsService {

    private final TeamsRepository teamsRepository;

    public TeamsService(TeamsRepository teamsRepository) { this.teamsRepository = teamsRepository;}

    public Teams createTeams(Teams teams){
        return teamsRepository.save(teams);
    }

    public List<Teams> getAllTeams(){return teamsRepository.findAll();}
}
