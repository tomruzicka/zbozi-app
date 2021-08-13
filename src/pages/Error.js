import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>Jejda! Tady nic není </h1>
        <Link to="/" className="btn btn-primary">
          Zpět domů
        </Link>
      </div>
    </section>
  );
};

export default Error;
