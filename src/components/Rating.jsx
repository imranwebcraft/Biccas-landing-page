import ratingFull from '../assets/5star.png';
import rating4Star from '../assets/4star.png';
import heart from '../assets/heart(2).png';
import analytics from '../assets/pie-chart.png';
import command from '../assets/command.png';

const Rating = () => {
	return (
		<section className=" bg-[#F9F8FE] py-[60px] w-full h-full">
			<div className="center_container padding-x w-full h-full flex flex-col sm:flex-row gap-10 sm:gap-0">
				{/* Left part */}
				<div className="flex-[1.5]">
					<h2 className=" max-w-[615px] text-[30px] sm:text-[50px] font-semibold text-textBlack2 mb-[20px] sm:mb-[30px]">
						How we support our pratner all over the world
					</h2>
					<p className=" max-w-[640px] text-sm sm:text-[16px] font-medium text-textGray leading-[30px] mb-[40px] sm:mb-[60px]">
						SaaS become a common delivery model for many business application,
						including office software, messaging software, payroll processing
						software, DBMS software, management software
					</p>
					<div className=" flex flex-row gap-[50px] sm:gap-[80px]">
						<div className=" flex flex-col gap-[10px]">
							<img
								src={ratingFull}
								alt="5starrating"
								className=" w-[142px] h-[26px]"
							/>
							<p className=" text-[18px] text-textBlack2">
								<span className=" font-bold">4.9</span>/ 5 rating
							</p>
							<p className=" text-textGray font-bold text-[18px]">Databricks</p>
						</div>
						<div className=" flex flex-col gap-[10px]">
							<img
								src={rating4Star}
								alt="5starrating"
								className=" w-[142px] h-[26px]"
							/>
							<p className=" text-[18px] text-textBlack2">
								<span className=" font-bold">4.9</span>/ 5 rating
							</p>
							<p className=" text-textGray font-bold text-[18px]">
								Chainalysis
							</p>
						</div>
					</div>
				</div>
				{/* Right Part */}
				<div className=" flex-[1] flex flex-col gap-[30px]">
					<div className=" flex flex-col sm:flex-row gap-2 sm:gap-5">
						<div className=" px-5 bg-white shadow-lg flex justify-center items-center w-[60px] h-[60px]">
							<img
								src={heart}
								alt="heartImage"
								className=" w-[30px] h-[30px]"
							/>
						</div>
						<div className=" flex flex-col gap-[10px]">
							<h3 className="text-textBlack2 text-xl sm:text-[28px] font-bold">
								Publishing
							</h3>
							<p className=" text-textGray font-medium leading-[25px] sm:leading-[30px] text-lg">
								Plan, collaborate, and publishing your contetn that drivees
								meaningful engagement and growth for your barnd.
							</p>
						</div>
					</div>
					<div className=" flex flex-col sm:flex-row gap-2 sm:gap-5">
						<div className=" p-[15px] bg-white shadow-lg flex justify-center items-center w-[60px] h-[60px]">
							<img
								src={analytics}
								alt="analytics"
								className=" w-[30px] h-[30px]"
							/>
						</div>
						<div className=" flex flex-col gap-[10px]">
							<h3 className="text-textBlack2 text-xl sm:text-[28px] font-bold">
								Analytics
							</h3>
							<p className=" text-textGray font-medium leading-[25px] sm:leading-[30px] text-lg">
								Analyze your performance and create goegeous report.
							</p>
						</div>
					</div>
					<div className=" flex flex-col sm:flex-row gap-2 sm:gap-5">
						<div className=" p-[15px] bg-white shadow-lg flex justify-center items-center w-[60px] h-[60px]">
							<img src={command} alt="command" className=" w-[30px] h-[30px]" />
						</div>
						<div className=" flex flex-col gap-[10px]">
							<h3 className="text-textBlack2 text-xl sm:text-[28px] font-bold">
								Engagement
							</h3>
							<p className=" text-textGray font-medium leading-[25px] sm:leading-[30px] text-lg">
								Quiuckly navigate you anda engage with your adience.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Rating;
