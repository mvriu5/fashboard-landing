
function Quote() {
    return (
        <div className={"px-96 py-32 flex flex-col gap-6 text-4xl leading-relaxed font-semibold text-gray-800"}>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                et dolore magna aliquyam erat, sed diam voluptua. </p>
            <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet.</p>
            <p className={"text-wrap"}>
                <span className={"inline break-words bg-orange-300 indent-2 mr-2 px-2 rounded-md"}>Lorem ipsum dolor sit amet, consetetur </span>
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                et dolore magna aliquyam erat, sed diam voluptua.
            </p>
            <div className={"flex gap-4 justify-end items-center mt-8"}>
                <div className={"rounded-full size-6 bg-blue-400 shadow-sm"}/>
                <p className={"text-xl font-medium text-gray-600 italic"}>Dominic Barth</p>
            </div>
        </div>
)
}

export {Quote}