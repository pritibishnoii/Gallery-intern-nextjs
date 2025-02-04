import Gallery from "./Coponents/Gallery";
import LoveEngagement from "./Coponents/LoveAndEngagement";
import {loveAndEngagementData,GalleryData} from "./Constant";
import './globals.css'
import DashedText from "./Coponents/DashedText";
export default function Home() {
	return (
		<div className="bg-white">
			<DashedText text="eShop" styles="bg-yellow-700 text-white w-28 px-8 py-2 absolute top-1/2 right-4 transform -translate-y-1/2"/>
			<LoveEngagement  data={loveAndEngagementData}/>
			<Gallery data={GalleryData}/>
		</div>
	);
}
