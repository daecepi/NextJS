import Head from 'next/head';
import HeroSinglePages from "../../components/Blocks/HeroTypes/HeroSinglePages";
import SingleTwoCol from "../../components/SinglesComponents/SingleTwoCol/SingleTwoCol";
import Jumble from "../../components/SinglesComponents/Jumble/Jumble";
import Footer from '../../components/Footer/Footer';
import Quote from '../../components/SinglesComponents/Quote/Quote';
import CallOut from '../../components/SinglesComponents/CallOut/CallOut';
import NuumbersSection from '../../components/SinglesComponents/NumbersSection.js/NumbersSection';
import RelatedContent from '../../components/SinglesComponents/RelatedContent/RelatedContent';
import FinalPleaHero from '../../components/SinglesComponents/FinalPleadHero/FinalPleaHero';
import NavigationDefault from '../../components/Navigation/NavigationDefault';

const RealEstateCrm = () => {
    return(
        <>  
            <Head>
                // Responsive meta tag
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                //  bootstrap CDN
            </Head>
            <NavigationDefault></NavigationDefault>
            <HeroSinglePages 
                pageColorcClass='background--real-estate'
                eyebrow='COPPER FOR REAL ESTATE'
                title="A real estate CRM solution that's move-in ready."
                copy='Copper is the leading CRM platform for real estate agents and brokers.'
                imageUrl='/imgs/industry/industry-agency-hero@2x.jpg'

            />
            <SingleTwoCol 
                title='The heart of your business.'
                eyebrow={null}
                description='From commercial real estate to residential, all types of real estate professionals love Copper.'
                linkText='See customer stories'
                linkUrl='/customers'
                imageUrl='/imgs/industry/industry-real-estate-logo.png'
                imageWidth='806'
                imageHeigh='734'
                
            />
            <Jumble
                backgroundColor='eggplant'
                eyebrow='BUILT FOR WORKSPACE'
                title='Copper plus Workspace.'
                copy='Copper is specifically built for Workspace (previousy G Suite), so you can manage and market new listings, drive traffic to open houses, and nurture repeat clients right from your inbox.'
                imageUrl='/imgs/industry/industry-real-estate-IMG-01@2x.png'
                ctaText='Learn More'
                ctaUrl='/g-suite-crm'
            />
            <SingleTwoCol 
                title='Move right in—there’s zero data entry with Copper.'
                eyebrow='goodbye data entry'
                description='It’s the only real estate CRM software that automatically tracks and inputs every communication—leads, contacts, account details, emails, and more.'
                linkText='See how Howzer grew their real estate agent team'
                linkUrl='/blog/advoc8-agency-case-study'
                imageUrl='/blog/houwzer-case-study'
                imageWidth='1150'
                imageHeigh='1112'
                imagePosition='left'
            />
            <SingleTwoCol 
                title='Every little detail, 100% organized.'
                eyebrow='REAL ESTATE PROCESSES'
                description='Copper lets you build multiple customized processes to track everything you need along the real estate sales funnel - MLS postings, presale construction upgrades, staging hires, and open house schedules.'
                linkText='Watch how Reali strengthens relationships.'
                linkUrl='/blog/reali-case-study'
                imageUrl='/imgs/industry/industry-real-estate-IMG-03@2x.png'
                imageWidth='1344'
                imageHeigh='1082'
                imagePosition={null}
            />
            <SingleTwoCol 
                title='Manage your listings from anywhere.'
                eyebrow='mobile CRM'
                description='Copper’s Android and iOS apps give you the power of a desktop right in your hand: Keep in touch with clients, add notes, manage your calendar. It’s all there.'
                linkText='How this Remax realtor utilizes Copper on the road'
                linkUrl='/blog/remax-realtor-copper-piesync'
                imageUrl='https://copper.objects.frb.io/imgs/industry/real-estate-crm/industry-real-estate-IMG-04@2x-migration.png'
                imageWidth='1800'
                imageHeigh='2184'
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

export default RealEstateCrm;