import Head from 'next/head';
import HeroSinglePeges from "../../components/Blocks/HeroTypes/HeroSinglePages";
import SingleTwoCol from "../../components/SinglesComponents/SingleTwoCol/SingleTwoCol";
import Jumble from "../../components/SinglesComponents/Jumble/Jumble";
import Footer from '../../components/Footer/Footer';
import Quote from '../../components/SinglesComponents/Quote/Quote';
import CallOut from '../../components/SinglesComponents/CallOut/CallOut';
import NuumbersSection from '../../components/SinglesComponents/NumbersSection.js/NumbersSection';
import RelatedContent from '../../components/SinglesComponents/RelatedContent/RelatedContent';
import FinalPleaHero from '../../components/SinglesComponents/FinalPleadHero/FinalPleaHero';

const AgencyCrm = () => {
    return(
        <>  
            <Head>
                // Responsive meta tag
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                //  bootstrap CDN
            </Head>
            <HeroSinglePeges pageColorcClass='agency'/>
            <SingleTwoCol 
                title='900+ digital and creative agencies, big and small, love Copper.'
                eyebrow={null}
                description={null}
                linkText='See customer stories'
                linkUrl='/customers'
                imageUrl='/industries/industry-agency-logo-cloud@2x.png'
                imageWidth='806'
                imageHeigh='686'
                
            />
            <Jumble />
            <SingleTwoCol 
                title='Every little detail, 100% organized.'
                eyebrow='CENTRALIZE RELATIONSHIPS'
                description='Creative projects are complex—lots of people, lots of files, lots of opinions. Copper automatically captures and connects everything so nothing falls through the cracks and you can concentrate on creative work, not busy work.'
                linkText='See how Advoc8 does it.'
                linkUrl='/blog/advoc8-agency-case-study'
                imageUrl='https://copper.objects.frb.io/imgs/industry/agencies-crm/industry-agency-IMG-02@2x.png'
                imageWidth='1076'
                imageHeigh='1210'
                imagePosition='left'
            />
            <SingleTwoCol 
                title='Every little detail, 100% organized.'
                eyebrow='CENTRALIZE RELATIONSHIPS'
                description='Creative projects are complex—lots of people, lots of files, lots of opinions. Copper automatically captures and connects everything so nothing falls through the cracks and you can concentrate on creative work, not busy work.'
                linkText='See how Advoc8 does it.'
                linkUrl='/blog/advoc8-agency-case-study'
                imageUrl='https://copper.objects.frb.io/imgs/industry/agencies-crm/industry-agency-IMG-02@2x.png'
                imageWidth='1076'
                imageHeigh='1210'
                imagePosition={null}
            />
            <SingleTwoCol 
                title='Every little detail, 100% organized.'
                eyebrow='CENTRALIZE RELATIONSHIPS'
                description='Creative projects are complex—lots of people, lots of files, lots of opinions. Copper automatically captures and connects everything so nothing falls through the cracks and you can concentrate on creative work, not busy work.'
                linkText='See how Advoc8 does it.'
                linkUrl='/blog/advoc8-agency-case-study'
                imageUrl='https://copper.objects.frb.io/imgs/industry/agencies-crm/industry-agency-IMG-02@2x.png'
                imageWidth='1076'
                imageHeigh='1210'
                imagePosition='left'
            />
            <Quote></Quote>
            <CallOut></CallOut>
            <NuumbersSection></NuumbersSection>
            <RelatedContent></RelatedContent>
            <FinalPleaHero></FinalPleaHero>

            <Footer></Footer>
        </>
    )
}

export default AgencyCrm;