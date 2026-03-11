
export default function DynamicLayoutMakesSecondStaticChildDynamicPage(){

    console.log('\n---[INFO] Rendering the second supposedly statically rendered child but becoming statically rendered because of having a dynamic parent---')
    console.log('BUILT: The above message should be seen everytime this route is accessed.')
    console.log('DEV: The above message will be seen everytime this route is accessed.')

    return (
        <section className='mt-4'>
            <h1>This is clearly a the SECOND statically rendered child</h1>
            <p>However, Having a dynamically rendered layout makes it dynamically rendered.</p>
        </section>
    )
}