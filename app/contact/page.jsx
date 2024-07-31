'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt, FaPaperPlane } from 'react-icons/fa'
import { motion } from "framer-motion";
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast"

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+91)9307615504'
  },
  {
    icon: <FaEnvelope />,
    title: 'Mail',
    description: 'pushpakninave.jee@gmail.com'
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Address',
    description: 'Bengaluru'
  },
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+91)9307615504'
  }
]
const Contact = () => {
  const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID
  const templateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID

  useEffect(() => {
    emailjs.init('ES09lozmJonkL-3et');
  }, []);

  const { toast } = useToast()

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: 'From [firstname],\n..Text message here..\nThanks,',
  });

  const [lastSubmitted, setLastSubmitted] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      const newFormData = { ...prevData, [name]: value };

      if (name === 'firstname') {
        const updatedMessage = prevData.message.replace(/From .*,/, `From ${value},`);
        newFormData.message = updatedMessage;
      }

      return newFormData;
    });
  };
  const handleTextareaChange = (e) => {
    const { value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      message: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!formData.firstname || !formData.lastname || !formData.email || !formData.phone || !formData.message) {
      toast({
        variant: "destructive",
        title: "Uh oh!",
        description: "Please fill in all fields."
      });
      return;
    }

    const currentTime = Date.now();
    if (currentTime - lastSubmitted < 5000) { // Check if 5 seconds have passed
      toast({
        description: "Please wait 5 seconds before submitting again.",
        duration: 3000, // duration in milliseconds
      });
      return;
    }

    setLastSubmitted(currentTime);

    toast({
      description: "Sending message to pushpak...",
      duration: 5000,
    })

    const templateParamsToSend = {
      from_name: formData.firstname + " " + formData.lastname,
      to_name: 'Pushpak',
      from_email: formData.email,
      from_phone: formData.phone,
      message: formData.message,
    };

    console.log("logging service and template id ---> ", serviceId, templateId);

    emailjs.send(serviceId, templateId, templateParamsToSend)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast({
          description: "Your message has been sent.",
          duration: 5000,
        })
      }, (error) => {
        console.log('FAILED...', error);
      });
  };



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.8, ease: "easeIn" }
      }}
      className="min-h-[80v] flex items-center justify-center py-12 xl:py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-[14px] text-white/60">I'm always open to new opportunities and connections. Drop me a message if you'd like to discuss potential projects or just a friendly hello, don't hesitate to get in touch!</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  value={formData.firstname}
                  onChange={handleInputChange}
                  type="text"
                  name="firstname"
                  placeholder="First name" />
                <Input
                  value={formData.lastname}
                  onChange={handleInputChange}
                  type="text"
                  name="lastname"
                  placeholder="Last name" />
                <Input
                  value={formData.email}
                  onChange={handleInputChange}
                  type="email"
                  name="email"
                  placeholder="Email address" />
                <Input
                  value={formData.phone}
                  onChange={handleInputChange}
                  type="tel"
                  name="phone"
                  placeholder="Phone no." />
              </div>
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                value={formData.firstname ? formData.message : ''}
                onChange={handleTextareaChange}
              />
              <p className="mt-2 text-sm text-gray-500">* Upon submission, your message will be sent to Pushpak's email.</p>
              <Button
                variant="outline"
                type="submit"
                className="max-w-40 flex flex-row gap-2 items-center"
              >
                Send <FaPaperPlane width="30px" height="30px" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact