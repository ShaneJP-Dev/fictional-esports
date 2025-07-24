"use client";

import React from "react";
import { motion } from "framer-motion";
import { User } from "@/api/leaderboard/route";

interface PodiumProps {
  topThree: User[];
  allUsers: User[];
}

const getPodiumOrder = (users: User[]) => {
  if (users.length < 3) return users;
  return [users[2], users[0], users[1]]; // visual order: 3rd, 1st, 2nd
};

const getPodiumHeight = (position: number) => {
  switch (position) {
    case 1:
      return 160;
    case 2:
      return 130;
    case 3:
      return 110;
    default:
      return 80;
  }
};

const Podium: React.FC<PodiumProps> = ({ topThree, allUsers }) => {
  return (
    <div className="flex justify-center items-end mb-16 space-x-6">
      {getPodiumOrder(topThree).map((user, i) => {
        const actualPosition = allUsers.findIndex((u) => u.id === user.id) + 1;
        const isFirst = actualPosition === 1;
        const isSecond = actualPosition === 2;
        const isThird = actualPosition === 3;
        const avatarSize = isFirst ? "w-28 h-28" : "w-20 h-20";

        const borderColor = isFirst
          ? "border-yellow-300"
          : isSecond
          ? "border-gray-300"
          : "border-amber-700";

        return (
          <div key={user.id} className="flex flex-col items-center">
            {isFirst && <div className="text-4xl mb-2">👑</div>}

            {/* Avatar with border ring */}
            <div
              className={`rounded-full border-4 ${borderColor} p-1 spin-on-hover ${avatarSize} overflow-hidden`}
            >
              <img
                src={user.avatar}
                alt={user.gamerTag}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Name */}
            <div className="text-yellow-100 font-bold text-lg my-2 font-fantasy">
              {user.gamerTag}
            </div>

            {/* Podium block */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: getPodiumHeight(actualPosition) }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className={`w-24 flex flex-col justify-center items-center rounded-t-lg shadow-inner border-2 
                ${
                  isFirst
                    ? "bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-400 border-yellow-300"
                    : isSecond
                    ? "bg-gradient-to-b from-gray-300 via-gray-200 to-gray-300 border-gray-200"
                    : "bg-gradient-to-b from-amber-700 via-amber-600 to-amber-700 border-amber-600"
                }`}
            >
              <div
                className={`text-3xl font-bold ${
                  isFirst
                    ? "text-yellow-800"
                    : isSecond
                    ? "text-gray-700"
                    : "text-amber-200"
                }`}
              >
                {user.points}
              </div>
              <div
                className={`text-sm italic ${
                  isFirst
                    ? "text-yellow-800"
                    : isSecond
                    ? "text-gray-700"
                    : "text-amber-200"
                }`}
              >
                Points
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default Podium;
