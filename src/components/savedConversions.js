import React from "react";
import {
  SavedCard,
  SavedCardsContainer,
  SavedText,
} from "../styles/appStyles";

const SavedConversions = ({ conversions, onDelete }) => {
  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/conversions/${id}`, {
      method: "DELETE",
    });
    onDelete(); // Llamar a onDelete para actualizar la lista
  };

  return (
    <div>
      <SavedText>Saved</SavedText>
      {conversions.length === 0 ? (
        <p>No hay conversiones guardadas.</p> // Mostrar mensaje si no hay conversiones
      ) : (
        <SavedCardsContainer>
          {conversions.map((conversion) => (
            <SavedCard key={conversion._id} className="visible">
              {conversion.inputValue} → {conversion.outputValue} (
              {conversion.conversionType})
              <button
                onClick={() => handleDelete(conversion._id)}
                style={{
                  marginLeft: "10px",
                  background: "none",
                  border: "none",
                  fontWeight: "bold",
                }}
              >
                x
              </button>
            </SavedCard>
          ))}
        </SavedCardsContainer>
      )}
    </div>
  );
};

export default SavedConversions;
