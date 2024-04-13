"use client";
import React from "react";
import {
    TextRevealCard,
    TextRevealCardDescription,
    TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

export function About() {
    return (
        <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] w-full">
            <TextRevealCard
                text="You draw your Dream"
                revealText="We will value your skills "
            >
                <TextRevealCardTitle>
                    Sometimes, you just need to draw it.
                </TextRevealCardTitle>
                <TextRevealCardDescription>
                    Artisan Glimpse will be the best friend for you as you are the chosen one.
                </TextRevealCardDescription>
            </TextRevealCard>
        </div>
    );
}
