
function Bento() {
    return (
        <div className={"flex flex-col gap-16 px-90 py-32 bg-neutral-900"} id={"dark-layer"}>
            <div className={"flex flex-col gap-4 w-1/2"}>
                <p className={"text-2xl text-white/90"}>Lorem ipsum dolor sit amet</p>
                <p className={"text-gray-400"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
            </div>
            <div className={"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 auto-rows-[minmax(120px,auto)]"}>
                <div className={"col-span-2 row-span-3 bg-neutral-800/30 rounded-xl shadow-sm"}></div>
                <div className={"col-span-2 row-span-2 bg-neutral-800/30 rounded-xl shadow-sm"}></div>
                <div className={"col-span-2 row-span-1 bg-neutral-800/30 rounded-xl shadow-sm"}></div>
                <div className={"col-span-4 row-span-2 bg-neutral-800/30 rounded-xl shadow-sm"}></div>
            </div>
        </div>
    )
}

export {Bento}