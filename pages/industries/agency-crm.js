import Head from 'next/head';
import HeroSinglePeges from "../../components/Blocks/HeroTypes/HeroSinglePages";
import SingleTwoCol from "../../components/SinglesComponents/SingleTwoCol/SingleTwoCol";
import Jumble from "../../components/SinglesComponents/Jumble/Jumble";

const AgencyCrm = () => {
    return(
        <>  
            <Head>
                // Responsive meta tag
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                //  bootstrap CDN
                <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
                crossorigin="anonymous" 
                />
                {/* <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
                crossorigin="anonymous"></script> */}
            </Head>
            <HeroSinglePeges pageColorcClass='agency'/>
            <SingleTwoCol 
                title='900+ digital and creative agencies, big and small, love Copper.'
                linkText='See customer stories'
                linkUrl='/customers'
                imageUrl='/industries/industry-agency-logo-cloud@2x.png'
            />
            <Jumble />
        </>
    )
}

export default AgencyCrm;