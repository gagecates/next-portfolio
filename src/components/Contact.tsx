"use client";

import React, { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import classNames from "classnames";

export default function Contact() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = () => {
    console.log("submit");
  };

  const formValid = firstName && lastName && email && message;

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
            disabled={!formValid}
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
            {formValid ? "Send!" : "Need more info than that!"}
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
