import Head from 'next/head';
import NavigationDefault from '../components/Navigation/NavigationDefault';
import Footer from '../components/Footer/Footer';
import Image from 'next/image';

import HeroProduct from "../components/Blocks/HeroTypes/HeroProduct";
import CaseStudy from "../components/ProductsComponent/CaseStudy/CaseStudy";
import ProductOneCol from "../components/ProductsComponent/ProductOneCol";
import ProductTwoUp from "../components/ProductsComponent/ProductTwoUp/ProductTwoUp";
import TwoUp from "../components/ProductsComponent/ProductTwoUp/TwoUp";
import ThreeColList from '../components/ProductsComponent/List/ThreeColList';
import ListItem from '../components/ProductsComponent/List/ListItem';
import FinalCta from '../components/ProductsComponent/FinalCta';

const ManageContacts = () => {
    return (
      <>
        <Head>
          // Responsive meta tag
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          // bootstrap CDN
        </Head>
        <NavigationDefault></NavigationDefault>
        <HeroProduct
          backgroundColor="purple"
          eyebrow="ORGANIZE AND MANAGE CONTACTS"
          title="Your scattered contact info— finally organized."
          copy="Copper organizes all your emails, calls, files, and notes for every contact—so you have a full view of that relationship history."
          ctaOneText="Try Free"
          ctaOneUrl="https://www.copper.com/signup"
          ctaTwoText="Request Demo"
          ctaTwoUrl="/demos"
          imageUrl="/imgs/product/191223_Organize_Hero.png"
        />
        <section className="c-single-column product-page">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1 c-single-column__container">
                <div className="c-product-focus__media">
                    <Image src='https://copper.objects.frb.io/imgs/product/manage-contacts/200309_Organize_UI01.png' width='2012' height='1217 '/>
                  
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-7 c-single-column__container pull-to-center">
                <h2>Goodbye spreadsheets.</h2>
                <p>
                  Tired of looking for client info in multiple spreadsheets,
                  digging through emails or wrangling teams for updates? Look no
                  further, Copper organizes all your emails, calls, files, and
                  notes in one place.
                </p>
                <div className="c-single-column__buttons">
                  <a
                    className="c-button sendUTMsToAmplitude"
                    href="https://www.copper.com/signup"
                  >
                    Try Free
                  </a>
                  <a className="c-button c-button--outline" href="/demos">
                    Request Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <ProductOneCol
          title="Get more done—by doing less."
          copy={[
            "Spend your time on the tasks in your selling",
            "process that are actually valuable.",
          ]}
          imageUrl="https://copper.objects.frb.io/imgs/product/manage-contacts/200309_Organize_UI01.png"
        /> */}
        <ProductTwoUp>
          <TwoUp
            eyebrow="SKIP MANUAL DATA ENTRY"
            title="No more wasted time on data entry."
            copy="Copper suggests recent contacts you’ve been emailing to be added to your list so that you don’t lose track of anyone.
            It even automatically pulls in contact details like phone numbers, email addresses, and social media so you can say goodbye to entering that all by hand!"
            imageUrl="/imgs/product/200309_Organize_UI02.png"
            imageWidth="1109"
            imageHeight="1122"
            reverse={false}
          ></TwoUp>
          <TwoUp
            eyebrow="UNDERSTAND YOUR CONTACTS BETTER"
            title="Find key information, faster."
            copy="Tag, filter and sort your leads and customers by any criteria to better understand where your business is coming from. (It helps you target more specific customers and analyze team activity too.)"
            imageUrl="/imgs/product/200309_Organize_UI03.png"
            imageWidth="1069"
            imageHeight="1001"
            bulletLists={[
              "Save lists of contacts by type, like: current customers, partners, VIP clients, etc.",
              "Send targeted communications by industry, geography, company size, and more",
            ]}
            reverse={true}
          ></TwoUp>
        </ProductTwoUp>
        <CaseStudy
          eyebrow="Success Story"
          imageUrl="/imgs/product/sarah-gilbert.png"
          imageWidth="860"
          imageHeight="1040"
          quote={[
            "Copper not only made it easy to centralize all communication but also gave us more transparency and visibility into our business."
          ]}
          quoteby="Sarah Gilbert"
          company="RHR International"
          backgroundColor='purple-rain'
        ></CaseStudy>
        <ProductTwoUp>
          <TwoUp
            eyebrow="VISIBILITY INTO TOUCHPOINTS"
            title="See the whole history of your relationship."
            copy="Get the big picture (and little details) without having to comb through multiple places. Copper tracks and displays a live activity feed of every interaction on your contacts’ profiles."
            imageUrl="https://copper.objects.frb.io/imgs/product/manage-contacts/200309_Organize_UI04.png"
            imageWidth="1086"
            imageHeight="1206"
            reverse={false}
          ></TwoUp>
        </ProductTwoUp>
        <ThreeColList
          title="Build lasting relationships with Copper."
          linkUrl="/features"
          linkText="See all features"
        >
          <div className="col-md-4">
        <h4>Lead Management</h4>
        <p className="p-sm">Turn more leads into customers. Copper makes it easy to build a repeatable lead qualification process to get more deals in the pipe.</p>
      </div>
      <div className="col-md-4">
        <h4>Contact Management</h4>
        <p className="p-sm">Know what you need to for every contact—Copper lets you categorize contacts by type (like current customers, partners, and vendors.)</p>
      </div>
      <div className="col-md-4">
        <h4>Alerts and Notifications</h4>
        <p className="p-sm">Copper sends you real-time notifications that indicate when leads or contacts need your attention.</p>
      </div>

      <div className="col-md-4">
        <h4>Favorites</h4>
        <p className="p-sm">Have super-important accounts? Star them to make sure you get notified about updates.</p>
      </div>
      <div className="col-md-4">
        <h4>Tagging</h4>
        <p className="p-sm">Use tags to group your contacts into different categories (like VIPs, or high-potential leads) so you can find them faster later on.</p>
      </div>
      <div className="col-md-4">
        <h4>Custom Fields</h4>
        <p className="p-sm">Want to track more specific data about your contacts? Add custom fields to record special details that you can use to build better relationships.</p>
      </div>

        <div className="col-md-4">
            <h4>Activity Feed</h4>
            <p className="p-sm">See exactly what’s going on at anytime with the real-time feed of all the activities that are going on with your contacts and accounts.</p>
          </div>
          <div className="col-md-4">
            <h4>Email Open Tracking</h4>
            <p className="p-sm">Easily monitor when a hot lead or customer opens your email so you can send timely follow-ups.</p>
          </div>
          <div className="col-md-4">
            <h4>Auto-enriched Profiles</h4>
            <p className="p-sm">Need more info about your contacts? Copper searches the internet for you to find and record company information, social profiles, and more.</p>
          </div>
        </ThreeColList>
        <FinalCta
          title="Spend less time in your CRM and more time with your contacts."
          copy="Start your 14-day free trial today."
          ctaOneText="Try Free"
          ctaOneUrl="https://www.copper.com/signup"
          ctaTwoText="Request Demo"
          ctaTwoUrl="/demos"
          imageUrl="https://copper.objects.frb.io/imgs/product/manage-contacts/191223_Organize_finalplea.png"
        ></FinalCta>

        <Footer></Footer>
      </>
    );
}

export default ManageContacts