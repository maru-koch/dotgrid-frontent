
import { SolarStats } from '../../components/compounds'
import {HeaderDisplay,WhyAnalytics, Services, Subscribe, OurPartners, OffGrid} from '../../components/compounds'
import { PageLayout } from '../../layout'

export const Home=()=>{
    // home page
    return(
        <PageLayout>
            <HeaderDisplay />
            <Services />
            <WhyAnalytics/>
            <SolarStats/>
            <Subscribe />
            <OurPartners /> 
        </PageLayout>
    )
}

