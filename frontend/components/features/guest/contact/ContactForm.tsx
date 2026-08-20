"use client";

import { useState } from "react";
import { toast } from "sonner";
import api from "@/lib/api";
import { ButtonSubmit } from "@/components/common/Button";

export default function ContactForm() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const HandleSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitted(true);

    if (!fname || !lname || !email || !message) {
      setSubmitted(false);
      return toast.error("All inputs fields are required!");
    }

    try {
      const response = await api.post("/api/admin/add-contact", {
        fname,
        lname,
        email,
        message,
      });

      if (response) {
        toast.success(response.data.message);

        setFname("");
        setLname("");
        setEmail("");
        setMessage("");
        setSubmitted(false);
      }
    } catch (error) {
      setSubmitted(false);
      console.log(error);
      toast.error("Error in submitting data ");
      return;
    }
  };
  return (
    <div className="flex flex-col justify-between w-full shadow-[0_0_3px_0_rgba(0,0,0,0.2)] rounded-lg p-6">
      <div className="flex flex-col justify-baseline gap-1 mb-4">
        <h1 className="font-semibold text-lg dark:text-gray-200">Reach Out!</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Whether you’re looking to collaborate or just want to chat, I’d love
          to hear from you. Let’s connect and share ideas.
        </p>
      </div>

      <form onSubmit={HandleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row justify-between gap-4 w-full">
          <div className="flex flex-col gap-1 w-full">
            <label
              htmlFor="fname"
              className="text-sm font-medium text-gray-800 dark:text-gray-300"
            >
              First Name
            </label>
            <input
              type="text"
              id="fname"
              className="shadow-[0_0_2px_rgba(0,0,0,0.3)] p-2 rounded-md dark:border dark:border-gray-500"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label
              htmlFor="lname"
              className="text-sm font-medium text-gray-800 dark:text-gray-300"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lname"
              className="shadow-[0_0_2px_rgba(0,0,0,0.3)] p-2 rounded-md dark:border dark:border-gray-500"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-800 dark:text-gray-300"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            className="shadow-[0_0_2px_rgba(0,0,0,0.3)] p-2 rounded-md dark:border dark:border-gray-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor="message"
            className="flex gap-2 items-end text-sm font-medium text-gray-800 dark:text-gray-300"
          >
            How can I help you?{" "}
            <span className="inline-block text-xs text-gray-400">
              Max 500 characters
            </span>
          </label>
          <textarea
            cols={30}
            rows={3}
            name="message"
            id="message"
            className="shadow-[0_0_2px_rgba(0,0,0,0.3)] p-2 rounded-md dark:border dark:border-gray-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <ButtonSubmit
          props={{
            submitted: submitted,
            buttonType: "submit",
            className:
              "w-full border py-2 rounded-md bg-[#222222] hover:bg-[#333333] cursor-pointer transition duration-100 ease-in-out text-gray-200 font-medium dark:bg-[#333333] dark:border-2 dark:border-[#FF9000] dark:text-[#FF9000] dark:hover:bg-[#444444]",
            btnOnClick: HandleSubmit,
            btnText: "Submit",
            btnLoadingText: "Submitting",
          }}
        />
      </form>
    </div>
  );
}
