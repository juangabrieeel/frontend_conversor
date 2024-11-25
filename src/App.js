import React, { useState, useEffect } from "react";
import { GlobalStyle } from "./styles/globalStyles";
import Converter from "./components/converter";
import SavedConversions from "./components/savedConversions";
import {
  MainContainer,
  Header,
  Footer,
  ContentContainer,
} from "./styles/appStyles";

const App = () => {
  const [conversions, setConversions] = useState([]);

  // Función para obtener conversiones desde la base de datos
  const fetchConversions = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/conversions");
      const data = await response.json();
      setConversions(data);
    } catch (error) {
      console.error("Error al obtener las conversiones:", error);
    }
  };

  // Obtener conversiones al cargar el componente
  useEffect(() => {
    fetchConversions();
  }, []); // Solo se ejecuta una vez al cargar el componente

  return (
    <MainContainer>
      <GlobalStyle />
      <Header>
        <h1>unit converter</h1>
      </Header>
      <ContentContainer>
        <div className="converter-section">
          <Converter onSave={fetchConversions} />
        </div>
        <div className="saved-section">
          <SavedConversions
            conversions={conversions}
            onDelete={fetchConversions}
          />
        </div>
      </ContentContainer>
      <Footer>
        <p>Terms of service | Privacy policy</p>
      </Footer>
    </MainContainer>
  );
};

export default App;
