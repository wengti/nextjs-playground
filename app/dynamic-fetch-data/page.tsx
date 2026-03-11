import NavLinks from "@/components/nav-links";

export default async function DynamicFetchDataPage() {

    console.log('\n---[INFO] Rendering Dynamic Page that fetches data---')
    console.log('BUILT: The above message should be seen everytime this route is accessed.')
    console.log('DEV: The above message will be seen everytime this route is accessed.')
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/2', {cache: 'no-store'})
    const data = await res.json()

    return (
        <section>
            <section className='mb-4'>
                <h1>Welcome to dynamically rendered page</h1>
                <p>This page involves data fetching with default options</p>
                <p>Since the data is cached after fetching during build time, it becomes a static page.</p>
                <p>The fetched data: {data.id}: {data.title}</p>
            </section>
            <NavLinks />
        </section>
    )
}