import { createStyles, FormControlLabel, FormLabel, Grid, GridSpacing, makeStyles, Paper, Radio, RadioGroup, Theme } from '@material-ui/core';
import React from 'react';
import { FaFacebook } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi';
import { BiMap } from 'react-icons/bi';
import { FaTooth } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaYoutubeSquare } from 'react-icons/fa';

export default function Footer() {
	const [spacing, setSpacing] = React.useState<GridSpacing>(2);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSpacing(Number((event.target as HTMLInputElement).value) as GridSpacing);
	};

	return (
		<section className="footerPai">
			<div className="row">
				<div>
					< FaTooth  className="fatooth"/>
					<h3>DENTAL OFFICE - UM PRODUTO RH SOFTWARE</h3>
					<p>O melhor software de gerenciamento para clínicas e consultórios odontológicos foi
					desenvolvido pela RH Software. A mais completa e inovadora empresa de softwares para a área da saúde no Brasil.
          </p>
				</div>
				<div>
					<h4>Blog</h4>
					<div className="img1">
					</div>
					<a href="#">Como um sistema para clínicas vai potencializar seu consultório na crise?</a>
				</div>
				<div>
				<div className="img2">
					</div>
					<a href="#">Dentista: deixe seu consultório mais seguro <br></br> para os pacientes!</a>
				</div>
			</div>
			<div className="row">
				<div>
					<FiPhone className="fiphone"/>
					<h3>Central de atendimento</h3>
					<p>4002-8922</p>
					<h3>Segunda a Sexta: 08h às 18h</h3>
				</div>
				<div>
					<BiMap className="bimap"/>
					<h3>Onde estamos?</h3>
					<p>R. Cesário Galero, 448 - Tatuapé, São Paulo - SP, 03071-000</p>
					<h3>www.devgroup.com.br</h3>
				</div>
				<div>
					<nav className="icones">
						<FaFacebook className="icon"/>
						<FaInstagramSquare className="icon"/>
						<AiFillTwitterCircle className="icon"/>
						<FaYoutubeSquare className="icon"/>
					</nav>
					<a className="term" href="#">Termos de Uso  </a>
					<text>|</text>
					<a className="poli"href="#"> Politicas de Privacidade</a>
					{/* <h3>Termos de uso | Politicas de Privacidade</h3> */}
					<p>© 2020 Dental Office</p>
				</div>
			</div>
		</section>
	);
}

