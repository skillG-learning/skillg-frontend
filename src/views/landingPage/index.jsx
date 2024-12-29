import MyForm from "../../components/form"
import SkillGText from "./skillgText";
const LandingPage = () => {
    return (
        <div className="flex mx-[auto] flex-col sm:flex-row justify-around w-[90%]">
            <div>
                <SkillGText />
            </div>
            <div>
                <MyForm />
            </div>
        </div>
    )
};

export default LandingPage;