import NavLinks from "@/components/nav-links";
import { ReactNode } from "react";

export default async function DynamicLayoutMakesStaticChildDynamicLayout({children}: {children: ReactNode}){

    console.log('\n---[INFO] Rendering Dynamic Layout that fetches data and houses a supposedly staically rendered child---')
    console.log('BUILT: The above message should be seen first time this route is accessed, afterwards it will no longer be seen unless it got unmounted and remounted')
    console.log('DEV: The above message will be seen everytime this route is accessed.')
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/4', {cache: 'no-store'})
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