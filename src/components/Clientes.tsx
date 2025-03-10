import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import arcellor from "../../public/clientes/arcellor.png";
import cariacica from "../../public/clientes/cariacica.jpg";
import ata from "../../public/clientes/ata.png";
import consorcio from "../../public/clientes/consorcio dbo.jpg";
import corpus from "../../public/clientes/corpus.png";
import vv from "../../public/clientes/prefeitura-vv.png";
import marca from "../../public/clientes/marca-ambiental.jpg";
import furnas from "../../public/clientes/FURNAS.png";
import gran from "../../public/clientes/granviver.png";
import mge from "../../public/clientes/LogoMGE.png";
import forca from "../../public/clientes/forca-ambiental.png";
import mrv from "../../public/clientes/mrv.jpg";
import ode from "../../public/clientes/Odebrecht.jpg";
import qualita from "../../public/clientes/qualita.png";
import sanear from "../../public/clientes/sanear.png";
import tracomal from "../../public/clientes/tracomal.jpg";
import uniao from "../../public/clientes/uniao-norte.png";
import vallou from "../../public/clientes/vallourec.png";
import vital from "../../public/clientes/vital-eng.png";

const clientes = [
	{ img: arcellor.src },
	{ img: cariacica.src },
	{ img: ata.src },
	{ img: consorcio.src },
	{ img: corpus.src },
	{ img: vv.src },
	{ img: marca.src },
	{ img: furnas.src },
	{ img: gran.src },
	{ img: mge.src },
	{ img: forca.src },
	{ img: mrv.src },
	{ img: ode.src },
	{ img: qualita.src },
	{ img: sanear.src },
	{ img: tracomal.src },
	{ img: uniao.src },
	{ img: vallou.src },
	{ img: vital.src },
];

type ClientsProps = {
	logos: string;
};

function ClientCard({ logos, index }: ClientsProps & { index: number }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const about = {
		hidden: { opacity: 0, y: -50 },
		visible: (i: number) => ({
			y: 0,
			opacity: 1,
			transition: { duration: 0.5, delay: i * 0.1 },
		}),
	};

	return (
		<motion.div
			animate={isInView ? "visible" : "hidden"}
			initial="hidden"
			ref={ref}
			variants={about}
			custom={index}
			className="lg:p-5 p-3 bg-white border flex items-center justify-center border-[#eaeaea] w-full h-[150px] lg:w-[200px] lg:h-[150px] rounded-lg overflow-hidden "
		>
			<img src={logos} alt="Logo Clientes" className="w-full object-cover" />
		</motion.div>
	);
}

export function ClientsGrid() {
	return (
		<div className="flex flex-col">
			<div className="relative flex justify-center mb-10">
					<span className="w-[100px] h-[5px] bg-[#ffd008] absolute" />
					<h1 className="text-[32px] lg:text-[48px] text-[#029cdc] mt-3 mb-3 font-light">
						Alguns Clientes
					</h1>
				</div>
			<motion.div className="grid grid-cols-2 lg:grid-cols-6 gap-3 lg:gap-5">
				{clientes.map((client, index) => (
				<ClientCard logos={client.img} key={`initial-${index}`} index={index} />
				))}
			</motion.div>
		</div>
		
	);
}
