"use client";

import Image from "next/image";
import { assets } from "@/assets/assets";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error(
        "Missing Web3Forms access key. Please set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env.local",
      );
      setResult("Form configuration error. Please try again later.");
      return;
    }

    formData.append("access_key", accessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-center bg-[length:90%_auto]"
      // style={{ backgroundImage: 'url("/footer-bg-color.png")' }}
    >
      <h4 className="text-center mb-2 text-lg font-Ovo text-gray-700">
        {/* Connect with me */}
      </h4>
      <h2 className="text-center text-5xl font-Ovo">Let’s Connect</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700">
        Please reach out if you have an opportunity or an idea you’d like to
        discuss!
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
        </div>
        <textarea
          name="message"
          rows={6}
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
        ></textarea>
        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
        >
          Submit now{" "}
          <Image
            src={assets.right_arrow_white}
            alt=""
            className="w-4"
            width={16}
            height={16}
          />
        </button>
        <p className="mt-4 text-center text-gray-700">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
