import React, { useState } from 'react'
import emailjs from "@emailjs/browser";
import Button from './Button'
import data from '../data';
import Alert from './Alert';

function Suscription() {

  const [formData, setFormData] = useState({ email: ""});
  const [isLoading, setIsLoading] = useState("");
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
        // 2️⃣ Send data to Google Sheets via Apps Script
         let result = await fetch("http://localhost:5000/subscribe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });

      // result = JSON.parse(result)
      const formattedResult = await result.json()

      if (formattedResult.status === "error") {
        setAlert({
          show: true,
          type: "error",
          message: formattedResult.message,
        })
      } else if (formattedResult.status === "duplicate") {
        setAlert({
          show: true,
          type: "error",
          message: formattedResult.message,
        });
      }  else if (formattedResult.status === "success") {
           // 1️⃣ Send email notification via EmailJS
          await emailjs.send(
            data.emailServiceId,
            data.suscriptionEmailTempId,
            formData,
            data.emailPublicId
          );

          setAlert({
            show: true,
            type: "success",
            message: formattedResult.message,
          });
      }
       else {
        setAlert({
          show: true,
          type: "error",
          message: "Something went wrong, try again later!",
         });
      }
      setFormData({ email: "" });
      setIsLoading(false);
      setTimeout(() => setAlert({ ...alert, show: false }), 5000);
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
      setAlert({
        show: true,
        type: "error",
        message: "Sorry, there seems to be a problem. Try again later!",
      });
      setTimeout(() => setAlert({ ...alert, show: false }), 5000);
    }
  };

  return (
    <div id='suscribe' className='flex mt-8 lg:mt-0'>
        <Alert
            type={alert.type}
            message={alert.message}
            show={alert.show}
            onClose={() => setAlert({ ...alert, show: false })}
        />
        <form onSubmit={handleSubmit} className="w-fit flex flex-col items-start">
            <p className="mb-3 text-lg sm:text-xl md:text-2xl text-start font-medium text-gray-50">Suscribe to get updates.</p>
            <div className="relative mb-3.5">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                    </svg>
                </div>
                <input required type="email" value={formData.email} onChange={handleChange} name="email" className="bg-transparent border border-gray-300 text-sm text-white rounded-lg focus:ring-green-500 focus:border-green-500 active:border-green-500 block md:min-w-xs min-[915px]:min-w-sm min-[915px]:w-100 ps-10 p-2.5 placeholder:text-gray-400" placeholder="name@flowbite.com" />
            </div>
            <Button text="Suscribe" isLoading={isLoading} />
        </form>
    </div>
  )
}

export default Suscription