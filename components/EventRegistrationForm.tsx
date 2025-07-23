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
import {
  Gamepad2,
  User,
  Mail,
  Trophy,
  CheckCircle,
  Loader2,
} from "lucide-react";

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
    .regex(
      /^[a-zA-Z0-9_-]+$/,
      "Gamer tag can only contain letters, numbers, underscores, and hyphens"
    ),
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
  favouriteGame: z.string().min(1, "Please select your favourite game"),
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
  "Other",
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
    await new Promise((resolve) => setTimeout(resolve, 2000));

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
            <h3 className="text-2xl font-bold text-white mb-4">
              Registration Successful!
            </h3>
            <p className="text-gray-300 text-lg">
              Welcome to the tournament! Check your email for confirmation
              details.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="event-registration"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      {/* Main Content - Centered */}
      <div className="max-w-2xl mx-auto">
        {/* Section Header - Centered */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center font-tan">
  Join the{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
    Battle
  </span>
</h2>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6" />
          <p className="text-gray-300 text-lg text-center mx-auto max-w-md">
            Register now to compete in the ultimate gaming tournament
          </p>
        </div>

        {/* Form Section */}
        <div className="relative bg-[url('/images/scroll-texture.png')] bg-cover bg-center backdrop-blur-md border border-yellow-500/30 rounded-3xl p-8 shadow-[0_0_30px_rgba(128,0,128,0.4)]">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              {/* Title with gradient */}
              <h3 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 font-tan">
  Enter the Tournament Scroll
</h3>

              {/* Full Name */}
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

              {/* Gamer Tag */}
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

              {/* Email */}
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

              {/* Favourite Game as Input */}
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

              {/* Submit Button */}
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
            </form>
          </Form>

          {/* Terms Notice */}
          <div className="mt-6 p-3 bg-slate-700/30 rounded-lg border border-yellow-500/20">
            <p className="text-gray-300 text-xs text-center">
              By entering, you accept the tournament scroll's ancient terms.
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
