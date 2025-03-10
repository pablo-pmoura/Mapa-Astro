import mapa from "../../public/fachada-mapa.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
	const ref = useRef(null)
	const isInView = useInView(ref, {once: true})
	return (
		<>
			<div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mb-[60px] items-center overflow-hidden">
				<div className="flex flex-col lg:w-1/2 overflow-hidden">
					
					<motion.div initial={{opacity: 0, x:-100}} animate={isInView ? {opacity: 1, x:0, transition:{delay:0.5}} : {opacity: 0, x: -20}} ref={ref}>
						<span className="w-[100px] h-[5px] bg-[#ffd008] absolute" />
						<h1 className="text-[32px] lg:text-[48px] text-[#029cdc] mb-5 mt-3 font-light">
							Quem somos?
						</h1>
					</motion.div>
					<motion.div initial={{opacity: 0, x:-100}} animate={isInView ? {opacity: 1, x:0, transition:{delay:0.8, duration: 0.3}} : {opacity: 0, x: -20}} ref={ref}>
						<p className="text-[#5A5A5A] text-base font-light">
						Estamos há quase 20 anos no mercado de Locação de Maquinas Pesadas e
						Equipamentos, além de realizar serviços de Terraplenagem,
						Pavimentação, Drenagem, Limpeza Publica Urbana Complementar com
						máquinas, Esgotamento Sanitário, Manutenção de Transbordo entre
						outros, nossa sede está situada próximo a BR 262, no município de
						Cariacica/ES.
						<br className="mb-5" /> Os serviços oferecidos pela MAPA CONSTRUTORA
						são licenciados pelos órgãos ambientais municipais e estaduais. Isto
						é garantia de que os serviços serão executados de acordo com as
						normas técnicas e padrões de qualidade exigidos.
						</p>
					</motion.div>
					
				</div>
				<motion.div className="lg:w-1/2 h-[300px] lg:h-[500px] overflow-hidden flex justify-end rounded-xl shadow-md" initial={{opacity: 0, x:300}} animate={isInView ? {opacity: 1, x:0, transition:{delay:1.3, duration: 0.3}} : {opacity: 0, x: -20}} ref={ref}>
					<img
						src={mapa.src}
						alt="Faixada Mapa"
						className="w-full object-cover"
					/>
				</motion.div>
			</div>

			
		</>
	);
}
