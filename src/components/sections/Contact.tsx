"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import SectionWrapper from "@/components/sections/SectionWrapper";
import TextInput from "../text/TextInput";
import TextArea from "../text/TextArea";
import classNames from "classnames";

export default function Contact() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);

  const clearValues = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
  };

  const handleSubmit = () => {
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID ?? "",
        {
          from_name: `${firstName} ${lastName}`,
          from_email: email,
          from_phone: phoneNumber,
          message: message,
        },
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY ?? ""
      )
      .then(
        (result) => {
          setLoading(false);
          setSent(true);
          clearValues();
        },
        (error) => {
          alert(
            "Woops, there was an issue sending the email. Please try again!"
          );
          setLoading(false);
        }
      );
  };

  const formValid = firstName && lastName && email && message;

  const getButtonText = () => {
    if (sent) return "Sent!";
    if (loading) return "Sending...";
    if (formValid) return "Send";
    if (!formValid) return "Need more info please!";
  };

  return (
    <SectionWrapper id="contact">
      <div className="w-full flex flex-col gap-6">
        <div className="flex gap-6">
          <TextInput
            placeholder="First name"
            value={firstName}
            setValue={setFirstName}
          />
          <TextInput
            placeholder="First name"
            value={lastName}
            setValue={setLastName}
          />
        </div>
        <div className="flex gap-6">
          <TextInput placeholder="Email" value={email} setValue={setEmail} />
          <TextInput
            placeholder="Phone number"
            value={phoneNumber}
            setValue={setPhoneNumber}
          />
        </div>
        <TextArea placeholder="Message" value={message} setValue={setMessage} />
        <div className="flex items-center justify-center">
          <button
            disabled={!formValid || sent || loading}
            className={classNames(
              "text-indigo-800 border border-indigo-800 px-4 py-2 min-w-40 rounded-xl cursor-pointer ",
              {
                "bg-opacity-75 cursor-default ": !formValid,
                "cursor-pointer bg-indigo-800 text-white hover:bg-opacity-50":
                  formValid,
              }
            )}
            onClick={handleSubmit}
          >
            {getButtonText()}
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
