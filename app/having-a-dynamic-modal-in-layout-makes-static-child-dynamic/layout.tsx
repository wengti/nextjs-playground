import NavLinks from "@/components/nav-links";
import { JSX, ReactNode } from "react";

export default async function HavingADynamicModalInLayoutMakesStaticChildDynamic({children, modal}: {children: ReactNode, modal:ReactNode}){

    console.log('\n---[INFO] Rendering A supposed statically layout that houses a dynamically rendered modal---')
    console.log('BUILT: The above message should be seen first time this route is accessed, afterwards it will no longer be seen unless it got unmounted and remounted')
    console.log('DEV: The above message will be seen everytime this route is accessed.')
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