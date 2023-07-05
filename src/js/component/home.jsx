
import InputBar from "./input";
import BottomPart from "./bottomPart";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Header/>
			<div className="notepad mt-3 mx-auto container">
				<div className="row">
				<InputBar/>
			</div>
			</div>

		</div>
	);
};

export default Home;
