import React from "react";
import {
  FaNodeJs,
  FaReact,
  FaDatabase,
  FaCode,
  FaShieldAlt,
  FaStripe,
} from "react-icons/fa";

const Framework = () => {
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
          <div className="border border-gray-500 p-6 rounded-lg text-left">
            <div className="flex justify-start mb-2">
              <FaNodeJs className="text-4xl text-white" />
            </div>
            <h2 className="text-xl mb-2 font-bold">Next.js 13</h2>
            <p className="text-white">
              App dir, Routing, Layouts, Loading UI and API routes.
            </p>
          </div>

          <div className="border border-gray-500 p-6 rounded-lg text-left">
            <div className="flex justify-start mb-2">
              <FaReact className="text-4xl text-white" />
            </div>
            <h2 className="text-xl mb-2">React 18</h2>
            <p className="text-white">
              Server and Client Components. Use hook.
            </p>
          </div>

          <div className="border border-gray-500 p-6 rounded-lg text-left">
            <div className="flex justify-start mb-2">
              <FaDatabase className="text-4xl text-white" />
            </div>
            <h2 className="text-xl mb-2">Database</h2>
            <p className="text-white">ORM using Prisma and PostgreSQL.</p>
          </div>

          <div className="border border-gray-500 p-6 rounded-lg text-left">
            <div className="flex justify-start mb-2">
              <FaCode className="text-4xl text-white" />
            </div>
            <h2 className="text-xl mb-2 font-bold">Components</h2>
            <p className="text-white">
              UI components built using Radix UI and styled with Tailwind CSS.
            </p>
          </div>

          <div className="border border-gray-500 p-6 rounded-lg text-left">
            <div className="flex justify-start mb-2">
              <FaShieldAlt className="text-4xl text-white" />
            </div>
            <h2 className="text-xl mb-2">Authentication</h2>
            <p className="text-white">
              Authentication using NextAuth.js and middlewares.
            </p>
          </div>

          <div className="border border-gray-500 p-6 rounded-lg text-left">
            <div className="flex justify-start mb-2">
              <FaStripe className="text-4xl text-white" />
            </div>
            <h2 className="text-xl mb-2">Subscriptions</h2>
            <p className="text-white">
              Free and paid subscriptions using Stripe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Framework;
