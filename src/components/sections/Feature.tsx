function Feature() {
    return (
        <div className={"flex flex-col gap-16 py-32 px-60"}>
            <p className={"text-6xl text-gray-800 text-center font-bold"}>Lorem ipsum dolor sit</p>

            <div className={"flex gap-16"}>
                <div className={"w-1/2 h-60 p-8 flex flex-col gap-4 rounded-xl bg-gray-300/50"}>
                    <div className={"flex items-center justify-center size-24 bg-gray-100 rounded-lg shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]"}>
                    </div>
                    <p className={"text-gray-800 text-xl font-semibold text-wrap"}>
                        Lorem ipsum dolor
                        <span className={"inline break-words text-gray-400"}> sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</span>
                    </p>
                </div>
                <div className={"w-1/2 h-60 p-8 flex flex-col gap-4 rounded-xl bg-gray-300/50 "}>
                    <div className={"flex items-center justify-center size-24 bg-gray-100 rounded-lg shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]"}>
                    </div>
                    <p className={"text-gray-800 text-xl font-semibold text-wrap"}>
                        Lorem ipsum dolor
                        <span className={"inline break-words text-gray-400"}> sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export {Feature}