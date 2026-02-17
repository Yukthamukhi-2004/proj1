import { useEffect, useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
import { ProgressSpinner } from "primereact/progressspinner";
import "./styles/currencyConverter.css";

export default function App() {
  const [amount, setAmount] = useState(1);
  const [fromCur, setFromCur] = useState("EUR");
  const [toCur, setToCur] = useState("USD");
  const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const currencies = [
    { label: "USD", value: "USD" },
    { label: "EUR", value: "EUR" },
    { label: "CAD", value: "CAD" },
    { label: "INR", value: "INR" },
  ];

  useEffect(() => {
    async function convert() {
      setIsLoading(true);
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`,
      );
      const data = await res.json();
      setConverted(data.rates[toCur]);
      setIsLoading(false);
    }

    if (fromCur === toCur) {
      setConverted(amount);
    } else {
      convert();
    }
  }, [amount, fromCur, toCur]);

  return (
    <div className="p-4 card">
      <h2>Currency Converter</h2>

      <div className="flex flex-column gap-3">
        {/* PrimeReact InputNumber handles numbers & decimals automatically */}
        <InputNumber
          value={amount}
          onValueChange={(e) => setAmount(e.target.value)}
          pt={{
            root: {
              style: { border: "2px solid blue", borderRadius: "8px" },
            },
            input: {
              style: { backgroundColor: "#e0f7fa", fontWeight: "bold" },
            },
          }}
          placeholder="Enter amount"
        />

        <div className="flex gap-2">
          <Dropdown
            value={fromCur}
            options={currencies}
            onChange={(e) => setFromCur(e.target.value)}
            pt={{
              root: { className: "border-blue-500" },
              label: { style: { color: "darkblue" } },
            }}
            placeholder="From"
          />

          <Dropdown
            value={toCur}
            options={currencies}
            onChange={(e) => setToCur(e.target.value)}
            placeholder="To"
          />
        </div>

        <div className="mt-4">
          {isLoading ? (
            <ProgressSpinner
              style={{ width: "30px", height: "30px" }}
              strokeWidth="8"
            />
          ) : (
            <p className="text-xl font-bold">
              {converted} {toCur}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
