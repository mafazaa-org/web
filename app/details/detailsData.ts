import { CenterSectionProps } from "mafazaa-react-ui/dist/src/components/CenterSection";
import skilledImg from "@/assets/skilled.jpg";
import nonskilledImg from "@/assets/top-view-islamic-new-year-concept.jpg";

const detailsData: detailsDataType = {
	skilled: {
		title: "انضم لفريق العمل",
		textColor: "#f2f2f2",
		backgroundImage: skilledImg,
		buttons: [
			{
				text: "يجب أن تنضم للمجتمع أيضا",
				backgroundOrBorderColor: "#60148c",
				fill: true,
				link: process.env.NEXT_PUBLIC_HOST + "/comm",
			},
			{
				text: "املأ الاستبيان",
				backgroundOrBorderColor: "#18cad3",
				fill: true,
				link: process.env.NEXT_PUBLIC_HOST + "/joinform",
			},
		],
		description: "استخدم مهاراتك للمساهمة في مشاريع دعوية تخدم الناس",
	},
	"non-skilled": {
		title: "انضم للمجتمع",
		textColor: "#f2f2f2",
		backgroundImage: nonskilledImg,
		buttons: [
			{
				text: "اضغط هنا",
				backgroundOrBorderColor: "#18cad3",
				fill: true,
				link: process.env.NEXT_PUBLIC_HOST + "/comm",
			},
		],
		description: "انضم للمجتمع و ادعمنا بطرق شتى",
	},
};

export default detailsData;

export type detailsDataType = {
	[isSkilled: string]: CenterSectionProps;
};
