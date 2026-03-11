import Link from "next/link";

export default function NavLinks(){
    return (
        <section className='underline text-violet-400 flex flex-col gap-8'>
            <Link href='/'>Home</Link>
            <Link href='/static'>Go to Statically Rendered Page</Link>
            <Link href='/static-fetch-data'>Go to A Page that fetch data, but still statically rendered</Link>
            <Link href='/dynamic-fetch-data'>Go to A Page that fetch data, but still dynamically rendered</Link>
            <Link href='/dynamic-layout-makes-static-child-dynamic'>Go to A Page that has a dynamically rendered layout with a supposedly staically rendered child, but that child becomes dynamically rendered</Link>
            <Link href='/dynamic-layout-makes-static-child-dynamic/second-child'>Go to A Page that has a dynamically rendered layout with a supposedly staically rendered child, but that child becomes dynamically rendered</Link>
            <Link href='/having-a-dynamic-modal-in-layout-makes-static-child-dynamic'>Go to A Page that has a dynamically rendered layout (caused by a dynamic modal) with a supposedly staically rendered child, but that child becomes dynamically rendered</Link>
            <Link href='/having-a-dynamic-modal-in-layout-makes-static-child-dynamic/second-child'>Go to A Page that has a dynamically rendered layout (caused by a dynamic modal) with a supposedly staically rendered child, but that child becomes dynamically rendered</Link>
        </section>
    )
}