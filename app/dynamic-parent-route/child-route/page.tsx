import NavLinks from "@/components/nav-links";

export default function ChildRoute(){

    console.log('\n---[INFO] Rendering the child route that is appended to a dynamically rendered parent route---')
    return (
        <section>
            <h1>This is a statically child route, appended to a dynamically rendered parent route.</h1>
            <NavLinks />
        </section>
    )
}