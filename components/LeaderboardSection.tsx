"use client";

import React, { useState, useEffect, useCallback } from "react";
import { fetchUsers, ApiUser, User } from "@/api/leaderboard/route";
import { mockUserData } from "@/Data/UserData";
import { AnimatePresence, motion } from "framer-motion";
import Podium from "./Podium";

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
      const fallbackAvatar =
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face&auto=format";
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
      setError(err.message || "Unknown error occurred");
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cover">
        <div className="text-yellow-200 text-xl">Loading the scrolls...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cover">
        <div className="flex items-center space-x-4">
          <div className="text-red-300 text-xl">⚠ Error: {error}</div>
          <button
            onClick={loadUsers}
            className="bg-purple-700 hover:bg-purple-800 text-yellow-100 font-bold py-2 px-4 rounded shadow"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const topThree = users.slice(0, 3);
  const remaining = users.slice(3);

  return (
    <div className="py-10 px-4 bg-cover bg-center min-h-screen">
      <div className="max-w-4xl mx-auto">
        <AnimatePresence>
          {refreshing && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-purple-800 text-yellow-100 px-4 py-2 rounded-full shadow-lg text-sm z-50"
            >
              Refreshing...
            </motion.div>
          )}
        </AnimatePresence>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center font-tan text-white mb-2">
            Top{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 bg-clip-text text-transparent drop-shadow-md">
              Legends
            </span>
          </h1>
          <p className="text-gray-300 text-md md:text-lg font-light mb-4">
            Glory awaits those who rise above all.
          </p>
          <div className="w-34 h-1 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 mx-auto rounded-full shadow-md"></div>
        </div>

        {/* Podium */}
        {topThree.length >= 3 && (
          <Podium topThree={topThree} allUsers={users} />
        )}
        {/* Remaining players */}
        {remaining.length > 0 && (
          <div className="bg-yellow-50/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-yellow-700/40 shadow-inner">
            {remaining.map((user, index) => (
              <div
                key={user.id}
                className="
          flex flex-col sm:flex-row items-center justify-between 
          py-3 sm:py-4 border-b border-yellow-700/30 last:border-b-0 
          hover:bg-yellow-700/10 transition-colors rounded-lg px-2
          gap-3
        "
              >
                <div className="flex items-center space-x-4 w-full sm:w-auto justify-start">
                  <div className="text-yellow-100 text-lg sm:text-xl font-bold w-8 text-center">
                    {index + 4}
                  </div>
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-700 shadow-md flex-shrink-0">
                    <img
                      src={user.avatar}
                      alt={user.gamerTag}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-yellow-100 font-semibold text-lg sm:text-xl font-fantasy truncate max-w-xs">
                    {user.gamerTag}
                  </div>
                </div>
                <div className="text-yellow-200 text-2xl font-bold mt-2 sm:mt-0">
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
