import Gallery from "./Coponents/Gallery";
import LoveEngagement from "./Coponents/LoveAndEngagement";
import {loveAndEngagementData,GalleryData} from "./Constant";
export default function Home() {
	return (
		<div className="bg-white">
			
			<LoveEngagement  data={loveAndEngagementData}/>
			<Gallery data={GalleryData}/>
		</div>
	);
}
