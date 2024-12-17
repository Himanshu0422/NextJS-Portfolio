import emailjs from "@emailjs/browser";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineSend,
} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [lastSentTime, setLastSentTime] = useState<number | null>(null);
  const cooldownPeriod = 60000;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const now = Date.now();
    if (lastSentTime && now - lastSentTime < cooldownPeriod) {
      animateButton(e);
      return;
    }

    sendEmail(e);
    setLastSentTime(now);
    animateButton(e);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY!,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_KEY!
        )
        .then(
          () => {
            toast.success(
              "Thanks for reaching out! I'll get back to you soon."
            );
          },
          (error) => {
            toast.error("Oops! Something went wrong. Please try again later.");
            console.error("EmailJS Error:", error.text);
          }
        );

      form.current.reset();
    }
  };

  const animateButton = (e: React.FormEvent<HTMLFormElement>) => {
    const button = e.currentTarget.querySelector("button");
    const tl = gsap.timeline();

    tl.to(button, { scale: 0.95, duration: 0.1 })
      .to(button, { scale: 1.05, duration: 0.1 })
      .to(button, { scale: 1, duration: 0.2, ease: "power2.out" });

    // Add ripple effect
    const ripple = document.createElement("div");
    ripple.style.position = "absolute";
    ripple.style.borderRadius = "50%";
    ripple.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    button?.appendChild(ripple);

    const rect = button?.getBoundingClientRect();
    const size = Math.max(rect!.width, rect!.height);
    ripple.style.width = ripple.style.height = `${size * 2}px`;

    gsap.fromTo(
      ripple,
      {
        left: "50%",
        top: "50%",
        xPercent: -50,
        yPercent: -50,
        scale: 0,
        opacity: 1,
      },
      {
        scale: 1,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => ripple.remove(),
      }
    );
  };

  return (
    <div className="bg min-h-screen bg-[#0A0A0F] p-8 flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-indigo-600 to-violet-500 opacity-20 rounded-full transform translate-x-16 -translate-y-16 blur-2xl absolute-bg"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tl from-fuchsia-600 to-rose-500 opacity-20 rounded-full transform -translate-x-16 translate-y-16 blur-2xl absolute-bg"></div>

      <div
        id="container"
        className="w-full max-w-6xl bg-[#111116] rounded-2xl shadow-2xl shadow-black/50 p-4 md:p-12 relative backdrop-blur-sm"
      >
        <div className="relative grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div id="title" className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Let's Work{" "}
                <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                  Together
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-400 max-w-md">
                Have a project in mind? Get in touch<span className="max-sm:hidden"> and let's create something
                extraordinary.</span>
              </p>
            </div>

            {/* Email and Phone links */}
            <div className="space-y-6">
              {/* Email Link */}
              <a
                href="mailto:himanshumittal035@gmail.com"
                className="contact-card block p-4 md:p-6 bg-[#16161D] rounded-xl hover:bg-gradient-to-r hover:from-indigo-500/10 hover:to-violet-500/10 transition-all duration-500"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-lg max-sm:hidden">
                    <AiOutlineMail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-medium text-white">
                      himanshumittal035@gmail.com
                    </p>
                  </div>
                </div>
              </a>

              {/* Phone Link */}
              <a
                href="tel:+916280341384"
                className="contact-card block p-4 md:p-6 bg-[#16161D] rounded-xl hover:bg-gradient-to-r hover:from-fuchsia-500/10 hover:to-rose-500/10 transition-all duration-500"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-fuchsia-500 to-rose-500 rounded-lg max-sm:hidden">
                    <AiOutlinePhone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="font-medium text-white">+91 6280341384</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Social Icons */}
            <div id="social-icons" className="flex space-x-4">
              <a
                href="https://github.com/himanshu0422"
                target="_blank"
                className="p-4 bg-[#16161D] rounded-xl hover:bg-[#1D1D25] transition-all duration-300 hover:scale-150"
              >
                <AiOutlineGithub className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/himanshumittal035/"
                target="_blank"
                className="p-4 bg-[#16161D] rounded-xl hover:bg-[#1D1D25] transition-all duration-300 hover:scale-150"
              >
                <AiOutlineLinkedin className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://leetcode.com/u/himanshu1571"
                target="_blank"
                className="p-4 bg-[#16161D] rounded-xl hover:bg-[#1D1D25] transition-all duration-300 hover:scale-150"
              >
                <SiLeetcode className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            id="form"
            ref={form}
            onSubmit={handleSubmit}
            className="space-y-6 hidden lg:block"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#16161D] border-2 border-[#232329] rounded-xl focus:bg-[#1D1D25] focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all duration-300 text-white placeholder-gray-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  name="to_email"
                  type="email"
                  className="w-full px-4 py-3 bg-[#16161D] border-2 border-[#232329] rounded-xl focus:bg-[#1D1D25] focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all duration-300 text-white placeholder-gray-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  maxLength={200}
                  name="message"
                  className="w-full h-32 px-4 py-3 bg-[#16161D] border-2 border-[#232329] rounded-xl focus:bg-[#1D1D25] focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all duration-300 text-white placeholder-gray-500"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold rounded-xl transform hover:scale-105 transition-transform duration-300 inline-flex items-center justify-center"
            >
              <AiOutlineSend className="w-5 h-5 mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
