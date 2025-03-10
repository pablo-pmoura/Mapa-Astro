import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../../public/logo-mapa.png";
import phone from "../../public/phone.png";

export function Navbar() {
	const [nav, setNav] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};

	const navItems = [
		{ id: 1, text: "Home", link: "/" },
		{ id: 2, text: "Serviços", link: "#services" },
		{ id: 3, text: "Quem somos", link: "#about" },
		{ id: 4, text: "Locação", link: "#why" },
		{ id: 5, text: "Localização", link: "#map" },
	];

	return (
		<div className="bg-[#fafafa] flex justify-between items-center h-24 w-full mx-auto px-4 lg:px-[200px] text-[#029cdc] z-[999] sticky top-0">
			<a href="/">
				<img src={logo.src} alt="Logo Mapa" className="w-[150px]" />
			</a>

			<ul className="hidden md:flex">
				{navItems.map((item) => (
					// biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
					<a href={item.link}>
						<li
							key={item.id}
							className="rounded-xl m-5 cursor-pointer duration-300 hover:text-[#1c4c60]"
						>
							{item.text}
						</li>
					</a>
				))}
			</ul>

			<div className="hidden md:flex border border-[#ffd008] py-3 px-5 rounded-lg">
				<li className="rounded-xl cursor-pointer duration-300 flex items-center font-semibold">
					<span>
						<img src={phone.src} alt="" className="w-[20px] mr-2" />
					</span>
					27 3251-7999
				</li>
			</div>

			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<div onClick={handleNav} className="block md:hidden">
				{nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
			</div>

			<ul
				className={
					nav
						? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-[#ffd008] bg-white ease-in-out duration-500 z-[999]"
						: "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
				}
			>
				{/* Mobile Logo */}
				<img src={logo.src} alt="Penedo Logo" className="w-[150px] py-5 pl-5" />

				{/* Mobile Navigation Items */}
				{navItems.map((item) => (
					// biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
					<a href={item.link}>
						<li
							key={item.id}
							className="p-4 hover:bg-white rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
						>
							{item.text}
						</li>
					</a>
				))}
			</ul>
		</div>
	);
}
