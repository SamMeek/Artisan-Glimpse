"use client";

import Image from "next/image";
import React from "react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export function ProductsListings() {
    const words = [
        {
            text: "Beautiful",
            className: "text-black dark:text-white",
        },
        {
            text: "Arts",
            className: "text-black dark:text-white",
        },
        {
            text: "Are",
            className: "text-black dark:text-white",
        },
        {
            text: "Coming",
            className: "text-blue-500 dark:text-blue-500",
        },
        {
            text: "Soon.",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];
    return (
        <>
            <div className="flex flex-col items-center justify-center h-[40rem]  ">
                <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
                    The road to freedom starts from here
                </p>
                <TypewriterEffectSmooth words={words} />
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                    <Drawer>
                        <DrawerTrigger asChild>
                            <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
                                Join the Waitlist
                            </button>
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader className="justify-center items-center">
                                <DrawerTitle className="flex justify-center items-center">Join The Waitlist!</DrawerTitle>
                                <DrawerDescription>By Joining the waitlist you will get a notification about Artisan Glimpse</DrawerDescription>
                            </DrawerHeader>
                            <DrawerFooter>
                                <div className="flex justify-center items-center space-x-2">
                                    <input type="email" className="px-2 border-2 border-black dark:border-white h-9 w-1/2 rounded-md" />
                                    <Button className="w-48">Submit</Button>
                                    <DrawerClose>
                                        <Button variant="outline" className="w-48">Cancel</Button>
                                    </DrawerClose>
                                </div>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </>
    );
}