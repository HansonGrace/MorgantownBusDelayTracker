package com.grace.bus_delay_tracker.service;

import com.grace.bus_delay_tracker.model.Route;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;

import java.io.FileReader;
import java.io.Reader;
import java.util.ArrayList;
import java.util.List;

/**
 * Helper class to read GTFS text files
 * Uses the Apache Commons CSV library to parse CSV files.
 */
public class GTFSLoader {

    /**
     * Reads the routes.txt file and converts each line into a route  object
     * @param filePath The full path to the routes.txt file
     * @return a list of Route objects created from the file
     */
    public List<Route> loadRoutes(String filePath) {
        //list that holds all route objects
        List<Route> routes = new ArrayList<>();

        try {
            //open file to read
            Reader reader = new FileReader(filePath);

            //alert how file is formatted, skipes first line
            CSVParser csvParser = new CSVParser(reader, CSVFormat.DEFAULT.withFirstRecordAsHeader());

            //loop through each line in file after header
            for (CSVRecord record : csvParser) {
                //each record is one row in csv file

                //create a new route object
                Route route = new Route();

                route.setRouteId(record.get("route_id"));
                route.setRouteShortName(record.get("route_short_name"));
                route.setRouteLongName(record.get("route_long_name"));
                route.setRouteDesc(record.get("route_desc"));
                route.setRouteType(Integer.parseInt(record.get("route_type")));
                route.setRouteUrl(record.get("route_url"));
                route.setRouteColor(record.get("route_color"));
                route.setRouteTextColor(record.get("route_text_color"));

                routes.add(route);
            }

            //close parser
            csvParser.close();
            reader.close();

        } catch (Exception e) {
            //print error for debugging
            e.printStackTrace();
        }
        return routes;
    }
}
