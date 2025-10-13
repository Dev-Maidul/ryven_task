"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Link = ({ href, children, passHref, ...props }) => (
    <a href={href} {...props}>{children}</a>
);

const ServicesPage = () => {
    

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, 
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10,
                duration: 0.5,
            }
        }
    };

    return (
        <motion.div
            className="flex flex-col items-center justify-center min-h-screen text-white bg-[#121120] p-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Heading: Coming Soon */}
            <motion.h1 
                className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight mb-4 text-[#ff512f] text-center"
                variants={itemVariants}
            >
                COMING SOON
            </motion.h1>

            {/* Subtext */}
            <motion.p 
                className="text-xl sm:text-2xl text-gray-400 mb-10 text-center max-w-lg"
                variants={itemVariants}
            >
                We are crafting the perfect set of services to empower your business. Stay tuned!
            </motion.p>

            {/* Return to Home Button */}
            <motion.div variants={itemVariants}>
                {/* Using the locally defined Link component. passHref is no longer needed here 
                    since the custom Link handles it by ignoring it. */}
                <Link href="/">
                    <motion.button
                        // cursor-pointer class is ensured
                        className="px-8 py-3 text-lg font-semibold rounded-full bg-white text-[#121120] hover:bg-gray-200 transition duration-300 shadow-xl cursor-pointer"
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(255, 81, 47, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Return to Home
                    </motion.button>
                </Link>
            </motion.div>
        </motion.div>
    );
};

export default ServicesPage;
