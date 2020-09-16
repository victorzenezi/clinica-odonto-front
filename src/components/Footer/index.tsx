import { createStyles, FormControlLabel, FormLabel, Grid, GridSpacing, makeStyles, Paper, Radio, RadioGroup, Theme } from '@material-ui/core';
import React from 'react';
import { FaFacebook } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi';
import { BiMap } from 'react-icons/bi';
// import { Container } from './styles';

export default function Footer() {
  const [spacing, setSpacing] = React.useState<GridSpacing>(2);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpacing(Number((event.target as HTMLInputElement).value) as GridSpacing);
  };

  return ( 
    <section className= "footerPai">
      <div className="row">
        <div>
          <h3>DENTAL OFFICE - UM PRODUTO RH SOFTWARE</h3>
          <p>O melhor software de gerenciamento para clínicas e consultórios odontológicos foi
             desenvolvido pela RH Software. A mais completa e inovadora empresa de softwares para a área da saúde no Brasil.
          </p>
        </div>
        <div>
          <h4>Blog</h4>
          <a href="#">Deixe seu consultório mais seguro para os pacientes</a>
        </div>
        <div>
          <a href="#">Volte a atender todos os seus pacientes: como ficará seu consultório odontológico com a reabertura?</a>
        </div>
      </div>
      <div className="row">
        <div>
          <FiPhone/>
          <h3>Central de atendimento</h3>
          <p>4002-8922</p>
          <h3>Segunda a Sexta: 08h às 18h</h3>
        </div>
        <div>
        <BiMap/>
          <h3>Onde estamos?</h3>
          <p>hogwarts</p>
          <h3>www.rhsoftware.com.br</h3>
        </div>
        <div>
          <FaFacebook/>
          <FaFacebook/>
          <FaFacebook/>
          <FaFacebook/>
          <h3>Termos de uso | Politicas de Privacidade</h3>
          <p>© 2020 Dental Office</p>
        </div>
      </div>
    </section>
    );
}

