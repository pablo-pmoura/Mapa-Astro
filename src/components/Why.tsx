import check from "../../public/check.png";
import retro from "../../public/retro.jpg";
import trator from "../../public/trator.jpeg";
import pa from "../../public/pa.jpg";
import motonivel from "../../public/motonivel.jpg";
import escava from "../../public/escavadeira.jpg";
import rolo from "../../public/rolo.jpg";
import phone from "../../public/phone-call.png";
import insta from "../../public/instagram.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const servicos = [
	{
		title: "Escavadeiras",
		img: escava.src,
		desc: "Indicada para grandes projetos de infraestrutura, mineração e construção civil, onde há necessidade de movimentação intensiva de terra e materiais em áreas amplas. Este equipamento é ideal para escavações profundas e remoção de grandes volumes de solo.",
	},
	{
		title: "Retroescavadeiras",
		img: retro.src,
		desc: "Ideal para construções de pequeno a médio porte, especialmente em locais que exigem flexibilidade para escavar e movimentar materiais em espaços reduzidos. Utilizada em obras urbanas, terraplanagem e pequenas escavações onde a agilidade e versatilidade são necessárias",
	},
	{
		title: "Motoniveladoras",
		img: motonivel.src,
		desc: "Essencial para nivelamento de terrenos e criação de superfícies planas, sendo amplamente utilizada em construção de estradas, terraplanagem e preparo de solos para pavimentação. Este equipamento é ideal para projetos de infraestrutura onde precisão e acabamento no nivelamento são essenciais.",
	},
	{
		title: "Rolos Compactadores",
		img: rolo.src,
		desc: "O rolo compactador é utilizado para compactação de solos, asfalto e outros materiais granulares, sendo fundamental na construção de estradas, pavimentação e preparação de fundações.",
	},
	{
		title: "Pás Carregadeiras",
		img: pa.src,
		desc: "Indicada para operações de carregamento e transporte de materiais a curtas distâncias, sendo amplamente utilizada em obras de construção civil, mineração e agricultura. Ideal para movimentação de terra, areia, pedras e resíduos.",
	},
	{
		title: "Tratores",
		img: trator.src,
		desc: "Versáteis e indispensáveis em operações rurais, ideais para arar, cultivar e preparar o solo, além de transportar implementos e equipamentos agrícolas. Essenciais para otimizar o tempo e aumentar a produtividade em plantações, manejo de pastagens e atividades de colheita.",
	},
];

const container = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition:{
			delayChildren: 0.2,
			staggerChildren: 0.2
		}
		 
	}
}

const item = {
	hidden: { y: -20, opacity: 0 },
	visible: {
	  y: 0,
	  opacity: 1
	}
  };

type Service = {
	img: string;
	title: string;
	desc: string;
};

function Card({ img, title, desc }: Service) {
	return (
		<motion.div variants={item} className="item flex flex-col lg:w-full h-full rounded-lg overflow-hidden shadow-md bg-white ">
			<img src={img} alt="Serviço" className="w-full h-[200px] object-cover" />
			<div className="p-6">
				<h1 className="lg:text-2xl text-2xl text-[#029cdc] mb-3">{title}</h1>
				<p className="text-sm font-light text-[#5A5A5A]">{desc}</p>
			</div>
		</motion.div>
	);
}

type MotivosProps = {
	motivo: string;
};

function Motivos({ motivo }: MotivosProps) {
	return (
		<div className="bg-white py-3 px-3 lg:px-5 w-full rounded-lg flex items-center gap-3 lg:gap-5">
			<img
				src={check.src}
				alt="Check"
				className="w-[20px] lg:w-[30px] object-cover"
			/>
			<h1 className="text-[#029cdc] text-base 3xl:text-lg ">{motivo}</h1>
		</div>
	);
}

export function Why() {

	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });


	return (
		<div className="w-full flex flex-col items-center gap-10">
			<div className="w-full flex flex-col items-center text-center">
				<span className="w-[100px] h-[5px] bg-[#ffd008] absolute" />
				<h1 className="font-light text-white text-[28px] lg:text-[48px] mt-3">
					Aluguel de máquinas com a {""}
					<span className="font-semibold text-[#ffd008]">Mapa</span>.
				</h1>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
				<Motivos motivo="Zero custos de manutenção" />
				<Motivos motivo="Mecânica especializada" />
				<Motivos motivo="Variedade de máquinas" />
				<Motivos motivo="Máquinas modernas" />
			</div>

			<motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-5 place-items-center container" variants={container} initial="hidden"
    			animate={isInView ? "visible" : "hidden"} ref={ref}>
				{servicos.map((cards, index) => (
					<Card
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
						img={cards.img}
						title={cards.title}
						desc={cards.desc}
					/>
				))}
			</motion.div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
				<div className="bg-white py-3 px-5 w-full rounded-lg flex items-center gap-3 justify-center">
					<img src={phone.src} alt="Check" className="w-[30px] object-cover" />
					<h1 className="text-[#029cdc] text-xl ">27 3251-7999</h1>
				</div>

				<a href="https://www.instagram.com/mapaconstrutoraltda/">
					<div className="bg-white py-3 px-5 w-full rounded-lg flex items-center justify-center gap-3 hover:bg-slate-100 transition-all ease-in-out">
						<img
							src={insta.src}
							alt="Check"
							className="w-[30px] object-cover"
						/>
						<h1 className="text-[#029cdc] text-xl">@mapaconstrutoraltda</h1>
					</div>
				</a>
			</div>
		</div>
	);
}
