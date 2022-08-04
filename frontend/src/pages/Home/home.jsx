import { SolarStats } from '../../components/compounds'
import {HeaderDisplay, Services, Subscribe, OurPartners} from '../../components/compounds/Home'
import { PageLayout } from '../../layout'

export const Home=()=>{
    // home page
    return(
        <PageLayout>
            <HeaderDisplay />
            <Services />
            <SolarStats/>
            <Subscribe />
            <OurPartners /> 
        </PageLayout>
    )
}

