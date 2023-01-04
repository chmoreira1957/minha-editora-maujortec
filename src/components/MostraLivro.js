import React from "react";
import { useParams } from "react-router-dom";
import Livro from "./Livro";
import NotFound from "./NotFound";

const MostraLivro = (props) => {
  const { livroSlug } = useParams();
  const livro = props.livros.find( livro => livro.slug === livroSlug )
    if ( livro )
      return <Livro livro={ livro } />
    else
      return <NotFound />
  }

export default MostraLivro;
