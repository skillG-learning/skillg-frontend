import MyForm from "../../components/form"
import SkillGText from "./skillgText";
const LandingPage = () => {
    return(
        <div className="flex flex-row justify-around w-[90%]">
            <SkillGText />
            <MyForm />
        </div>
    )
};

export default LandingPage;