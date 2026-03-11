import NavLinks from "@/components/nav-links"

type PropsType = {
    params: Promise<{
        id: string
    }>
}

export default async function DynamicID({params}: PropsType){

    
    const {id} = await params
    
    console.log(`---[INFO] Rendering Dynamic ID page for [id] of ${id}`)

    return (
        <section className='my-4'>
            <h1>This is section for Dynamic ID: [{id}] </h1>
            <NavLinks />
        </section>
    )
}