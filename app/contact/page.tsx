"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContactPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          body: description,
          userId: Number(userId),
        }),
      });

      if (res.ok) {
        setSent(true);
        setTitle("");
        setDescription("");
        setUserId("");
      }
    } catch (error) {
      console.log("error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-black px-8 py-20 text-white">
        <div className="mx-auto max-w-[600px]">
          <h1 className="mb-10 text-center text-3xl">Contact Us</h1>

          {sent ? (
            <div className="rounded bg-[#111] p-8 text-center">
              <h2 className="mb-4 text-2xl font-semibold">Thank you!</h2>
              <p className="text-white/80">
                Your message has been sent successfully.
              </p>
            </div>
          ) : (
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

              <div>
                <label className="mb-2 block text-sm">User ID</label>
                <input
                  type="number"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  required
                  className="w-full rounded bg-[#111] px-4 py-3 outline-none focus:border focus:border-cyan-400"
                  placeholder="Enter user id"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-4 rounded bg-cyan-400 px-6 py-3 text-black hover:opacity-90 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}