package com.grace.bus_delay_tracker.controller;

import com.grace.bus_delay_tracker.model.BusDelay;
import com.grace.bus_delay_tracker.service.BusDelayService;
import org.springframework.web.bind.annotation.*;

import java.util.List;


/**
 * Class handles http requests
 * values ore serialized to JSON or XML
*
* Exposes API endpoints under /api/delays path to get and post bus data
*
 * */

@RestController
@RequestMapping("/api/delays")
//allow crossorigin requests from any domain
@CrossOrigin(origins = "*")
public class BusDelayController {

    private final BusDelayService service;

    //contructor injection
    public BusDelayController(BusDelayService service) {
        this.service = service;
    }

    //handle get requests and return all bus delay records
    @GetMapping
    public List<BusDelay> getAllDelays() {
        return service.getAllDelays();
    }


    //handles post requests
    @PostMapping
    public BusDelay createDelay(@RequestBody BusDelay delay) {
        return service.saveDelay(delay);
    }
}


