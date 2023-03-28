
import { SolarStats } from '../../components/compounds'
import {HeaderDisplay,WhyAnalytics, Services, Subscribe, OurPartners, OffGrid} from '../../components/compounds'
import { PageLayout } from '../../layout'

export const Home=()=>{
    // home page
    return(
       
        <PageLayout>
             <p className='text-2xl bg-slate-600'></p>
            <HeaderDisplay />
            <Services />
            <WhyAnalytics/>
            <SolarStats/>
            <Subscribe />
            <OurPartners /> 
        </PageLayout>
    )
}

