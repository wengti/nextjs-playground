import NavLinks from "./nav-links"

export default async function FetchDataInRootLayout() {
    console.log('\n---[INFO] Rendering A Segment in Root Layout that fetches data without cache---')
    console.log('BUILT: The above message should be seen everytime this route is accessed.')
    console.log('DEV: The above message will be seen everytime this route is accessed.')
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/3', { cache: 'no-store' })
    const data = await res.json()

    return (
        <section>
            <section className='mb-4'>
                <h1>Welcome to dynamically rendered page</h1>
                <p>This page involves data fetching with default options</p>
                <p>Since the data is cached after fetching during build time, it becomes a static page.</p>
                <p>The fetched data: {data.id}: {data.title}</p>
            </section>
        </section>
    )
}