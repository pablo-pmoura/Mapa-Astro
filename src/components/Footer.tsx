import logo from "../../public/logo-mapa.png";
import herobg from "../../public/terraplenagem.png";
import pin from "../../public/pin.png";
import master from "../../public/desenvolvido-3master.png";

export function Footer() {
	return (
		<>
			<div className="grid gap-8 grid-cols-1 lg:grid-cols-4 relative h-fit lg:h-[250px] justify-items-center items-center px-[25px] py-10 lg:py-0 lg:px-[180px]">
				<img
					src={herobg.src}
					alt="Plano de fundo Hero"
					className="object-cover w-full h-full absolute -z-10"
				/>
				<div className="w-full flex mb-5">
					<img src={logo.src} alt="Logo Mapa" />
				</div>

				<div className="w-full lg:px-5">
					<span className="w-[100px] h-[3px] lg:h-[5px] bg-[#029cdc] absolute" />
					<h1 className="font-semibold text-lg lg:text-xl text-white mt-2 lg:mb-3 lg:mt-3">
						End. Administrativo
					</h1>
					<p className=" text-white text-base lg:text-lg flex gap-2">
						R. Waldemar Siepierski, 200, SL 618, Rio Branco, Cariacica-ES,
						29147-600
					</p>
				</div>

				<div className="w-full lg:px-5">
					<span className="w-[100px] h-[3px] lg:h-[5px] bg-[#029cdc] absolute" />
					<h1 className="font-semibold text-lg lg:text-xl text-white mt-2 lg:mb-3 lg:mt-3">
						End. Operacional
					</h1>
					<p className="text-white text-base lg:text-lg flex ">
						Av. Kleber Andrade, 200 Portão Azul Rio Branco, Cariacica-ES,
						29147-620
					</p>
				</div>

				<div className="w-full lg:px-5">
					<span className="w-[100px] h-[3px] lg:h-[5px] bg-[#029cdc] absolute" />
					<h1 className="font-semibold text-lg lg:text-xl text-white mt-2 lg:mb-3 lg:mt-3">
						Contato
					</h1>
					<p className="w-[80%] text-white text-base lg:text-lg">
						27 3251-7999
					</p>
					<p className="w-[80%] text-white text-base lg:text-lg">
						@mapaconstrutoraltda
					</p>
				</div>
			</div>

			<div className="w-full bg-white flex items-center justify-center lg:justify-between py-2 px-10">
				<p className="text-[#7d7d7d] hidden lg:flex">
					3Master Tecnologia – Todos os direitos reservados © 2024
				</p>
				<a href="https://www.3master.com.br">
					<img
						src={master.src}
						alt="Desenvolvido por 3Master Tecnologia"
						className="w-[150px]"
					/>
				</a>
			</div>
		</>
	);
}
