// components/RegistrationForm.tsx
"use client";

import React from 'react';
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Gamepad2, User, Mail, Trophy, Loader2 } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters")
    .max(50, "Full name must not exceed 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Full name can only contain letters and spaces"),
  gamerTag: z.string().min(3, "Gamer tag must be at least 3 characters")
    .max(20, "Gamer tag must not exceed 20 characters")
    .regex(/^[a-zA-Z0-9_-]+$/, "Gamer tag can only contain letters, numbers, underscores, and hyphens"),
  email: z.string().email("Please enter a valid email address").min(1, "Email is required"),
  favouriteGame: z.string().min(1, "Please select your favourite game"),
});

type FormData = z.infer<typeof formSchema>;

export default function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      gamerTag: "",
      email: "",
      favouriteGame: "",
    },
  });

  async function onSubmit(values: FormData) {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // simulate API
    console.log("Registration submitted:", values);
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      form.reset();
    }, 3000);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <h3 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 font-tan">
          Enter the Legends of Victory Cup
        </h3>

        {isSubmitted ? (
          <div className="text-center p-6 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl border border-green-400/30 shadow-lg animate-fade-in-down">
            <Trophy className="w-12 h-12 mx-auto text-green-400 mb-4 animate-bounce-in" />
            <p className="text-2xl font-bold text-white mb-2">Registration Successful!</p>
            <p className="text-green-200">You successfully registered for the tournament.</p>
          </div>
        ) : (
          <>
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-100 font-semibold flex items-center">
                    <User className="w-4 h-4 mr-2 text-yellow-400" />
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Knight, Mage, or Ranger name"
                      {...field}
                      className="bg-slate-700/40 border border-yellow-500/20 text-white placeholder:text-gray-400 focus:border-yellow-400 focus:ring-yellow-400/30 rounded-lg transition-all duration-200"
                    />
                  </FormControl>
                  <FormMessage className="text-red-300" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="gamerTag"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-100 font-semibold flex items-center">
                    <Gamepad2 className="w-4 h-4 mr-2 text-purple-400" />
                    Gamer Tag
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your legendary tag"
                      {...field}
                      className="bg-slate-700/40 border border-purple-500/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/30 rounded-lg transition-all duration-200"
                    />
                  </FormControl>
                  <FormMessage className="text-red-300" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-100 font-semibold flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-green-400" />
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Where we send your summon"
                      {...field}
                      className="bg-slate-700/40 border border-green-500/20 text-white placeholder:text-gray-400 focus:border-green-400 focus:ring-green-400/30 rounded-lg transition-all duration-200"
                    />
                  </FormControl>
                  <FormMessage className="text-red-300" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="favouriteGame"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-100 font-semibold flex items-center">
                    <Trophy className="w-4 h-4 mr-2 text-yellow-400" />
                    Favourite Game
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Legends you battle in"
                      {...field}
                      className="bg-slate-700/40 border border-yellow-500/20 text-white placeholder:text-gray-400 focus:border-yellow-400 focus:ring-yellow-400/30 rounded-lg transition-all duration-200"
                    />
                  </FormControl>
                  <FormMessage className="text-red-300" />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 hover:from-purple-700 hover:via-pink-600 hover:to-yellow-500 text-white font-semibold py-4 text-xl rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Summoning...
                </>
              ) : (
                <>
                  <Trophy className="w-5 h-5 mr-2" />
                  Enlist in the Battle
                </>
              )}
            </Button>
          </>
        )}

        <div className="mt-6 p-3 bg-slate-700/30 rounded-lg border border-yellow-500/20">
          <p className="text-gray-300 text-xs text-center">
            By entering, you accept the tournament terms.
          </p>
        </div>
      </form>
    </Form>
  );
}