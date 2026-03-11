import NavLinks from "@/components/nav-links"
import Link from "next/link"

export default function StaticPage(){

    console.log('\n---[INFO] RENDERING STATIC PAGE...---')

    return (
        <section>
            <h1> Welcome to the statically rendered page</h1>
            <NavLinks />
        </section>
    )
}