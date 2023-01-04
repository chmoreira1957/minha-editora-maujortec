import React from "react";
import { NavLink } from "react-router-dom";

let linkCorrente = {
  color: "#027399",
};
const Navegacao = () => (
  <ul>
    <li>
      <NavLink style={({ isActive }) => isActive ? linkCorrente : undefined } to="/">Home</NavLink>
    </li>
    <li>
      <NavLink style={({ isActive }) => isActive ? linkCorrente : undefined } to="/frontend">Frontend</NavLink>
    </li>
    <li>
      <NavLink style={({ isActive }) => isActive ? linkCorrente : undefined } to="/programacao">Programacao</NavLink>
    </li>
    <li>
      <NavLink style={({ isActive }) => isActive ? linkCorrente : undefined } to="/design">Design</NavLink>
    </li>
    <li>
      <NavLink style={({ isActive }) => isActive ? linkCorrente : undefined } to="/catalogo">Catalogo</NavLink>
    </li>
  </ul>
);

export default Navegacao;