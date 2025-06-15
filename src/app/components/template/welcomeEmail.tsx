// emails/QuoteReceivedEmail.tsx
import React from "react";

interface QuoteReceivedEmailProps {
  name: string;
  email: string;
  message: string;
  budget: string;
}

export const QuoteReceivedEmail: React.FC<QuoteReceivedEmailProps> = ({
  name,
  email,
  message,
  budget,
}) => (
  <div
    style={{
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      maxWidth: 600,
      margin: "0 auto",
      padding: 20,
      backgroundColor: "#f9f9f9",
      borderRadius: 8,
      color: "#333",
      lineHeight: 1.5,
    }}
  >
    <h2
      style={{
        color: "#6b46c1",
        borderBottom: "3px solid #6b46c1",
        paddingBottom: 8,
      }}
    >
      Nueva solicitud de cotización recibida
    </h2>

    <p>
      <strong>Nombre:</strong> {name}
    </p>
    <p>
      <strong>Email del cliente:</strong>{" "}
      <a href={`mailto:${email}`} style={{ color: "#805ad5" }}>
        {email}
      </a>
    </p>
    <p>
      <strong>Mensaje:</strong>
      <br />
      <em
        style={{
          display: "block",
          marginTop: 6,
          padding: 10,
          backgroundColor: "#e9d8fd",
          borderRadius: 6,
          whiteSpace: "pre-wrap",
          fontStyle: "normal",
          color: "#553c9a",
          border: "1px solid #d6bcfa",
        }}
      >
        {message}
      </em>
    </p>
    <p>
      <strong>Presupuesto:</strong> {budget}
    </p>

    <hr style={{ margin: "20px 0", borderColor: "#ddd" }} />

    <footer
      style={{
        fontSize: 12,
        color: "#999",
        textAlign: "center",
        marginTop: 20,
      }}
    >
      Este correo fue enviado automáticamente desde la plataforma. Por favor,
      no responda a este mensaje directamente.
    </footer>
  </div>
);
