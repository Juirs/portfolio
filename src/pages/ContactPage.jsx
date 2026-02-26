import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm();

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const onSubmit = async (data) => {
    // Validate environment variables
    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS configuration in .env file");
      return;
    }

    try {
      await axios.post("https://api.emailjs.com/api/v1.0/email/send", {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
      });

      reset();
    } catch (error) {
      console.error("Email send error:", error);
    }
  };

  return (
      <div className="bg-linear-to-r from-gray-900 min-h-screen py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-center text-amber-400 mb-6 py-12">
            Get In Touch
          </h1>

          <div className="flex flex-col md:flex-row gap-12">
            {/* Left side */}
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-100 mb-6">Let's Connect</h2>
              <p className="text-gray-300 text-2xl mb-6">
                I'm currently available for freelance work and full-time opportunities.
                Feel free to reach out if you have a project in mind or just want to chat about tech.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-amber-400 mr-4 mt-1">📧</div>
                  <div>
                    <h3 className="text-gray-100 font-medium">Email</h3>
                    <p className="text-gray-300">ahmed.bestun97@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-amber-400 mr-4 mt-1">📱</div>
                  <div>
                    <h3 className="text-gray-100 font-medium">Phone</h3>
                    <p className="text-gray-300">+31683850251</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-amber-400 mr-4 mt-1">📍</div>
                  <div>
                    <h3 className="text-gray-100 font-medium">Location</h3>
                    <p className="text-gray-300">Vienna, Austria</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side (form) */}
            <div className="md:w-1/2">
              <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-gray-700 p-8 rounded-lg border border-amber-900"
              >
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-200 mb-2">
                    Name
                  </label>
                  <input
                      id="name"
                      className="w-full bg-gray-600 border border-amber-900 rounded-md px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-600"
                      placeholder="Your name"
                      {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && <p className="text-red-400">{errors.name.message}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-200 mb-2">
                    Email
                  </label>
                  <input
                      id="email"
                      type="email"
                      className="w-full bg-gray-600 border border-amber-900 rounded-md px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-600"
                      placeholder="Your email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
                      })}
                  />
                  {errors.email && <p className="text-red-400">{errors.email.message}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-200 mb-2">
                    Subject
                  </label>
                  <input
                      id="subject"
                      className="w-full bg-gray-600 border border-amber-900 rounded-md px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-600"
                      placeholder="Subject"
                      {...register("subject", { required: "Subject is required" })}
                  />
                  {errors.subject && <p className="text-red-400">{errors.subject.message}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-200 mb-2">
                    Message
                  </label>
                  <textarea
                      id="message"
                      rows="5"
                      className="w-full bg-gray-600 border border-amber-900 rounded-md px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-600"
                      placeholder="Your message"
                      {...register("message", { required: "Message is required" })}
                  ></textarea>
                  {errors.message && <p className="text-red-400">{errors.message.message}</p>}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-md transition-colors"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {isSubmitSuccessful && (
                    <p className="text-green-400 mt-4">Message sent successfully!</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ContactPage;