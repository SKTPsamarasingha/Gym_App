import blair_before from "/src/assets/images/socialProof/blair-agan-before.jpg";
import blair_after from "/src/assets/images/socialProof/blair-agan-after.jpg";

import michael_before from "/src/assets/images/socialProof/michael_morrissey-before.jpg";
import michael_after from "/src/assets/images/socialProof/michael_morrissey-after.jpg";

import molly_before from "/src/assets/images/socialProof/molly-eledge-before.jpg";
import molly_after from "/src/assets/images/socialProof/molly-eledge-after.jpg";

import dan_before from "/src/assets/images/socialProof/dan-illi-before.jpg";
import dan_after from "/src/assets/images/socialProof/dan-illi-after.jpg";

export const quickLinks = [
  {
    title: "Quick Links",
    links: [
      {
        text: "Hypertrophy App",
        to: "#",
      },
      {
        text: "Diet Coach App",
        to: "#",
      },
      {
        text: "Hypertrophy Training Guide",
        to: "#",
      },
      {
        text: "Dr. Mike Israetel Bio",
        to: "#",
      },
      {
        text: "Hypertrophy App User Login",
        to: "#",
      },
    ],
  },
];

export const about = [
  {
    title: "About Us",
    links: [
      {
        text: "Our Story",
        to: "#",
      },
      {
        text: "Privacy Policy",
        to: "#",
      },
      {
        text: "Terms of Service",
        to: "#",
      },
      {
        text: "Careers",
        to: "#",
      },
    ],
  },
];

// Support array
export const support = [
  {
    title: "Support",
    links: [
      {
        text: "Visit Our Help Center",
        to: "#",
      },
      {
        text: "Refund Policy",
        to: "#",
      },
    ],
  },
];

export const plansData = [
  {
    id: "beginner",
    name: "Beginner",
    price: 150,
    period: "Month",
    currency: "$",
    borderColor: "border-p_red",
    features: [
      "Free gym class for month",
      "Basic equipment access",
      "Locker room facilities",
      "2 personal training sessions",
    ],
    buttonText: "Select Plan",
    popular: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: 250,
    period: "Month",
    currency: "$",
    borderColor: "border-green-500",
    features: [
      "All Beginner features",
      "Unlimited group classes",
      "Pool & sauna access",
      "5 personal training sessions",
      "Nutrition consultation",
    ],
    buttonText: "Most Popular",
    popular: true,
  },
  {
    id: "elite",
    name: "Elite",
    price: 400,
    period: "Month",
    currency: "$",
    borderColor: "border-yellow-500",
    features: [
      "All Pro features",
      "Unlimited personal training",
      "Premium locker",
      "Guest passes included",
      "Custom meal plans",
      "Priority booking",
    ],
    buttonText: "Go Elite",
    popular: false,
  },
];

export const cardData = [
  {
    name: "Blair Agan",
    before: blair_before,
    after: blair_after,
    title: "It helped me level up",
    quote:
      "It helped me level up I used the RP Diet app for six months to prep for my first bodybuilding show, dropping from 205 to 172 lbs with smart, sustainable nutrition guided by RP’s adaptive AI. As a coach who also consults on nutrition, I was impressed by how the app adjusted macros based on sleep, training, and recovery — it’s like having a coach and educator in your pocket. RP didn’t just help me get lean — it helped me level up as an athlete and a professional.",
  },
  {
    name: "Michael Morrissey",
    before: michael_before,
    after: michael_after,
    title: "The results will speak for themselves",
    quote:
      "Take all of the guess work out of your diet. The RP Diet App does all the leg work and all you have to do is log the food and stay within the suggested macros. The results will speak for themselves as long as you stay consistent!",
  },
  {
    name: "Molly Eledge",
    before: molly_before,
    after: molly_after,
    title: "Absolute game changer",
    quote:
      "The RP Diet Coach app has been an absolute game changer for my nutrition over the last 5+ years. From competitive Crossfit, to weightlifting, and now into motherhood, I have relied on RP to guide me in feeling (and looking!) my best. I love that the app truly acts as a personalized diet coach - from the macros, to the reminders, to the check-ins. It's a tool that eliminates the guesswork, and easily allows me to prioritize my health in a very chaotic season of life. I can't recommend the RP Diet App enough!",
  },
  {
    name: "Dan Illi",
    before: dan_before,
    after: dan_after,
    title: "Incredible Results",
    quote:
      "Incredible Results TWas turning 50 and needed to change my life! I quit drinking, started to eat right and started working out. I'm 52 now. Lost the weight then started working out real hard 6 months ago. Just at least 15 grams of creatine a day and at least 250 grams of protein a day.",
  },
];

export const reviews = [
  {
    username: "Weight Training Enthusiast",
    rating: 4,
    text: "This app is amazing! I am so glad that I pulled the trigger and got the app. It truly has elevated my workouts and helped me get the best of my weight training.",
  },
  {
    username: "Mike's Follower",
    rating: 3,
    text: "Absolutely loving the app. Since getting to know Mike through the channel it was a gradual decision to subscribe to the app. Really enjoying the automated adjustments from workout to workout.",
  },
  {
    username: "Former Standard Tracker User",
    rating: 5,
    text: "Great app, I've been using just a standard workout tracker for years, total game changer this. Even if you know how to program this takes all of the stress and work of planning it all yourself.",
  },
  {
    username: "Successful Dieter",
    rating: 4,
    text: "This is, by far, the best diet app I have ever used. I lost 16 lbs in just over a month.",
  },
  {
    username: "Busy Professional",
    rating: 5,
    text: "It makes everything so easy. My favorite feature is that it notifies you when you need to eat and tells you exactly how much to eat so there is never any confusion. It makes bulking and cutting so much easier while having a busy life outside of the gym.",
  },
];
