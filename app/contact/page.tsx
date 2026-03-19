"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContactPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log({ title, description });

    alert("Message sent!");

    setTitle("");
    setDescription("");
  };

  return (
    <>
      <Navbar />

      <section className="bg-black px-8 py-20 text-white min-h-screen">
        <div className="mx-auto max-w-[600px]">
          <h1 className="mb-10 text-center text-3xl">Contact Us</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="mb-2 block text-sm">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full rounded bg-[#111] px-4 py-3 outline-none focus:border focus:border-cyan-400"
                placeholder="Enter title"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                rows={5}
                className="w-full rounded bg-[#111] px-4 py-3 outline-none focus:border focus:border-cyan-400"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-4 rounded bg-cyan-400 px-6 py-3 text-black"
            >
              Send Message
            </button>

          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}