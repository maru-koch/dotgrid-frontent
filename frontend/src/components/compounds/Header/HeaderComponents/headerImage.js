import headerImage from '../../../assets/moi_moi_rice.jpeg'
import classes from './headerImage.module.css'
import Search from '../search/search'
import HeaderInfo from '../headerInfo/headerInfo'


const HeaderImage = () =>{
    return (
    <div class = {classes.headerImage}>
        {/* <img src = {headerImage} alt ='header_image'/> */}
        <div class = {classes.headerDisplay}>
            <HeaderInfo/>
            <Search/>
        </div>
    </div>)
}

export default HeaderImage