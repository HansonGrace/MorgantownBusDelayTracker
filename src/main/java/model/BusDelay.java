package model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "bus_delay")
public class BusDelay {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "route_name", nullable = false)
    private String routeName;

    @Column(name = "bus_number", nullable = false)
    private String busNumber;

    @Column(name = "delay_minutes", nullable = false)
    private int delayMinutes;

    @Column(name = "report_time", nullable = false)
    private LocalDateTime reportTime;

    //declare constructors
    public BusDelay(){}

    public BusDelay(String routeName, String busNumber, int delayMinutes, LocalDateTime reportTime) {
        this.routeName = routeName;
        this.busNumber = busNumber;
        this.delayMinutes = delayMinutes;
        this.reportTime = reportTime;
    }

    //declare getters and setters
    public Long getId() {
        return id;
    }

    public String getRouteName() {
        return routeName;
    }

    public void setRouteName(String routeName) {
        this.routeName = routeName;
    }

    public String getBusNumber() {
        return busNumber;
    }

    public void setBusNumber(String busNumber) {
        this.busNumber = busNumber;
    }

    public int getDelayMinutes() {
        return delayMinutes;
    }

    public void setDelayMinutes(int delayMinutes) {
        this.delayMinutes = delayMinutes;
    }

    public LocalDateTime getReportTime() {
        return reportTime;
    }

    public void setReportTime(LocalDateTime reportTime) {
        this.reportTime = reportTime;
    }




}
