import Image from "next/image"

function Hero() {
    return (
        <div className={"flex gap-16 px-56 ml-32"}>
            <div className={"flex flex-col gap-4 w-1/2"}>
                <p className={"font-semibold text-5xl text-gray-900"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                <p className={"text-lg text-gray-900"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>

                <Image src={"/download_badge.png"} alt={"download badge"} height={100} width={300} className={"mt-6 -ml-4"}/>
            </div>
            <Image src={"/iphone_mockup.png"} alt={"iphone"} height={1700} width={900} />
        </div>
    )
}

export { Hero }