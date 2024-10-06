import './rodape.css'

const Rodape = () => {
    return (
		<footer className="rodape">
			<div className="redes">
				<a href="https://facebook.com">
					<img src="/imagens/fb.png" alt="facebook" />
				</a>
				<a href="https://instagram.com">
					<img src="/imagens/ig.png" alt="instagram" />
				</a>
				<a href="https://x.com">
					<img src="/imagens/tw.png" alt="twiter" />
				</a>
			</div>
			<div>
				<img src="/imagens/logo.png" alt="logo" />
			</div>
			<div>
				<p>Desenvolvido por Pedro Lucas Mota</p>
			</div>
		</footer>
    );
}

export default Rodape;