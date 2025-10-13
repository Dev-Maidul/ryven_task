"use client";
import React from "react";
import { FaNodeJs, FaReact, FaDatabase, FaCode, FaShieldAlt, FaStripe } from "react-icons/fa";
import { motion } from "framer-motion";

const Framework = () => {
  const frameworks = [
    { icon: <FaNodeJs className="text-4xl text-white" />, title: "Next.js 13", description: "App dir, Routing, Layouts, Loading UI and API routes." },
    { icon: <FaReact className="text-4xl text-white" />, title: "React 18", description: "Server and Client Components. Use hook." },
    { icon: <FaDatabase className="text-4xl text-white" />, title: "Database", description: "ORM using Prisma and PostgreSQL." },
    { icon: <FaCode className="text-4xl text-white" />, title: "Components", description: "UI components built using Radix UI and styled with Tailwind CSS." },
    { icon: <FaShieldAlt className="text-4xl text-white" />, title: "Authentication", description: "Authentication using NextAuth.js and middlewares." },
    { icon: <FaStripe className="text-4xl text-white" />, title: "Subscriptions", description: "Free and paid subscriptions using Stripe." },
  ];

  // Bottom-to-top slide effect
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // start 50px below
    visible: (i) => ({
      opacity: 1,
      y: 0, // slide to natural position
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="text-white p-4 sm:p-6 max-w-[1062px] mx-auto mt-4 border-l border-r border-dashed border-gray-600">
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-center mb-4">
          Frameworks & Tech
        </h1>
        <p className="text-gray-500 mb-8 text-center text-base sm:text-lg md:text-[20px]">
          These are the tools and frameworks with which I feel more comfortable
          without limiting <br />
          myself to them because I have worked with Angular, MySql, Laravel, C++ and many more....
          <br /> My main stack is:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {frameworks.map((fw, i) => (
            <motion.div
              key={i}
              className="border border-gray-500 p-6 rounded-lg text-left cursor-pointer"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                y: -5,
                scale: 1.03,
                boxShadow: "0 10px 20px rgba(255, 81, 47, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-start mb-2">{fw.icon}</div>
              <h2 className="text-xl mb-2 font-bold">{fw.title}</h2>
              <p className="text-white">{fw.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Framework;
