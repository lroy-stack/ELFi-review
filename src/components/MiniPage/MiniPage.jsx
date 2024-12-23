import React from "react";

const MiniPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Explora el Trading en ELFi</h2>
      <iframe
        src="https://app.elfi.xyz/trade/ETHUSD" // URL de la página a proyectar
        title="Página de Trading de ELFi"
        style={{
          width: "100%",
          height: "90vh", // Ajusta la altura según tus necesidades
          border: "none",
        }}
      />
    </div>
  );
};

export default MiniPage;