import NavLinks from "@/components/nav-links"

type PropsType = {
    params: Promise<{
        id: string
    }>
}

// Route beside id:2 will still be displayed
export const dynamicParams = true

export async function generateStaticParams(){
    return [{id: '2'}]
}

export default async function DynamicID({params}: PropsType){

    
    const {id} = await params
    
    console.log(`---[INFO] Rendering Supposedly Dynamic but Become Static ID page due to GenerateStaticParams for [id] of ${id}`)

    return (
        <section className='my-4'>
            <h1>This is section for Dynamic ID: [{id}] </h1>
            <NavLinks />
        </section>
    )
}