package service;
import model.BusDelay;
import repository.BusDelayRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusDelayService {

    private final BusDelayRepository repository;

    //contructor injection to ensure repo field is always initialized
    public BusDelayService(BusDelayRepository repository) {
        this.repository = repository;
    }

    //retrieve all bus delay records from database
    public List<BusDelay> getAllDelays(){
        return repository.findAll();
    }

    //save a new or updates record to database
    public BusDelay saveDelay(BusDelay delay){
        return repository.save(delay);
    }

}
