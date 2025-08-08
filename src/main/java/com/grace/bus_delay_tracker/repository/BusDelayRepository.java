package com.grace.bus_delay_tracker.repository;

import com.grace.bus_delay_tracker.model.BusDelay;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//spring bean / DOA declaration
@Repository
public interface BusDelayRepository extends JpaRepository<BusDelay, Long> {
    //queries later will go here
}
