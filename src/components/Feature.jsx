import Button from '../UI/Button/Button';
import analytics from '../assets/analytics.png';
import cloud from '../assets/cloud.png';
import team from '../assets/team.png';

const Feature = () => {
	return (
		<section className="padding-x padding-y center_container">
			<div className=" flex flex-col gap-[50px] sm:gap-[70px]">
				<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
					<h1 className=" max-w-[330px] text-[30px] sm:text-[50px] font-semibold text-textBlack2">
						Our Features you cab get.
					</h1>
					<p className=" max-w-[460px] text-sm sm:text-[18px] font-medium text-textGray leading-[25px] sm:leading-[30px]">
						We offer a variety of interesting features that you can help
						increase yor productivity at work and manage your projrct esaly.
					</p>
					<div>
						<Button
							text="Get Started"
							className=" px-[20px] sm:px-[30px] py-[14px] sm:py-[20px] rounded-[40px]"
						/>
					</div>
				</div>
				{/* Bottom Part */}
				<div className=" flex flex-col sm:flex-row justify-between gap-5">
					<div className=" flex flex-col gap-2 sm:gap-5">
						<img src={team} alt="teamImage" />
						<h3 className="text-textBlack2 text-[25px] sm:text-[30px] font-semibold leading-[30px]">
							Collboration Teams{' '}
						</h3>
						<p className="text-textGray text-base sm:text-lg font-medium leading-[25px] sm:leading-[30px] max-w-[340px]">
							Here you can handle projects together with team virtually.
						</p>
					</div>
					<div className=" flex flex-col gap-2 sm:gap-5">
						<div className=" bg-purple-100/20 rounded-[18px] py-[45px]">
							<img src={cloud} alt="cloudImage" />
						</div>
						<h3 className="text-textBlack2 text-[25px] sm:text-[30px] font-semibold leading-[30px]">
							Cloud Storage
						</h3>
						<p className="text-textGray text-base sm:text-lg font-medium leading-[25px] sm:leading-[30px] max-w-[340px]">
							No nedd to worry about storage because we provide storage up to 2
							TB.
						</p>
					</div>
					<div className=" flex flex-col gap-2 sm:gap-5">
						<img src={analytics} alt="analyticsImage" />
						<h3 className="text-textBlack2 text-[25px] sm:text-[30px] font-semibold leading-[30px]">
							Daily Analytics{' '}
						</h3>
						<p className="text-textGray text-base sm:text-lg font-medium leading-[25px] sm:leading-[30px] max-w-[340px]">
							We always provide useful informatin to make it easier for you
							every day.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Feature;
