import { useRouter } from "next/router";
import HeroSignUpForm from "./HeroTypes/HeroSignUpForm";

const HeroBlock = ({hero}) => {

    const { query } = useRouter();

    if(hero.displaySignupForm == true){
        return(
            <HeroSignUpForm 
                signupSide = {hero.signupSide}
                text = {hero.richText}
                containerBg={hero.backgroundColor} 
            />
        )
    }
    return null;
        // {query.name}

}

export default HeroBlock;