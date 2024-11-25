import React, { useState } from "react";
import {
  ConverterContainer,
  Select,
  Button,
  Input,
  Result,
} from "../styles/appStyles";

// Tabla de tasas de conversión
const conversionRates = {
  "kilometers-miles": 0.621371,
  "miles-kilometers": 1.60934,
  "feet-meters": 0.3048,
  "meters-feet": 3.28084,
  "centimeters-inches": 0.393701,
  "inches-centimeters": 2.54,
};

// Función para realizar la conversión
const convert = (type, value) => {
  if (!value || isNaN(value)) return ""; // Validación del valor
  return (value * conversionRates[type]).toFixed(2); // Redondeo a 2 decimales
};

// Contiene la lógica de conversión
const Converter = ({ onSave }) => {
  const [type, setType] = useState("kilometers-miles");
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setResult(convert(type, value));
  };

  const swapUnits = () => {
    const [from, to] = type.split("-");
    const newType = `${to}-${from}`;
    setType(newType);
    const swappedInputValue = result;
    const swappedResult = inputValue;
    setInputValue(swappedInputValue);
    setResult(swappedResult);
  };

  const saveConversion = async () => {
    if (!inputValue || !result) {
      console.log("Por favor, ingrese un valor antes de guardar.");
      return;
    }
    const [from, to] = type.split("-");
    const conversionData = {
      inputValue,
      outputValue: result,
      conversionType: `${from}-${to}`,
    };

    try {
      const response = await fetch("http://localhost:5000/api/conversions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(conversionData),
      });

      if (response.ok) {
        console.log("Conversión guardada exitosamente.");
        setInputValue("");
        setResult("");
        if (onSave) {
          onSave();
        }
      } else {
        console.log("Hubo un problema al guardar la conversión.");
      }
    } catch (error) {
      console.error("Error al guardar la conversión:", error);
      console.log("Error al conectar con el servidor.");
    }
  };

  // Interfaz del usuario
  return (
    <ConverterContainer>
      <h2>Convertir</h2>
      <Select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="kilometers-miles">Kilómetros a Millas</option>
        <option value="miles-kilometers">Millas a Kilómetros</option>
        <option value="feet-meters">Pies a Metros</option>
        <option value="meters-feet">Metros a Pies</option>
        <option value="centimeters-inches">Centímetros a Pulgadas</option>
        <option value="inches-centimeters">Pulgadas a Centímetros</option>
      </Select>
      <Button onClick={swapUnits}>--</Button>
      <Input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Introduce valor"
      />

      <div>
        <Button onClick={saveConversion}>❤</Button>
        <Result>{result}</Result>
      </div>
    </ConverterContainer>
  );
};

export default Converter;
