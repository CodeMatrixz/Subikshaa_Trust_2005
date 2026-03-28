import React from 'react';
import { motion } from 'framer-motion';

const StaggeredHeading = ({ text, className = "" }) => {
    // Split text into words
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    return (
        <motion.h1
            className={className}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.25em" }}
        >
            {words.map((word, i) => (
                <motion.span key={i} variants={item} style={{ display: "inline-block" }}>
                    {word}
                </motion.span>
            ))}
        </motion.h1>
    );
};

export default StaggeredHeading;
