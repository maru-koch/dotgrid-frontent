
export const SectionHeader = ({bg, title, subtitle})=>{
    return (
    <div className = "text-center p-10">
        <h2 className="text-titleColor text-4xl font-openSans font-bold">{title}</h2>
        <h4 className="texl-2xl font-poppins font-light">{subtitle}</h4>
    </div>
    )
}

