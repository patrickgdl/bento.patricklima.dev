import { motion } from "framer-motion";
import { ArrowCircleUpIcon } from "@heroicons/react/outline";

const TwitterCard = ({ section }) => {
  return (
    <motion.a
      href="https://twitter.com/opatrickgdl"
      target="_blank"
      rel="noreferrer"
      animate={{
        opacity: ["all", "about", "contact"].includes(section) ? 1 : 0.3,
      }}
      className="flex justify-center items-center bg-white relative dark:bg-slate-900 rounded-3xl col-span-1"
      whileHover="groupHover"
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="136"
        height="109"
        fill="none"
      >
        <path
          d="M121.261 27.088c.082 1.18.082 2.361.082 3.552 0 36.302-27.88 78.17-78.86 78.17v-.022A78.966 78.966 0 0 1 0 96.472a55.967 55.967 0 0 0 41.019-11.386c-11.86-.224-22.26-7.889-25.894-19.08 4.155.795 8.436.632 12.513-.472-12.93-2.59-22.232-13.851-22.232-26.93v-.347a27.726 27.726 0 0 0 12.579 3.438C5.806 33.627 2.053 17.568 9.407 5.012 23.478 22.175 44.24 32.61 66.527 33.714c-2.233-9.542.818-19.541 8.019-26.249 11.163-10.401 28.719-9.868 39.213 1.192a55.91 55.91 0 0 0 17.6-6.67 27.62 27.62 0 0 1-12.183 15.194 55.496 55.496 0 0 0 15.915-4.325 56.04 56.04 0 0 1-13.83 14.232z"
          fill="#F3B743"
        />
        <path
          d="M121.261 27.088c.082 1.18.082 2.361.082 3.552 0 36.302-27.88 78.17-78.86 78.17v-.022A78.966 78.966 0 0 1 0 96.472a55.967 55.967 0 0 0 41.02-11.386c-11.86-.224-22.26-7.889-25.894-19.08 4.155.795 8.436.632 12.514-.472-12.93-2.59-22.233-13.851-22.233-26.93v-.347a27.726 27.726 0 0 0 12.579 3.438C5.807 33.627 2.053 17.568 9.407 5.012 23.478 22.175 44.24 32.61 66.527 33.714c-2.233-9.542.818-19.541 8.019-26.249 11.163-10.401 28.719-9.868 39.213 1.192a55.91 55.91 0 0 0 17.6-6.67 27.62 27.62 0 0 1-12.183 15.194 55.496 55.496 0 0 0 15.915-4.325 56.041 56.041 0 0 1-13.83 14.232z"
          fill="#F1B43E"
        />
      </svg>
      <ArrowCircleUpIcon className="absolute stroke-gray-200 dark:stroke-gray-700 bottom-0 right-0 m-2 md:m-5 md:mb-5 xl:m-5 rotate-45 mb-2 mr-2 w-8 h-8 lg:w-14 lg:h-14 md:w-10 md:h-10" />
    </motion.a>
  );
};

export default TwitterCard;
