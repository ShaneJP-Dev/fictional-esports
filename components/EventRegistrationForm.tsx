"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Gamepad2, User, Mail, Trophy, CheckCircle, Loader2 } from "lucide-react";

// Form validation schema
const formSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name must not exceed 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Full name can only contain letters and spaces"),
  gamerTag: z
    .string()
    .min(3, "Gamer tag must be at least 3 characters")
    .max(20, "Gamer tag must not exceed 20 characters")
    .regex(/^[a-zA-Z0-9_-]+$/, "Gamer tag can only contain letters, numbers, underscores, and hyphens"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
  favouriteGame: z
    .string()
    .min(1, "Please select your favourite game"),
});

type FormData = z.infer<typeof formSchema>;

const popularGames = [
  "League of Legends",
  "Valorant",
  "Counter-Strike 2",
  "Dota 2",
  "Fortnite",
  "Apex Legends",
  "Overwatch 2",
  "Call of Duty: Warzone",
  "Rocket League",
  "FIFA 24",
  "Minecraft",
  "Among Us",
  "Fall Guys",
  "Other"
];

export default function EventRegistrationForm() {
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
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Registration submitted:", values);
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after successful submission
    setTimeout(() => {
      setIsSubmitted(false);
      form.reset();
    }, 3000);
  }

  if (isSubmitted) {
    return (
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800">
        <div className="max-w-2xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Registration Successful!</h3>
            <p className="text-gray-300 text-lg">
              Welcome to the tournament! Check your email for confirmation details.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Battle</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6" />
          <p className="text-gray-300 text-lg">
            Register now to compete in the ultimate gaming tournament
          </p>
        </div>

        {/* Registration Form */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Full Name */}
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300 font-semibold flex items-center">
                      <User className="w-4 h-4 mr-2 text-blue-400" />
                      Full Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your full name"
                        {...field}
                        className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20 transition-all duration-200"
                      />
                    </FormControl>
                    <FormDescription className="text-gray-400 text-sm">
                      Your real name as it appears on official documents
                    </FormDescription>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              {/* Gamer Tag */}
              <FormField
                control={form.control}
                name="gamerTag"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300 font-semibold flex items-center">
                      <Gamepad2 className="w-4 h-4 mr-2 text-purple-400" />
                      Gamer Tag
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your gamer tag"
                        {...field}
                        className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/20 transition-all duration-200"
                      />
                    </FormControl>
                    <FormDescription className="text-gray-400 text-sm">
                      Your in-game display name (3-20 characters, letters, numbers, _, -)
                    </FormDescription>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300 font-semibold flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-green-400" />
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        {...field}
                        className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-gray-400 focus:border-green-400 focus:ring-green-400/20 transition-all duration-200"
                      />
                    </FormControl>
                    <FormDescription className="text-gray-400 text-sm">
                      We'll send tournament updates and confirmation to this email
                    </FormDescription>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              {/* Favourite Game */}
              <FormField
                control={form.control}
                name="favouriteGame"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300 font-semibold flex items-center">
                      <Trophy className="w-4 h-4 mr-2 text-yellow-400" />
                      Favourite Game Title
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-slate-700/50 border-slate-600/50 text-white focus:border-yellow-400 focus:ring-yellow-400/20 transition-all duration-200">
                          <SelectValue placeholder="Select your favourite game" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-slate-800 border-slate-600">
                        {popularGames.map((game) => (
                          <SelectItem 
                            key={game} 
                            value={game}
                            className="text-white hover:bg-slate-700 focus:bg-slate-700"
                          >
                            {game}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription className="text-gray-400 text-sm">
                      This helps us understand our community better
                    </FormDescription>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white font-semibold py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Registering...
                  </>
                ) : (
                  <>
                    <Trophy className="w-5 h-5 mr-2" />
                    Register for Tournament
                  </>
                )}
              </Button>
            </form>
          </Form>

          {/* Terms Notice */}
          <div className="mt-6 p-4 bg-slate-700/30 rounded-lg border border-slate-600/30">
            <p className="text-gray-400 text-sm text-center">
              By registering, you agree to the tournament rules and conditions. 
              <br />
              Check your email for confirmation and further instructions.
            </p>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-32 right-20 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60" />
      <div className="absolute bottom-40 left-16 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse opacity-70" />
      <div className="absolute top-60 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-50" />
    </section>
  );
}