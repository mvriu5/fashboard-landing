
function WhiteBento() {
    return (
        <div>
            <div className={"flex flex-col gap-8 py-32 px-40"}>
                <div className={"flex flex-col gap-4"}>
                    <p className={"text-6xl text-gray-800 font-bold"}>Lorem ipsum dolor sit amet</p>
                    <p className={"text-3xl text-gray-600"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</p>
                </div>

                <div className={"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 auto-rows-[minmax(120px,auto)]"}>
                    <div className={"col-span-4 row-span-4 bg-gray-300/50 rounded-xl"}></div>
                    <div className={"col-span-2 row-span-2 bg-gray-300/50 rounded-xl"}></div>
                    <div className={"col-span-2 row-span-4 bg-gray-300/50 rounded-xl"}></div>
                    <div className={"col-span-2 row-span-2 bg-gray-300/50 rounded-xl"}></div>
                </div>
            </div>
        </div>
    )
}

export {WhiteBento}