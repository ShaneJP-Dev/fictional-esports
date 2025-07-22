"use client";

import React, { useState, useEffect, useCallback } from "react";
import { fetchUsers, ApiUser, User } from "@/api/leaderboard/route";
import { mockUserData } from "@/Data/UserData";
import { AnimatePresence, motion } from "framer-motion";

const LeaderboardSection: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);



const loadUsers = useCallback(async () => {
  try {
    setRefreshing(true);
    setError(null);
    const apiUsers: ApiUser[] = await fetchUsers();
    const fallbackAvatar = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face&auto=format';
    const mergedUsers: User[] = apiUsers.map((user) => ({
      id: user.id,
      gamerTag: user.username,
      name: user.name,
      email: user.email,
      points: mockUserData[user.username]?.points ?? 0,
      avatar: mockUserData[user.username]?.avatar ?? fallbackAvatar,
    }));
    const sortedUsers = mergedUsers.sort((a, b) => b.points - a.points);
    setUsers(sortedUsers);
  } catch (err: any) {
    setError(err.message || 'Unknown error occurred');
  } finally {
    setRefreshing(false);
    setLoading(false);
  }
}, []);

useEffect(() => {
  loadUsers();
  const interval = setInterval(() => {
    loadUsers();
  }, 30000);

  return () => clearInterval(interval);
}, [loadUsers]);


  const getPodiumOrder = (users: User[]) => {
    if (users.length < 3) return users;
    return [users[2], users[0], users[1]]; // show in order: 1st, 2nd, 3rd
  }

  const getPodiumHeight = (position: number) => {
    switch (position) {
      case 1:
        return 160; // tallest in px
      case 2:
        return 130;
      case 3:
        return 110;
      default:
        return 80;
    }
  };

  const getPodiumGradient = (position: number) => {
    switch (position) {
      case 1:
        return "bg-gradient-to-t from-yellow-600 via-yellow-400 to-yellow-300";
      case 2:
        return "bg-gradient-to-t from-gray-500 via-gray-400 to-gray-300";
      case 3:
        return "bg-gradient-to-t from-amber-700 via-amber-500 to-amber-400";
      default:
        return "bg-gradient-to-t from-gray-600 to-gray-400";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading leaderboard...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-400 text-xl">Error: {error}</div>
        <button
          onClick={loadUsers}
          className="ml-4 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded"
        >
          Retry
        </button>
      </div>
    );
  }
  const topThree = users.slice(0, 3);
  const remaining = users.slice(3);

  return (
    <div className="py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatePresence>
          {refreshing && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-cyan-600 text-white px-4 py-2 rounded-full shadow-lg text-sm z-50"
            >
              Refreshing...
            </motion.div>
          )}
        </AnimatePresence>
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Leaderboard</h1>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        {/* Podium */}
        {topThree.length >= 3 && (
          <div className="flex justify-center items-end mb-16 space-x-6">
            {getPodiumOrder(topThree).map((user, i) => {
              const actualPosition =
                users.findIndex((u) => u.id === user.id) + 1;
              const isFirst = actualPosition === 1;
              const isSecond = actualPosition === 2;
              const isThird = actualPosition === 3;
              const avatarSize = isFirst ? 'w-28 h-28' : 'w-20 h-20';

              return (
                <div key={user.id} className="flex flex-col items-center">
                  {isFirst && <div className="text-3xl mb-2">👑</div>}

                  {/* Avatar */}
                  <div
                    className={`${avatarSize} rounded-full overflow-hidden border-4 border-white shadow-lg ring-4 ${
                      isFirst
                        ? "ring-yellow-400"
                        : isSecond
                        ? "ring-gray-400"
                        : "ring-amber-500"
                    } mb-2`}
                  >
                    <img
                      src={user.avatar}
                      alt={user.gamerTag}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Gamer tag */}
                  <div className="text-white font-bold text-lg mb-2">
                    {user.gamerTag}
                  </div>

                  {/* Animated podium bar */}
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: getPodiumHeight(actualPosition) }}
                    transition={{ duration: 0.8, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className={`w-24 ${getPodiumGradient(
                      actualPosition
                    )} flex flex-col justify-center items-center rounded-t-lg shadow-xl border-2 ${
                      isFirst
                        ? "border-yellow-300"
                        : isSecond
                        ? "border-gray-300"
                        : "border-amber-300"
                    }`}
                  >
                    <div className="text-white text-3xl font-bold">
                      {user.points}
                    </div>
                    <div
                      className={`text-sm italic ${
                        isFirst
                          ? "text-yellow-100"
                          : isSecond
                          ? "text-gray-100"
                          : "text-amber-100"
                      }`}
                    >
                      Points
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        )}

        {/* Remaining players */}
        {remaining.length > 0 && (
          <div className="bg-gray-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30">
            {remaining.map((user, index) => (
              <div
                key={user.id}
                className="flex items-center justify-between py-4 border-b border-gray-600/30 last:border-b-0 hover:bg-gray-600/20 transition-colors rounded-lg px-2"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-white text-xl font-bold w-8 text-center">
                    {index + 4}
                  </div>
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-400 shadow-md">
                    <img
                      src={user.avatar}
                      alt={user.gamerTag}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-white font-semibold text-xl">
                    {user.gamerTag}
                  </div>
                </div>
                <div className="text-white text-2xl font-bold">
                  {user.points}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaderboardSection;
