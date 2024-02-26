// Importing necessary components from Material-UI and other dependencies.
import React, { useEffect, useState } from "react";
import { FormControl, Select, InputLabel, MenuItem } from "@material-ui/core";
// import Chart from "./Chart";

// Functional component named 'Activities' with a prop 'name'.
const Activities = ({ name }) => {
  // State variables to track selected activity type and the corresponding data list.
  const [flag, setFlag] = useState({
    commit: false,
    active: false,
    deletion: false
  });
  const [list, setList] = useState([]);

  // Event handler for changing the selected activity type from the dropdown.
  const handleChange = (e) => {
    // Clearing the previous data and resetting flags based on the selected activity type.
    setList([]);
    setFlag({ commit: false, active: false, deletion: false });

    // Updating the flag based on the selected value.
    switch (e.target.value) {
      case "Commit":
        setFlag({ commit: true, active: false, deletion: false });
        break;
      case "Addition":
        setFlag({ commit: false, active: true, deletion: false });
        break;
      case "Deletion":
        setFlag({ commit: false, active: false, deletion: true });
        break;
      default:
        break;
    }
    // Uncomment the next line if you want to fetch data immediately upon selection change.
    // CommitData();
  };

  // Async function to fetch commit data from the GitHub API.
  const CommitData = async () => {
    const url = `https://api.github.com/repos/${name}/stats/commit_activity`;
    
    try {
      // Fetching data from the provided URL.
      const res = await fetch(url);
      // Parsing the response as JSON.
      const data = await res.json();
      // Updating the state with the fetched data.
      setList(data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect hook to trigger the effect when 'flag' state changes.
  useEffect(() => {
    // Uncomment the next line if you want to fetch data immediately upon component mount.
    // CommitData();
  }, [flag]);

  // Rendering the component.
  return (
    <div>
      {/* Dropdown for selecting the type of activity. */}
      <FormControl>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={""}
          label=""
          onChange={handleChange}
        >
          {/* Dropdown options for different activity types. */}
          <MenuItem value={"Commit"}>Commit</MenuItem>
          <MenuItem value={"Addition"}>Addition</MenuItem>
          <MenuItem value={"Deletion"}>Deletion</MenuItem>
        </Select>
      </FormControl>
      {/* Chart component to visualize the activity data. */}
      {/* <Chart data={list} /> */}
    </div>
  );
};

// Exporting the 'Activities' component as the default export.
export default Activities;
