'use client';
import { useEffect, useRef, useState } from 'react';
import { useTransform, useScroll, motion, MotionValue } from 'framer-motion';
import styles from './Gallery.module.scss';
import Lenis from '@studio-freight/lenis';

const images = [
    "/images/pic1.jpg",
    "/images/pic2.jpg",
    "/images/pic3.jpg",
    "/images/pic4.jpg",
    "/images/pic5.jpg",
    "/images/pic6.jpg",
    "/images/pic7.jpg",
    "/images/pic8.jpg",
    "/images/pic9.jpg",
    "/images/pic10.jpg",
    "/images/pic11.jpg",
    "/images/pic12.jpg",
    "/images/pic13.jpg",
    "/images/pic14.jpg",
    "/images/pic15.jpg",
    "/images/pic16.jpg",
    "/images/pic17.jpg",
    "/images/pic18.jpg",
    "/images/pic19.jpg",
    "/images/pic20.jpg",
    "/images/pic21.jpg",
    "/images/pic22.jpg",
    "/images/pic23.jpg",
    "/images/pic24.jpg",
]

export default function Gallery() {

    const gallery = useRef(null);

    const [dimension, setDimension] = useState({ width: 0, height: 0 });



    const { scrollYProgress } = useScroll({

        target: gallery,

        offset: ['start end', 'end start']

    })

    const { height } = dimension;

    const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2])

    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])

    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])

    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

    useEffect(() => {
        const lenis = new Lenis();

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        const resize = () => {

            setDimension({ width: window.innerWidth, height: window.innerHeight })

        }



        window.addEventListener("resize", resize)

        requestAnimationFrame(raf);

        resize();



        return () => {

            window.removeEventListener("resize", resize);

        }
    }, []);

    return (
        <main className={styles.main}>
            {/* <div className={styles.spacer}></div> */}
            <div className={styles.gallery}>
                <div className={styles.galleryWrapper}>
                    <Column images={[images[0], images[1], images[2], images[12], images[13], images[14]]} y={y1} />
                    <Column images={[images[3], images[4], images[5], images[15], images[16], images[17]]} y={y2} />
                    <Column images={[images[6], images[7], images[8], images[18], images[19], images[20]]} y={y3} />
                    <Column images={[images[9], images[10], images[11], images[21], images[22], images[23]]} y={y4} />
                </div>
            </div>
            <div className={styles.spacer}></div>
        </main>
    )
}

interface ColumnProps {
    images: string[];
    y: MotionValue<number>
}

const Column = ({ images, y }: ColumnProps) => {
    return (
        <motion.div
            className={styles.column}
            style={{ y }}
        >
            {
                images.map((src, i) => {
                    return <div key={i} className={styles.imageContainer}>
                        <img
                            src={src}
                            alt='image'
                        />
                    </div>
                })
            }
        </motion.div>
    )
}
function setDimension(arg0: { width: number; height: number; }) {
    throw new Error('Function not implemented.');
}