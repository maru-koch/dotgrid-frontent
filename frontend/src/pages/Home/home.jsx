import {HeaderDisplay, Services, OffGrid, OffGrid2} from '../../components/compounds/Home'
import { PageLayout } from '../../layout'

export const Home=()=>{
    // home page
    return(
        <PageLayout>
            <HeaderDisplay/>
            <Services/>
            <OffGrid/>
            <OffGrid2/>
            {/* <EnergyAnalytics/>
            <Partners/> */}
        </PageLayout>
    )
}

