import axios from "axios";
import { useMemo } from "react";
import useSWR from "swr";
import { motion } from "framer-motion";
import { isAfter, add } from "date-fns";

import NightComponent from "./NightComponent";
import DayComponent from "./DayComponent";

const TimeCard = ({ section }) => {
  const { data, isLoading } = useSWR(`/api/time`, (url) =>
    axios.get(url).then((res) => res.data)
  );

  const [sunriseTime, sunsetTime] = useMemo(() => {
    if (!data) return [null, null];

    return [new Date(data.results.sunrise), new Date(data.results.sunset)];
  }, [data]);

  const timeComponent = useMemo(() => {
    if (!data) return null;

    if (isAfter(new Date(), add(sunsetTime, { hours: 1 }))) {
      return <NightComponent />;
    }

    if (isAfter(new Date(), sunriseTime)) {
      return <DayComponent />;
    }

    return <NightComponent />;
  }, [data]);

  return (
    <motion.div
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
      animate={{
        opacity: section && ["all", "about"].includes(section) ? 1 : 0.3,
      }}
      className={`text-white rounded-3xl flex relative overflow-hidden aspect-square`}
    >
      {timeComponent}
    </motion.div>
  );
};

export default TimeCard;
