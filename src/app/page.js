import Gallery from "./Coponents/Gallery";
import LoveEngagement from "./Coponents/LoveAndEngagement";
import {loveAndEngagementData,GalleryData} from "./Constant";
import './globals.css'
import DashedText from "./Coponents/DashedText";
export default function Home() {
	return (
		<div className="bg-white">
			<DashedText text="eShop" styles="hidden sm:block bg-[#b18846] text-white w-30 px-8 py-2 fixed top-1/2 right-[-40px] transform -translate-y-1/2 rotate-90 shadow-lg hover:bg-white hover:border border-[#b18846] hover:text-gray-500 z-[9999]"/>


			<LoveEngagement  data={loveAndEngagementData}/>
			<Gallery data={GalleryData}/>
		</div>
	);
}
