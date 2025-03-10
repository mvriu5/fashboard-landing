function Footer() {
    return (
        <div className={"p-6 pb-0 grid grid-cols-5 gap-16 h-60 text-white/90 bg-neutral-900"}>
            <div className={"pl-4 font-bold"}>
                fashboard
            </div>

            <div className={"pt-2 flex flex-col gap-4"}>
                <h2 className={"font-bold mb-2"}>Company</h2>
                <p className={"text-gray-400 text-sm underline cursor-pointer"}>Test</p>
                <p className={"text-gray-400 text-sm underline cursor-pointer"}>Test</p>
                <p className={"text-gray-400 text-sm underline cursor-pointer"}>Test</p>
            </div>

            <div className={"pt-2 flex flex-col gap-4"}>
                <h2 className={"font-bold mb-2"}>Products</h2>
                <p className={"text-gray-400 text-sm underline cursor-pointer"}>Test</p>
                <p className={"text-gray-400 text-sm underline cursor-pointer"}>Test</p>
                <p className={"text-gray-400 text-sm underline cursor-pointer"}>Test</p>
            </div>

            <div className={"pt-2 flex flex-col gap-4"}>
                <h2 className={"font-bold mb-2"}>Support</h2>
                <p className={"text-gray-400 text-sm underline cursor-pointer"}>Test</p>
                <p className={"text-gray-400 text-sm underline cursor-pointer"}>Test</p>
                <p className={"text-gray-400 text-sm underline cursor-pointer"}>Test</p>
            </div>

            <div className={"pt-2 flex flex-col gap-4"}>
                <h2 className={"font-bold mb-2"}>Legal</h2>
                <p className={"text-gray-400 text-sm underline cursor-pointer"}>Test</p>
                <p className={"text-gray-400 text-sm underline cursor-pointer"}>Test</p>
                <p className={"text-gray-400 text-sm underline cursor-pointer"}>Test</p>
            </div>
        </div>
    )
}

export {Footer}