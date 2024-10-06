import "./formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

const Formulario = (props) => {
	
	const aoSalvar = (evento) => {
		evento.preventDefault();
		props.aoColaboradorCadastrado({
			nome,
			cargo,
			imagem,
			time,
		});
	};

	const [nome, setNome] = useState("");
	const [cargo, setCargo] = useState("");
	const [imagem, setImagem] = useState("");
	const [time, setTime] = useState("");

	return (
		<section className="formulario">
			<form onSubmit={aoSalvar}>
				<h2>Preencha os dados para criar o card do colaborador</h2>
				<br/>
				<CampoTexto
					valor={nome}
					aoAlterado={(valor) => setNome(valor)}
					obrigatorio={true}
					label="Nome"
					placeholder="Digite o seu nome..."
				/>
				<CampoTexto
					valor={cargo}
					aoAlterado={(valor) => setCargo(valor)}
					obrigatorio={true}
					label="Cargo"
					placeholder="Digite o seu cargo..."
				/>
				<CampoTexto
					valor={imagem}
					aoAlterado={(valor) => setImagem(valor)}
					obrigatorio={true}
					label="Imagem"
					placeholder="Digite o endereço da imagem..."
				/>
				<ListaSuspensa
					valor={time}
					aoAlterado={(valor) => setTime(valor)}
					obrigatorio={true}
					label="Times"
					itens={props.times}
				/>
				<Botao>Criar Card</Botao>
			</form>
		</section>
	);
};

export default Formulario;
