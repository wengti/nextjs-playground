
export default function DynamicLayoutMakesSecondStaticChildDynamicPage(){

    console.log('\n---[INFO] Rendering the second supposedly statically rendered child but becoming dynamically rendered because of having a dynamic layout---')

    return (
        <section className='mt-4'>
            <h1>This is clearly a the SECOND statically rendered child</h1>
            <p>However, Having a dynamically rendered layout makes it dynamically rendered.</p>
        </section>
    )
}