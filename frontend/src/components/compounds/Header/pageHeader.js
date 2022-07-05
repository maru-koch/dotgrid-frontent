import classes from './pageHeader.module.css'
const PageHeader=props=>{
    return (
        <div class = {classes.header}>
            <h2>{props.title}</h2>
        </div>
    )
}

export default PageHeader