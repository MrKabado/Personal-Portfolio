"use client";
import api from "@/lib/api";
import {
  Mail,
  Phone,
  MessageSquare,
  Clock,
  Github,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { ButtonSubmit } from "@/components/common/Button";

export default function ContactPage() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const ContactInfo = [
    {
      heading: "Email",
      subheading: "jersonjaybonghanoy@gmail.com",
      description: "I usually email you back within an hour.",
      headingIcon: Mail,
      descriptionIcon: MessageSquare,
    },
    {
      heading: "Phone",
      subheading: "+63 991 533 7883",
      description: "I'm available weekdays from 9AM to 6PM",
      headingIcon: Phone,
      descriptionIcon: Clock,
    },
  ];

  const SocialMedia = [
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/bonghanoy-jerson-jay-49b205378/",
    },
    { icon: Github, link: "https://github.com/MrKabado" },
    { icon: Twitter, link: "https://x.com/Jay_zen2004" },
    { icon: Facebook, link: "https://www.facebook.com/jersonjay.bonghanoy" },
  ];


  const HandleSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitted(true);

    if (!fname || !lname || !email || !message) {
      setSubmitted(false);
      return toast.error("All inputs fields are required!");
    }

    try {
      const response = await api.post('/api/admin/add-contact', {
        fname, lname, email, message
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
      toast.error("Error in submitting data " );
      return;
    }
  }

  return (
    <div className="default-div">
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-bold text-[30px]">Let's get in touch!</h1>
        <p className="text-[17px] text-gray-600">
          You can reach me at the following
        </p>
      </div>

      <div className="grid grid-cols-2 my-8 gap-6">
        <div className="flex flex-col gap-4 w-full">
          {ContactInfo.map(
            (
              {
                headingIcon: Icon,
                descriptionIcon: Icon2,
                heading,
                description,
                subheading,
              },
              i,
            ) => (
              <div
                key={i}
                className="bg-[#222223] p-6 rounded-lg flex flex-col gap-3"
              >
                <h3 className="flex items-center gap-3 text-gray-200 font-medium text-lg">
                  <Icon className="w-9 h-9 inline-block bg-[#343434] p-2 rounded-md" />
                  {heading}
                </h3>

                <p className="text-gray-300 text-[16px]">{subheading}</p>

                <p className="flex items-center gap-2 text-gray-400 text-sm">
                  <Icon2 className="w-4 inline-block" />
                  {description}
                </p>
              </div>
            ),
          )}

          <div>
            <div className="bg-[#222223] p-6 rounded-lg flex flex-col gap-3">
              <h1 className="flex items-center gap-3 text-gray-200 font-medium text-lg">
                <MessageSquare className="w-9 h-9 inline-block bg-[#343434] p-2 rounded-md" />
                Connect with me
              </h1>

              <div className="grid grid-cols-4 gap-4 mt-2">
                {SocialMedia.map(({ icon: Icon, link }, i) => (
                  <div
                    key={i}
                    className="group border border-gray-600 bg-transparent] py-4 flex items-center justify-center rounded-lg hover:bg-[#333333] transition-all duration-100 cursor-pointer"
                  >
                    <Icon
                      className="w-7 h-7 text-gray-300 opacity-90 transition-all duration-200 group-hover:bg-[#464646] p-1 rounded-md"
                      onClick={() => window.open(link, "_blank")}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between w-full shadow-[0_0_3px_0_rgba(0,0,0,0.2)] rounded-lg p-6">
          <div className="flex flex-col justify-baseline gap-1">
            <h1 className="font-semibold text-lg">Let's get in touch</h1>
            <p className="text-sm text-gray-600">
              Whether you have a project in mind or just want to connect, I'd
              love to hear from you. Feel free to reach out for any inquiries or
              collaborations.
            </p>
          </div>

          <form onSubmit={HandleSubmit} className="my-4 flex flex-col gap-4 justify-between">
            <div className="flex flex-row justify-between gap-4">
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="fname" className="text-sm font-medium text-gray-800">First Name</label>
                <input 
                  type="text" 
                  id="fname" 
                  className="shadow-[0_0_2px_rgba(0,0,0,0.3)] p-2 rounded-md"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="lname" className="text-sm font-medium text-gray-800">Last Name</label>
                <input 
                  type="text" 
                  id="lname" 
                  className="shadow-[0_0_2px_rgba(0,0,0,0.3)] p-2 rounded-md"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  />
              </div>
            </div>

            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="email" className="text-sm font-medium text-gray-800">Email</label>
              <input 
                type="text" 
                id="email" 
                className="shadow-[0_0_2px_rgba(0,0,0,0.3)] p-2 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="message" className="flex gap-2 items-end text-sm font-medium text-gray-800">How can I help you? <span className="inline-block text-xs text-gray-400">Max 500 characters</span></label>
              <textarea 
                cols={30} 
                rows={3} 
                name="message" 
                id="message" 
                className="shadow-[0_0_2px_rgba(0,0,0,0.3)] p-2 rounded-md"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              >
              </textarea>
            </div>

            <ButtonSubmit props={{
              submitted: submitted,
              buttonType: "submit",
              className: "w-full border py-2 rounded-md bg-[#222222] hover:bg-[#333333] cursor-pointer transition duration-100 ease-in-out text-gray-200 font-medium",
              btnOnClick: HandleSubmit,
              btnText: "Submit",
              btnLoadingText: "Submitting"
            }} />
          </form>
        </div>
      </div>
    </div>
  );
}
