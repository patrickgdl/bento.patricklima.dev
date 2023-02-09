import { motion } from "framer-motion";

const IntroCard = ({ section }) => {
  return (
    <motion.div
      className="col-span-3 md:col-span-2 bg-white dark:bg-gray-900
			 rounded-3xl text-gray-600 dark:text-gray-300 aspect-2/1 pb-4 md:pb-0"
      whileHover="groupHover"
      animate={{ opacity: ["all"].includes(section) ? 1 : 1 }}
      variants={{
        groupHover: {
          scale: 1.01,
          transition: {
            duration: 0.1,
            ease: "easeInOut",
          },
        },
      }}
    >
      <div className="relative overflow-hidden">
        <div className="text-2xl md:text-4xl 2xl:mt-16 m-6 md:ml-6 ml-5 md:m-8 text-slate-900 dark:text-white font-dmSans font-bold">
          Hi, I&apos;m Patrick!
        </div>

        <div className="flex flex-col ml-5 justify-center 2xl:mt-10 sm:-mt-6 sm:ml-8 md:ml-6 font-bold">
          <div className="lg:text-xl 2xl:mr-20 font-dmSans text-slate-600 dark:text-gray-300">
            Frontend UI developer interested in design, AI and JavaScript
            frameworks.
          </div>

          <div className="flex lg:text-xl font-dmSans text-slate-600 dark:text-gray-300 mt-5">
            Working at
            <a
              className="mx-1 underline-offset-2 underline focus:outline-none"
              href="https://c6bank.com.br"
              rel="noreferrer"
              target="_blank"
            >
              C6 Bank
            </a>
            — the best digital bank in Brazil.
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default IntroCard;
