import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, animate } from 'framer-motion';

const CountUp = ({ end, duration = 3, suffix = '' }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const isInView = useInView(ref, { once: true, margin: "-100px", amount: 0.5 });

    useEffect(() => {
        if (isInView) {
            const controls = animate(motionValue, end, {
                duration: duration,
                ease: "easeOut"
            });
            return controls.stop;
        }
    }, [isInView, end, duration, motionValue]);

    useEffect(() => {
        const unsubscribe = motionValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest) + suffix;
            }
        });
        return unsubscribe;
    }, [motionValue, suffix]);

    return <span ref={ref}>0{suffix}</span>;
};

export default CountUp;
