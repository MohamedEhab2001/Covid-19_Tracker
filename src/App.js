import React, { useEffect, useState } from "react";
import { Cards, Charts, Picker, Loading } from "./components";
import styles from "./App.module.css";
import { getGlobal } from "./api";
function App() {
  const [data, setData] = useState({});
  const [country, setcountry] = useState("");
  const [loading, setLoding] = useState(true);
  useEffect(() => {
    getGlobal(country).then((res) => {
      setData(res);
      setLoding(false);
    });
  }, [country]);
  const handleCountrychange = (countryArg) => {
    setcountry(countryArg);
  };
  return (
    <div className={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <>
          {" "}
          <Cards data={data} />
          <Picker change={handleCountrychange} />
          <Charts data={data} country={country} />{" "}
        </>
      )}
    </div>
  );
}

export default App;
