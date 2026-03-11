import NavLinks from "@/components/nav-links";
import { ReactNode, Suspense } from "react";

export default async function DynamicLayoutMakesStaticChildDynamicLayout({ children }: { children: ReactNode }) {

    console.log('\n---[INFO] Rendering dynamic layout that fetches data and houses a supposedly statically rendered child---')
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/4', { cache: 'no-store' })
    const data = await res.json()

    return (
        <section>
            <h1>Here is a layout that is dynamically rendered, housing a supposed to be statically rendered child.</h1>
            <p>The fetch data is as following: {data.id}: {data.title} </p>
            {children}
            <NavLinks />
        </section>
    )
}