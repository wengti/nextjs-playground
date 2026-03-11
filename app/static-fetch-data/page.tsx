import NavLinks from "@/components/nav-links";

export default async function StaticFetchDataPage() {

    console.log('\n---[INFO] Rendering Static Page with Data Fetch---')
    console.log('BUILT: The above message should only be seen during build time')
    console.log('DEV: The above message will be seen everytime this route is accessed.')
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
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