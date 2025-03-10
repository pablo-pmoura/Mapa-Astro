import herobg from "../../public/terraplenagem.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Hero() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<div className="w-full h-[700px] lg:h-[800px] overflow-hidden relative flex items-center">
			<img
				src={herobg.src}
				alt="Plano de fundo Hero"
				className="object-cover w-full h-full absolute"
			/>

			<div className="z-10 w-full flex flex-col items-center lg:items-start text-center lg:text-start lg:w-[50%] lg:ml-[200px] relative">
				<span className="w-[150px] h-[3px] bg-[#ffd008] absolute " />
				<h1 className="text-[40px] lg:text-[70px] font-bold leading-none text-[#ffd008] uppercase mt-5">
					Somos seus parceiros de construção
				</h1>
				<p className="text-base lg:text-lg w-[95%] text-white font-light mt-5 lg:w-[70%]">
					Serviços de Locação de máquinas, Terraplanagem, Pavimentação,
					Drenagem, Limpeza Pública e outros.
				</p>
				<a href="#services">
					<button
						type="button"
						className="py-2 px-5 bg-[#029cdc] text-white rounded-lg mt-5 "
					>
						Nossos Serviços
					</button>
				</a>
			</div>
		</div>
	);
}
