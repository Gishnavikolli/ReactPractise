
import React from "react";

export const Footer = () => {
  let FooterStyle = {
    width: "100%",
    position: "relative",
    color: "black",
    top: "70vh",
  };
  return (
    <footer style={FooterStyle} className="bg-dark text-light"> 
      <p className="text-center">
      Copyright &copy; myTodosList.com
          </p>
    </footer>
  );
};