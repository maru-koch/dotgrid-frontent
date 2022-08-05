
export const Plan =({plan, features}) =>{
    return (
        <main>
            <Text.Heading>{plan}</Text.Heading>
            {features.map(feature =><ListItem item={feature}/>)}
        </main>
    )
}

