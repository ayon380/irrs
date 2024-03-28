import React from 'react';

const TrainDetails = ({ data }) => {
  return (
    <div>
      <h2>Train Details</h2>
      <p>Status: {data.status ? "Success" : "Failed"}</p>
      <p>Timestamp: {new Date(data.timestamp).toLocaleString()}</p>
      <p>Delay: {data.data.delay} minutes</p>
      <p>Train Name: {data.data.train_name}</p>
      <p>Train Number: {data.data.train_number}</p>
      <p>Run Days: {data.data.run_days}</p>
      <p>Source: {data.data.source}</p>
      <p>STD (Scheduled Departure Time): {data.data.std}</p>
      <p>ETD (Estimated Departure Time): {data.data.etd}</p>
      <p>ETA (Estimated Time of Arrival): {data.data.eta}</p>
      <p>Distance from Source: {data.data.distance_from_source} kms</p>

      <h3>Previous Stations:</h3>
      {data.data.previous_stations.map(station => (
        <div key={station.stoppage_number}>
          <p>Station Name: {station.station_name}</p>
          <p>STD (Scheduled Time): {station.std}</p>
          <p>ETA (Estimated Time of Arrival): {station.eta}</p>
          <p>ETD (Estimated Time of Departure): {station.etd}</p>
          <p>Distance from Source: {station.distance_from_source} kms</p>
          <p>Distance from Current Station: {station.distance_from_current_station_txt}</p>
          <p>Arrival Delay: {station.arrival_delay} minutes</p>
          <p>Platform Number: {station.platform_number}</p>
          <p>Food Available: {station.food_available ? "Yes" : "No"}</p>
        </div>
      ))}
    </div>
  );
};

export default TrainDetails;
