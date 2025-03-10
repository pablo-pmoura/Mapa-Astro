import card from "../../public/locação.webp";
import phone from "../../public/phone-call.png";
import insta from "../../public/instagram.png";
import drenagem from "../../public/tubes.png";
import trator from "../../public/tractor.png";
import pavimentacao from "../../public/pavimenta.png";
import excavator from "../../public/excavator.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


type ServiceProps = {
	icon: string;
	title: string;
	desc: string;
};


const container = {
	hidden: { opacity: 0,},
	visible: {
	  opacity: 1,
	  transition: {
		delayChildren: 0.2,
		staggerChildren: 0.2
	  }
	}
  };

  const item = {
	hidden: { y: -20, opacity: 0 },
	visible: {
	  y: 0,
	  opacity: 1
	}
  };

function Services({ icon, title, desc }: ServiceProps ) {

	
	return (
		<motion.div 
			variants={item}
			className="item flex flex-col items-center lg:flex-row gap-3 lg:gap-5 lg:items-start h-full lg:py-10 py-10 px-5 rounded-lg bg-white shadow-sm border border-[#eaeaea] relative">
			<div className="w-1/4 h-full flex items-center justify-center">
				<img src={icon} alt="" className="w-[80px] lg:w-[70px] 3xl:w-[80px]" />
			</div>
			<div>
				<h1 className="text-[24px] text-center lg:text-start font-semibold text-[#029cdc]">{title}</h1>
				<p className="text-[#5A5A5A] text-sm lg:text-base text-center lg:text-start">{desc}</p>
			</div>
		</motion.div>
	);
}

export function ServicesGrid() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });


	return (
		<div className="w-full h-full flex flex-col">
			<div className="relative flex flex-col items-center mb-10">
				<div className="relative flex justify-center">
					<span className="w-[100px] h-[5px] bg-[#ffd008] absolute" />
					<h1 className="text-[32px] lg:text-[48px] text-[#029cdc] mt-3 mb-3 font-light">
						Nossos serviços
					</h1>
				</div>
				<p className="text-sm lg:text-base text-center text-[#5A5A5A] lg:w-[70%]">
					Com mais de 20 anos de experiência, somos uma empresa especializada em
					serviços de construção civil. Oferecemos soluções completas para seus
					projetos, desde a locação de equipamentos até a execução de obras de
					drenagem, pavimentação e terraplanagem.
				</p>
			</div>

			<motion.div className="grid h-fit lg:grid-cols-2 gap-5 container" variants={container} initial="hidden"
    			animate={isInView ? "visible" : "hidden"} ref={ref}>
				<Services
					title="Locação"
					desc="Possuímos em nossa frota grande variedade de máquinas e equipamentos para locação."
					icon={excavator.src}
				/>

				<Services
					title="Drenagem"
					desc="Executamos obras de drenagem, fornecendo equipamentos, mão de obra e materiais."
					icon={drenagem.src}
				/>

				<Services
					title="Pavimentação"
					desc="Realizamos pavimentações em CBUQ, PMF (asfalto à frio), PAVI-S, escória, concreto, entre outros. "
					icon={pavimentacao.src}
				/>
				<Services
					title="Terraplanagem"
					desc="Possuímos em noss corpo técnico, uma equipe com grande experiência na área de Terraplenagem."
					icon={trator.src}
				/>
			</motion.div>
		</div>
	);
}
