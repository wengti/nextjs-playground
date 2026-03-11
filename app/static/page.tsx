import NavLinks from "@/components/nav-links"
import Link from "next/link"

export default function StaticPage(){

    console.log('\n---[INFO] RENDERING STATIC PAGE...---')
    console.log('BUILT: The above line should only be run during build time.')
    console.log('DEV: The above line will be run every time the route is accessed.')

    return (
        <section>
            <h1> Welcome to the statically rendered page</h1>
            <NavLinks />
        </section>
    )
}