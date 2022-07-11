import {HeaderDisplay, Services, OffGrid, OffGrid2, Subscribe, OurPartners} from '../../components/compounds/Home'
import { PageLayout } from '../../layout'

export const Home=()=>{
    // home page
    return(
        <PageLayout>
            <HeaderDisplay />
            <Services />
            <OffGrid />
            <OffGrid2 />
            <Subscribe />
            <OurPartners /> 
        </PageLayout>
    )
}

