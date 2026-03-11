import NavLinks from "@/components/nav-links";
import { JSX, ReactNode } from "react";

export default async function HavingADynamicModalInLayoutMakesStaticChildDynamic({children, modal}: {children: ReactNode, modal:ReactNode}){

    console.log('\n---[INFO] Rendering A supposed statically layout that houses a dynamically rendered modal---')
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/4', {cache: 'no-store'})
    const data = await res.json()

    return (
        <section>
            <h1>Here is a layout that is supposed to be statically rendered, but house a dynamically rendered modal</h1>
            <p>The fetch data is as following: {data.id}: {data.title} </p>
            {modal}
            {children}
            <NavLinks />
        </section>
    )
}