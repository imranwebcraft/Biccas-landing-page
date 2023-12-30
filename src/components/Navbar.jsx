import { Link } from 'react-router-dom';
import navlinks from '../Utils';
import Button from '../UI/Button/Button';
import { useState } from 'react';
import { motion } from 'framer-motion';
import line from '../assets/greenline.png';
import play from '../assets/Play.png';
import banner from '../assets/hero.png';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className=" relative">
			{/* Navbar */}
			<nav className="z-[1]">
				<div
					className={` relative block sm:flex items-center center_container padding-x py-10 z-[1]`}
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
							className={`absolute z-[10] top-[70%] right-0  flex flex-col justify-start gap-[30px] sm:hidden items-center w-[50%] py-10 rounded-lg bg-green-100 bg-opacity-50 backdrop-blur-md shadow-md transition-all duration-300`}
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
						className={`hidden flex-1 sm:gap-[80px] lg:gap-[130px] sm:flex justify-end items-center z-[1]`}
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
						<div className={` block sm:flex gap-5 items-center z-[1]`}>
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
			{/* Banner */}
			<div className="padding-y padding-x center_container z-[1]">
				<div className="flex gap-5 flex-col sm:flex-row">
					<div className="flex-1 flex flex-col justify-center items-start">
						<h1
							className={` text-textBlack text-[50px] text-center sm:text-left sm:text-[50px] md:text-[80px] font-bold leading-[50px] sm:leading-[70px] md:leading-[90px] mb-[30px]`}
						>
							We’re here to <br className=" hidden sm:block" /> Increase your{' '}
							<br className=" hidden sm:block" />
							Productivity
						</h1>
						<img
							src={line}
							alt="green-line"
							className="w-[479px] h-[100%] sm:mb-[40px] md:mb-[50px] mx-auto sm:mx-0"
						/>
						<p
							className={`max-w-[460px]  text-textBlack mx-auto sm:mx-0 text-center sm:text-left text-base sm:text-[18px] font-medium leading-[25px] sm:leading-[30px] mb-[30px] sm:mb-[40px] md:mb-[50px]`}
						>
							Let&apos;s make your work more organize and easily using the
							Taskio Dashboard with many of the latest featuresin managing work
							every day.
						</p>
						<div className="flex gap-3 sm:gap-5 md:gap-10 w-full justify-center sm:justify-start">
							<Button
								text="Try free trail"
								className=" px-[20px] sm:px-[30px] py-[14px] sm:py-[20px] rounded-[40px]"
							/>
							<button className=" text-textBlack2 text-lg font-medium flex items-center gap-1 sm:gap-2">
								<img src={play} alt="play-image" />
								View Demo
							</button>
						</div>
					</div>
					<div className="flex-1 flex justify-end items-center z-[1]">
						<img src={banner} alt="banner-image" className="" />
					</div>
				</div>
			</div>
			{/* Gradient */}
			<div className=" absolute z-[0] top-0 left-0 green__gradient w-[30%] h-[30%] rounded-full"></div>
			<div className=" absolute z-[0] top-0 right-[10%] pink__gradient w-[50%] h-[40%] rounded-full"></div>
		</header>
	);
};

export default Navbar;
