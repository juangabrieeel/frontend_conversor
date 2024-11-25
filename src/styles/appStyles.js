import styled from "styled-components";

// Estilos comunes para contenedores principales
const CommonSection = styled.div`
  background-color: #2e0039;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
`;

// Contenedor principal que envuelve toda la aplicación
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #ffffff;

  @media (max-width: 1920px) {
    margin: 0 auto;
  }
`;

// Estilo para el header
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  width: 100%;
  height: 48px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px 0px #00000040;
  position: relative;

  h1 {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    font-family: Poppins, sans-serif;
    font-size: 20px;
    font-weight: 900;
    color: #2e0039;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    padding: 0 10px;
    h1 {
      font-size: 1.2rem;
    }
  }
`;

// Contenedor principal de contenido
export const ContentContainer = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .converter-section,
  .saved-section {
    ${CommonSection}
  }

  @media (max-width: 768px) {
    padding: 10px;

    .converter-section,
    .saved-section {
      padding: 20px;
    }
  }
`;

// Estilo para el footer
export const Footer = styled.footer`
  background-color: #2e0039;
  width: 100%;
  height: 39px;
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  text-align: center;
  padding: 5px;
  box-sizing: border-box;
  color: white;
  font-size: 0.8rem;

  p {
    font-family: Poppins, sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
    margin: 0;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    height: 35px;
    font-size: 0.7rem;
  }
`;

// Estilos específicos para componentes en el convertidor
export const ConverterContainer = styled(CommonSection)``;

export const Result = styled.div`
  background-color: transparent;
  color: #ffffff;
  display: flex;
  font-family: Poppins, sans-serif;
  font-size: 1rem;
  opacity: 1;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  background-color: #2e0039;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #3c004b;
  }
`;

export const Input = styled.input`
  padding: 10px;
  margin: 10px;
  width: 80%;
  max-width: 200px;
  background-color: #2e0039;
  color: white;
  border: none;
  border-radius: 5px;
  border-bottom: 2px solid #ffffff;
`;

export const Select = styled.select`
  padding: 10px;
  margin: 10px;
  background-color: #2e0039;
  color: white;
  border: none;
  border-radius: 5px;
  border-bottom: 2px solid #ffffff;
`;
// Estilo para las tarjetas de conversiones guardadas
export const SavedCard = styled.div`
  width: 349px;
  height: 38px;
  background-color: #d3d3d3; // Gris claro
  color: #000; // Negro
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  opacity: 0; // Inicialmente oculto
  margin: 10px 0;

  // Animación de aparición
  &.visible {
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
  }
`;
// Contenedor para mostrar las tarjetas de conversiones guardadas de dos en dos
export const SavedCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // Muestra dos tarjetas por fila
  gap: 20px; // Espacio entre las tarjetas
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  max-width: 800px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // En pantallas pequeñas, una tarjeta por fila
  }
`;

// Estilo para la palabra "saved"
export const SavedText = styled.span`
  color: grey; // Color gris para la palabra
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: 400;
`;
