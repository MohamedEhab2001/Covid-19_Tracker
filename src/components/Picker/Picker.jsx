import { NativeSelect, FormControl } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Countries } from "../../api";
import styles from "./Picker.module.css";
const Picker = ({ change }) => {
  const [countries, setCountries] = useState([]);
  const [country, setcountry] = useState("");
  useEffect(() => {
    Countries().then((res) => setCountries(res));
    change(country);
  }, [country, change]);
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        value={country}
        onChange={(e) => {
          setcountry(e.target.value);
        }}
      >
        <option value="">Global</option>
        {countries.map((country) => {
          return (
            <option key={Math.floor(Math.random() * 1000000)} value={country}>
              {country}
            </option>
          );
        })}
      </NativeSelect>
    </FormControl>
  );
};

export default Picker;
