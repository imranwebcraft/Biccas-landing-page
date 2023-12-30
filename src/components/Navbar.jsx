import { Link } from 'react-router-dom';
import navlinks from '../Utils';
import Button from '../UI/Button/Button';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<nav>
			<div
				className={` relative block sm:flex items-center center_container py-10`}
			>
				{/* Mobile Hamburger Menu */}
				<div
					onClick={() => setOpen(!open)}
					className="sm:hidden flex justify-center items-center absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer transition-all duration-300"
				>
					{open ? (
						<i className="fi fi-rr-circle-xmark text-xl"></i>
					) : (
						<i className="fi fi-rr-apps text-xl"></i>
					)}
				</div>
				{/* Mobile Nav */}
				{open ? (
					<motion.div
						initial={{ opacity: 0.5, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.2 }}
						className={`absolute z-[10] top-full right-0  flex flex-col justify-start gap-[30px] sm:hidden items-center w-[50%] py-10 rounded-lg bg-green-100 bg-opacity-50 backdrop-blur-xl shadow-md transition-all duration-300`}
					>
						{/* Link - Right part  */}
						<ul className={`flex flex-col gap-5`}>
							{navlinks.map((navLink, i) => (
								<li key={i} className={`link_in_active`}>
									<Link>{navLink.title}</Link>
								</li>
							))}
						</ul>
						{/* Button - Right Part */}
						<div className={`space-y-5`}>
							<div>
								<Link className=" text-textGray text-[16px] font-medium px-[10px] py-[10px] rounded-[10px] border border-transparent hover:bg-primary hover:text-white transition-colors duration-300">
									Login
								</Link>
							</div>

							<Button
								text="Sign Up"
								className=" bg-primary px-[10px] py-[10px] rounded-[10px]"
							/>
						</div>
					</motion.div>
				) : undefined}
				{/* Logo -- Left Part*/}
				<div>
					<Link
						to={'/'}
						className=" text-[50px] text-primary font-semibold leading-[30px]"
					>
						Biccas
					</Link>
				</div>

				{/* Large Device Nav */}
				<div
					className={`hidden flex-1 sm:gap-[80px] lg:gap-[130px] sm:flex justify-end items-center`}
				>
					{/* Link - Right part  */}
					<ul className={`flex gap-10`}>
						{navlinks.map((navLink, i) => (
							<li key={i} className={`link_in_active`}>
								<Link>{navLink.title}</Link>
							</li>
						))}
					</ul>
					{/* Button - Right Part */}
					<div className={` block sm:flex gap-5 items-center`}>
						<div>
							<Link className=" text-textGray text-[16px] font-medium px-[10px] py-[10px] rounded-[10px] border border-transparent hover:bg-primary hover:text-white transition-colors duration-300">
								Login
							</Link>
						</div>
						<Button
							text="Sign Up"
							className=" bg-primary px-[10px] py-[10px] rounded-[10px]"
						/>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
