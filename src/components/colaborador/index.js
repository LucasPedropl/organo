import "./colaborador.css";

const Colaborador = ({nome, imagem, cargo, corFundo}) => {

	const corDeFundo = corFundo;

	return (
		<div className="colaborador">
			<div className="cabecalho" style={{backgroundColor: corDeFundo}}>
				<img src={imagem} alt={nome} />
			</div>
			<div className="rodape">
				<h4>{nome}</h4>
				<h5>{cargo}</h5>
			</div>
		</div>
	);
};

export default Colaborador;
