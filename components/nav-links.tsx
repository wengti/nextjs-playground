import Link from "next/link";

export default function NavLinks() {
    return (
        <section className='underline text-violet-400 flex flex-col gap-8'>
            <div className='flex flex-col gap-4'>
                <h1 className='no-underline text-white'>Experiment 1</h1>
                <Link href='/'>Home</Link>
                <Link href='/static'>Go to Statically Rendered Page</Link>
                <Link href='/static-fetch-data'>Go to A Page that fetch data, but still statically rendered</Link>
                <Link href='/dynamic-fetch-data'>Go to A Page that fetch data, but still dynamically rendered</Link>
            </div>

            <div className='flex flex-col gap-4'>
                <h1 className='no-underline text-white'>Experiment 2</h1>
                <Link href='/dynamic-layout-makes-static-child-dynamic'>Go to A Page that has a dynamically rendered layout with a supposedly statically rendered child, but that child becomes dynamically rendered</Link>
                <Link href='/dynamic-layout-makes-static-child-dynamic/second-child'>Go to A Page that has a dynamically rendered layout with the second supposedly statically rendered child, but that child becomes dynamically rendered</Link>
            </div>

            <div className='flex flex-col gap-4'>
                <h1 className='no-underline text-white'>Experiment 3</h1>
                <Link href='/having-a-dynamic-modal-in-layout-makes-static-child-dynamic'>Go to A Page that has a dynamically rendered layout (caused by a dynamic modal) with a supposedly statically rendered child, but that child becomes dynamically rendered</Link>
                <Link href='/having-a-dynamic-modal-in-layout-makes-static-child-dynamic/second-child'>Go to A Page that has a dynamically rendered layout (caused by a dynamic modal) with the second supposedly statically rendered child, but that child becomes dynamically rendered</Link>
            </div>

            <div className='flex flex-col gap-4'>
                <h1 className='no-underline text-white'>Experiment 4</h1>
                <Link href='/dynamic-parent-route'>Go to A Route that is dynamically rendered and has a child route that is appended to it</Link>
                <Link href='/dynamic-parent-route/child-route'>Go to that child route that is appended to it</Link>                
            </div>

            <div className='flex flex-col gap-4'>
                <h1 className='no-underline text-white'>Experiment 5</h1>
                <Link href='/vanilla-dynamic-id/1'>Go to a Vanilla Dynamic Route with an [id] of 1, which does not get stored on any cache</Link>
            </div>

            <div className='flex flex-col gap-4'>
                <h1 className='no-underline text-white'>Experiment 6</h1>
                <Link href='/generate-static-params-dynamic-id/1'>Go to a supposed Dynamic Route (but become statically rendered route due to generateStaticParams), with an [id] of 1, where 1 is not returned by generateStaticParams and is built on request</Link>
                <Link href='/generate-static-params-dynamic-id/2'>Go to a a supposed Dynamic Route (but become statically rendered route due to generateStaticParams), with an [id] of 2, where 2 is returned in generateStaticParams and is built during build time</Link>
            </div>

            <div className='flex flex-col gap-4'>
                <h1 className='no-underline text-white'>Experiment 7</h1>
                <Link href='/empty-generate-static-params-dynamic-id/1'>Go to a supposed Dynamic Route (but become statically rendered route due to generateStaticParams that returns empty array), with an [id] of 1, where 1 is not returned by generateStaticParams and is built on request</Link>
            </div>

        </section>
    )
}