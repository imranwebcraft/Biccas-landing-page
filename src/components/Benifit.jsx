import benifts from '../constant';
import benifitImage from '../assets/benifitImage.png';

const Benifit = () => {
	return (
		<section className=" relative padding-x padding-y center_container">
			<div className=" flex flex-col sm:flex-row gap-5 sm:gap-0 z-[1]">
				<div className=" flex-1">
					<h3 className="max-w-[430px] text-[30px] sm:text-[50px] font-semibold text-textBlack2 mb-[50px]">
						What Benifit Will You Get
					</h3>
					<div className=" flex flex-col gap-[20px] sm:gap-[30px]">
						{benifts.map((item, index) => (
							<div className="relative flex gap-2" key={index}>
								<div className="absolute top-1/2 -translate-y-1/2 w-[30px] h-[30px] rounded-full bg-primary flex justify-center items-center">
									<i className="fi fi-rr-check text-white text-sm flex w-full h-full justify-center items-center"></i>
								</div>
								<p className="text-textBlack2 text-[18px] font-medium leading-[30px] pl-10">
									{item.text}
								</p>
							</div>
						))}
					</div>
				</div>
				<div className=" flex-1 flex justify-end z-[1]">
					<img src={benifitImage} alt="benifit-image" />
				</div>
			</div>
			{/* Gradient */}
			<div className=" absolute z-[0] bottom-0 right-0 green__gradient w-[30%] h-[30%] rounded-full"></div>
			<div className=" absolute z-[0] top-0 left-0 pink__gradient w-[30%] h-[30%] rounded-full"></div>
		</section>
	);
};

export default Benifit;
