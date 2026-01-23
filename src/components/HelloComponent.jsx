import React, { useEffect, useState } from "react";
import { getHelloMessage } from "../api/helloApi";

const HelloComponent = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    getHelloMessage()
      .then((data) => setMessage(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <p>{message}</p>
    </div>
  );
};

export default HelloComponent;
