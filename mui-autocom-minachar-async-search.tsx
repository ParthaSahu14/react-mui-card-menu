import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Autocomplete from "@mui/lab/Autocomplete";
import TextField from "@mui/material/TextField";
import { getOptionsAsync } from "./options";

function App() {
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState({});

  useEffect(() => {
    (async () => {
      if (inputValue && inputValue.length > 2) {
        setLoading(true);
        getOptionsAsync(inputValue).then((filteredOptions) => {
          setOptions(filteredOptions);
          if (filteredOptions.length === 0) {
            setLoading(false);
          }
        });
      } else {
        setOptions([]);
        setLoading(false);
      }
    })();
  }, [inputValue, setOptions]);

  return (
    <>
      <Autocomplete
        options={options}
        noOptionsText={"No Film found"}
        getOptionLabel={(option) => option.title}
        filterOptions={(x) => x}
        loading={inputValue && inputValue.length > 2 && loading}
        onInputChange={(e, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderInput={(params) => <TextField {...params} label="Combo box" />}
        onChange={(event, newValue) => {
          setSelectedOption(newValue);
        }}
      />
      <br />
      <br />
      <br />
      {JSON.stringify(selectedOption)}
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));

//https://codesandbox.io/s/40811535-delay-suggestion-time-material-ui-autocomplete-component-forked-f6woru?file=/index.js        
        
