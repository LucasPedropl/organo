import Colaborador from "../colaborador";
import "./Time.css";

const Time = (props) => {
	const corSec = { backgroundColor: props.corSecundaria };
	const corPri = { borderColor: props.corPrimaria };

	return (
		props.colaboradores.length > 0 && (
			<section className="time" style={corSec}>
				<h3 style={corPri}>{props.nome}</h3>
				<div className="colaboradores">
					{props.colaboradores.map((colaborador) => (
						<Colaborador
							key={colaborador.nome}
							nome={colaborador.nome}
							cargo={colaborador.cargo}
							imagem={colaborador.imagem}
							corFundo={props.corPrimaria}
						/>
					))}
				</div>
			</section>
		)
	);
};

export default Time;
