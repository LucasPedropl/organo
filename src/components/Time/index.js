import Colaborador from "../colaborador";
import "./Time.css";

const Time = (props) => {
	const corSec = { backgroundColor: props.corSecundaria };
	const corPri = { borderColor: props.corPrimaria };

	return (
		<section className="time" style={corSec}>
			<h3 style={corPri}>{props.nome}</h3>
			<div className="colaboradores">
				{props.colaboradores.map((colaborador) => (
					<Colaborador
						nome={colaborador.nome}
						cargo={colaborador.cargo}
						imagem={colaborador.imagem}
					/>
				))}
			</div>
		</section>
	);
};

export default Time;
