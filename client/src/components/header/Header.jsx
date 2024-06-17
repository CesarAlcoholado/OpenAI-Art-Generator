import React, { useState } from "react";
import axios from "axios";

export const Header = ({setIsLoading, setListOfImages, setError}) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      let response = await axios.post(
        "https://open-ai-art-generator-seven.vercel.app/openai/images",
        {
          prompt: inputValue,
        }
      );
      setListOfImages(response.data.message.generated_image);
      if (response.data.message.generated_image === "failed to process") setError(true);
    } catch (error) {
      setError(true);
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
      {/* Container */}
      <div className="container mx-auto max-w-5xl px-2 py-6">
        {/* Logo */}
        <p className="block font-bold text-xl font-opensans">
          OpenAi<span className="text-primary">Art</span>
        </p>
        {/* tagline */}
        <div className="mt-14">
          <h2 className="font-bold text-xl max-w-xs mb-1">
            Unleash the power of IA to create stunning images.
          </h2>
          <p className="font-light opacity-80 hidden md:inline-block">
            Created with AI-powered image generation technology.
          </p>
          {/* Form */}
          <form className="relative my-8 max-w-md" onSubmit={handleSubmit}>
            <input
              type="text"
              className="indent-2 py-4 pr-[4.5rem] rounded-sm bg-gray-5- w-full md:max-w-md focus:ring-primary outline-none focus:ring-1"
              placeholder="Unleash the power of IA to create"
              onChange={handleChange}
              value={inputValue}
            />
            <button className="absolute bottom-2.5 right-2.5 bg-primary text-white px-2 py-2 rounded-sm text-sm" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
