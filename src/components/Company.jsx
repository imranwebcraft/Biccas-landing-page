import {
	notion,
	unsplash,
	intercom,
	descript,
	grammarly,
} from '../Helper/index';

const Company = () => {
	return (
		<section
			id="company"
			className=" relative center_container padding-x padding-y flex flex-col gap-[16px] sm:gap-[45px] md:gap-[60px]"
		>
			<h2 className=" text-textBlack2 text-[25px] sm:text-[30px] md:text-[40px] font-bold text-center">
				More than 25,000 teams use Collabs
			</h2>
			<div className="flex gap-[20px] z-[1] sm:gap-0 flex-wrap justify-center sm:justify-between items-center">
				<div>
					<img src={unsplash} alt="unsplash" />
				</div>
				<div>
					<img src={notion} alt="notion" />
				</div>
				<div>
					<img src={intercom} alt="intercom" />
				</div>
				<div>
					<img src={descript} alt="descript" />
				</div>
				<div>
					<img src={grammarly} alt="grammarly" />
				</div>
			</div>

			<div className=" absolute z-[0] top-0 right-0 green__gradient w-[30%] h-[30%] rounded-full"></div>
		</section>
	);
};

export default Company;
