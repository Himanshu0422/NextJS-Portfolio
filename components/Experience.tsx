import { FaAndroid, FaReact, FaStripe } from "react-icons/fa";
import { SiExpo, SiFirebase, SiKotlin } from "react-icons/si";

export default function Experience() {
  return (
    <div className="bg card flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black px-4 sm:px-6">
      <div className="p-6 sm:p-8 max-w-lg sm:max-w-3xl rounded-xl shadow-xl bg-[#1a1a1a] hover:shadow-2xl transition duration-500 transform hover:scale-105">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#e3e5c4] mb-2">
          Frontend Developer
        </h2>
        <p className="text-base sm:text-lg text-gray-400">
          enAct eServices Pvt Ltd | Mohali, India
        </p>
        <p className="text-sm text-gray-500 mb-4">May 2024 - Present</p>

        <div className="space-y-4 mb-6">
          <p className="text-gray-300">
            Implemented <b>Brother Print SDK</b> on native Android (
            <b>Kotlin</b>) for a <b>YCombinator startup</b>, integrating it into an{" "}
            <b>Expo</b> app to enable seamless printing.
          </p>
          <p className="text-gray-300">
            Developed and refined mobile UIs with <b>React Native</b>, boosting
            engagement by 20% across iOS and Android platforms.
          </p>
          <p className="text-gray-300">
            Integrated <b>Firebase</b> for real-time data and authentication,
            handling data for 5,000+ users, and incorporated <b>Stripe</b> for
            secure payments.
          </p>
          <p className="text-gray-300">
            Added a subscription modal using <b>RevenueCat</b> to manage
            recurring payments seamlessly.
          </p>
          <p className="text-gray-300">
            Built an admin panel with <b>React.js</b> for managing users and
            chefs, including approving dishes uploaded by chefs.
          </p>
        </div>

        <div className="flex justify-center flex-wrap space-x-4 text-2xl sm:text-3xl text-[#e3e5c4]">
          <FaReact className="hover:text-[#61DBFB] transition duration-300" />
          <SiFirebase className="hover:text-[#FFCA28] transition duration-300" />
          <FaStripe className="hover:text-[#6772E5] transition duration-300" />
          <FaAndroid className="hover:text-[#3DDC84] transition duration-300" />
          <SiKotlin className="hover:text-[#A97BFF] transition duration-300" />
          <SiExpo className="hover:text-[#000020] transition duration-300" />
        </div>
      </div>
    </div>
  );
}
