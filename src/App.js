import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topo from "./components/Topo";
import Home from "./components/Home";
import Frontend from "./components/Frontend";
import Programacao from "./components/Programacao";
import Design from "./components/Design";
import Catalogo from "./components/Catalogo";
import NotFound from "./components/NotFound";
import Rodape from "./components/Rodape";
import "./index.css";
// import Livro from "./components/Livro";
import MostraLivro from "./components/MostraLivro";
// import axios from "axios";
class App extends Component {
  state = {
    livros: [],
  }

  async componentDidMount() {
    // using Axios library (not native, i.e., must install it before using)
    // try {
    //   const { data: livros } = await axios.get("/api/todosOsLivros.json");
    //   this.setState({ livros });
    // } catch( error ) {
    //     console.log( error );
    //     document.querySelectorAll(".principal")[0]
    //       .insertAdjacentHTML(
    //         "beforeend",
    //         "<p class='erro'><strong>MENSAGEM DE ERRO</strong></p>"
    //     )
    //   }
    
    // using fetch API from React (native, don´t need to install anything before using)
    fetch("/api/todosOsLivros.json")
      .then(response => response.json())
      .then(livros => this.setState({ livros }))
      .catch(function(error) {
        document
          .querySelectorAll("main")[0]
          .insertAdjacentHTML("beforeend", "<p>Mensagem de erro</p>");
      })
      .finally(function() {
        console.log("Sempre retorna");
      });
  }

  render( props ) {
    return (
      <Router>
        <Topo />
        <Routes>
          <Route
            path="/"
            element={ <Home livros={ this.state.livros } /> }
          />
          <Route
            path="/frontend"
            element={ <Frontend livros={ this.state.livros } /> }
          />
          <Route
            path="/programacao"
            element={ <Programacao livros={ this.state.livros } /> }
          />
          <Route
            path="/design"
            element={ <Design livros={ this.state.livros }
          />}  />
          <Route
            path="/catalogo"
            element={ <Catalogo livros={ this.state.livros } /> }
          />
          <Route
            path="/livro/:livroSlug"
            element={ <MostraLivro livros={ this.state.livros } /> }
          />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
        <Rodape />
      </Router>
    );
  }
}

export default App;
