"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/utils/cn"
import type {ReactNode} from "react"

const Accordion = AccordionPrimitive.Root

interface AccordionItemProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {
    children: ReactNode
    title: string
}
interface AccordionContentProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {}

const AccordionItem = React.forwardRef<React.ComponentRef<typeof AccordionPrimitive.Item>, AccordionItemProps>(({ title, children, className, ...props }, ref) => {
    return (
        <>
            <AccordionPrimitive.Item
                className={cn("", className)}
                ref={ref}
                {...props}
            >
                <AccordionPrimitive.Header
                    className="flex px-4 rounded-t-md data-[state=open]:text-gray-800 data-[state=open]:bg-gray-300/40">
                    <AccordionPrimitive.Trigger
                        className={cn(
                            "flex flex-1 gap-8 items-center justify-between py-4 font-semibold transition-all text-4xl",
                            "[&[data-state=open]>svg]:rotate-180 text-left",
                            className
                        )}
                    >
                        {title}
                        <ChevronDown className="h-6 w-6 shrink-0 transition-transform duration-500"/>
                    </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                {children}
                <div className={"h-2 border-b border-gray-300 mb-4"}/>
            </AccordionPrimitive.Item>
        </>
    )
})
AccordionItem.displayName = AccordionPrimitive.Item.displayName

const AccordionContent = React.forwardRef<React.ComponentRef<typeof AccordionPrimitive.Content>, AccordionContentProps>(({ className, children, ...props }, ref) => {
    return (
        <AccordionPrimitive.Content
            className={cn(
                "overflow-hidden text-2xl data-[state=open]:bg-gray-300/40 px-4 rounded-b-md font-semibold",
                "transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
            )}
            ref={ref}
            {...props}
        >
            <div className={cn("pb-4 pt-0", className)}>
                {children}
            </div>
        </AccordionPrimitive.Content>
    )
})
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export {
    Accordion,
    AccordionItem,
    AccordionContent
}