
export default async function ModalPage() {
    console.log('\n---[INFO] Rendering a Dynamically Rendered Modal, Placed in a Statically Rendered Layout---')
    console.log('BUILT: The above message should be seen first time this route is accessed, afterwards it will no longer be seen unless it got unmounted and remounted')
    console.log('DEV: The above message will be seen everytime this route is accessed.')
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/7', { cache: 'no-store' })
    const data = await res.json()

    return (
        <section className='my-4'>
            <h1>Here is a modal that is dynamically rendered, placed inside a supposedly statically rendered layout.</h1>
            <p>The fetch data is as following: {data.id}: {data.title} </p>
        </section>

    )
}