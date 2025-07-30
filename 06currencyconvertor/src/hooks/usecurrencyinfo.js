import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!baseCurrency) return;

    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025-07-30/v1/currencies/${baseCurrency}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data[baseCurrency] || {});
      })
      .catch((err) => {
        console.error("Error fetching currency info:", err);
      });
  }, [baseCurrency]);

  return data;
}

export default useCurrencyInfo;
