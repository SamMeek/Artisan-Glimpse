"use client"

import React, { useState, useEffect } from "react";
import styles from "./Footer.module.css"; // Assuming you have a separate CSS file for styling
import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";

const Footer = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;

            if (scrollTop > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
            <div className="w-full">
                <div className="flex items-center justify-between p-3 bg-black/10 dark:bg-white/10 z-10 backdrop-filter backdrop-blur-lg text-white dark:text-black shadow-lg">
                    <ul>
                        <li>
                            <Link href="/">
                                Logo
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Footer;