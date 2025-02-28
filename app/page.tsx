"use client"
import { useState } from "react";
import { AiOutlineCopy } from "react-icons/ai";

export default function Home() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getQuote = () => {
    fetch('https://quotes-api-self.vercel.app/quote')
      .then(response => response.json())
      .then(data => {
        // Handle the retrieved quote
        setQuote(data.quote);
        console.log(data);
        setAuthor(data.author);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(quote).then(() => {
      alert("Quote copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
  }

  return (
    <>
      <div className="md:w-[40%] w-[90%] mx-auto mt-24 py-6 px-8 bg-yellow-400">
        <section className="mt-6">
          <section className="flex flex-row justify-between">
          <span><h1 className="font-bold text-xl">Click the Button to generate random quotes</h1></span>
          <span>
            <AiOutlineCopy size={30} onClick={copyToClipboard} className="cursor-pointer"/>
          </span>
          </section>
          <p className="text-slate-900">{quote}</p>
          <p className="font-bold float-end italic">{author}</p>
          <button className="bg-green-900 font-bold mt-8 w-full text-white py-4 px-2 hover:bg-green-500" onClick={getQuote}>Generate Quote</button>
        </section>
      </div>
    </>
  );
}
