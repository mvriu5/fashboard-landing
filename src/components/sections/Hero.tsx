import Image from "next/image"

function Hero() {
    return (
        <div className={"flex px-72 pb-32 gap-8"}>
            <div className={"flex flex-col gap-8 w-3/5"}>
                <p className={"font-bold text-6xl text-gray-900"}>Lorem ipsum dolor sit</p>
                <p className={"text-xl text-gray-900"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>

                <Image src={"/download_badge.png"} alt={"download badge"} height={100} width={300} className={"mt-4 -ml-2"}/>
            </div>
            <Image src={"/iphone_mockup.png"} alt={"iphone"} height={700} width={500} className={"-mt-12 w-2/5"}/>
        </div>
    )
}

export { Hero }