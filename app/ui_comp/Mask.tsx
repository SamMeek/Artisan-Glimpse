'use client'
import { useEffect, useRef } from 'react';
import styles from './Mask.module.css'

export default function Mask() {

    const container = useRef<HTMLDivElement>(null);
    const stickyMask = useRef<HTMLDivElement>(null);
    const initialMaskSize = .8;
    const targetMaskSize = 30;
    const easing = 0.15;
    let easedScrollProgress = 0;

    useEffect(() => {

        requestAnimationFrame(animate)

    }, [])



    const animate = () => {
        if (!stickyMask.current) return; // Add null check

        const maskSizeProgress = targetMaskSize * getScrollProgress();

        stickyMask.current.style.webkitMaskSize = (initialMaskSize + maskSizeProgress) * 50 + "%";

        requestAnimationFrame(animate);
    }



    const getScrollProgress = (): number => {
        if (!stickyMask.current || !container.current) return 0;

        const scrollProgress = stickyMask.current.offsetTop / (container.current.getBoundingClientRect().height - window.innerHeight);

        const delta = scrollProgress - easedScrollProgress;

        easedScrollProgress += delta * easing;

        return easedScrollProgress
    };

    return (
        <main className={styles.main}>
            <div ref={container} className={styles.container}>
                <div ref={stickyMask} className={styles.stickyMask}>
                    <video autoPlay muted loop>
                        <source src="/video.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </main>
    )
}