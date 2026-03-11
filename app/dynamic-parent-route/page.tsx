import NavLinks from "@/components/nav-links"

export default async function DynamicParent(){

    console.log('\n---[INFO] Rendering a dynamic parent route, which have a supposedly static route appended to it---')
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/10', {cache: 'no-store'})
    const data = await res.json()

    return (
        <section>
            <h1>This is a dynamic parent route, which has a static route appended to it</h1>
            <NavLinks />
        </section>
    )

}