"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import type React from "react"
import {useEffect, useRef, useState} from "react"
import {cn} from "@/utils/cn"

type NavItem = {
    title: string
    href: string
}

interface TabProps {
    setPosition: React.Dispatch<React.SetStateAction<{ left: number; width: number; opacity: number }>>
    onClick: () => void
    title: string
    textColor?: string
}

function Navbar() {
    const router = useRouter()
    const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 })
    const [isScrolled, setIsScrolled] = useState(false)
    const [darkBackground, setDarkBackground] = useState(false)


    const headerItems: NavItem[] = [
        {title: "Home", href: ""},
        {title: "Product", href: ""},
        {title: "About", href: ""}
    ]



    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 5)
            getPageBackgroundColor()
        }
        window.addEventListener("scroll", handleScroll)

        const getPageBackgroundColor = () => {
            const layer = document.querySelector('#dark-layer')
            const header = document.querySelector('#header')

            if (!layer || !header) {
                setDarkBackground(false)
                return
            }

            const headerBottom = header.getBoundingClientRect().bottom;
            const layerTop = layer.getBoundingClientRect().top;
            const layerBottom = layer.getBoundingClientRect().bottom;

            setDarkBackground(layerTop <= headerBottom && layerBottom >= headerBottom);
        }

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleRoute = (item: NavItem) => {
        if (item.href) router.push(item.href)
        else router.replace("/")
    }

    return (
        <div className={"fixed z-50 w-full overflow-hidden"} id={"header"}>
            <motion.div
                className={cn(
                    "my-4 p-1.5 flex flex-row items-center justify-between top-0 left-0 rounded-md border border-gray-300 shadow-sm",
                    "bg-gray-100/50 backdrop-blur-xl overflow-hidden",
                    darkBackground && "bg-neutral-700/40 border-neutral-700 text-gray-300"
                )}
                initial={{
                    marginLeft: "20rem",
                    marginRight: "20rem",
                }}
                animate={{
                    marginLeft: isScrolled ? "20rem" : "14rem",
                    marginRight: isScrolled ? "20rem" : "14rem",
                }}
                transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                }}
            >
                <motion.div className={cn("flex flex-row space-x-2")}
                            initial={{opacity: 0, filter: 'blur(10px)', y: -30}}
                            animate={{opacity: 1, filter: 'blur(0px)', y: 0}}
                            transition={{duration: 0.65}}
                >
                    <p className={cn("font-bold text-xl ml-2")}>fashboard</p>
                </motion.div>

                <div className={"relative flex flex-row items-center pl-4"}
                     onMouseLeave={() => setPosition({ left: position.left, width: position.width, opacity: 0 })}
                >
                    <div className={"flex flex-row space-x-4"}>
                        {headerItems.map((item) => (
                            <Tab key={item.title}
                                 title={item.title}
                                 setPosition={setPosition}
                                 onClick={() => handleRoute(item)}
                            />
                        ))}
                    </div>
                    <Cursor position={position} darkBackground={darkBackground}/>
                </div>
                <div className={cn(
                        "px-4 py-1 rounded-md hover:bg-gray-300/70 cursor-pointer font-semibold",
                        darkBackground && "hover:bg-neutral-900/50"
                    )}
                >
                    Get the App
                </div>
            </motion.div>
        </div>
    )
}


const Tab: React.FC<TabProps> = ({ setPosition, onClick, title }) => {
    const ref = useRef<HTMLDivElement>(null)

    return (
        <motion.div
            className={cn("relative z-50 px-4 py-1 font-medium text-md rounded-md cursor-pointer")}
            ref={ref}
            onClick={onClick}
            initial={{opacity: 0, filter: 'blur(10px)', y: -30}}
            animate={{opacity: 1, filter: 'blur(0px)', y: 0}}
            transition={{duration: 0.65}}
            onMouseEnter={() => {
                if (!ref?.current) return

                const { width } = ref.current.getBoundingClientRect()

                setPosition({
                    left: ref.current.offsetLeft,
                    width,
                    opacity: 1
                })
            }}
        >
            {title}
        </motion.div>
    )
}

const Cursor: React.FC<{ position: {left: number, width: number, opacity: number}, darkBackground: boolean }> = ({ position, darkBackground }) => {
    return (
        <motion.div
            animate={{...position}}
            className={cn("absolute z-40 h-8 rounded-md bg-gray-300/70", darkBackground  && "bg-neutral-900/50")}
        />
    )
}

export { Navbar }