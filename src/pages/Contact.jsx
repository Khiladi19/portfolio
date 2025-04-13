
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { ImSpinner2 } from "react-icons/im";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm("service_bsworrd", "template_0cc0lxp", form.current, "sSFM1jYVehuxKMaZh")
      .then(() => {
        toast.success("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error("FAILED...", error);
        toast.error("Something went wrong. Please try again.");
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 pt-24 px-4"
    >
      <motion.div
        className="max-w-xl w-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Contact Me
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <motion.input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
            variants={fadeInUp}
            transition={{ duration: 0.3 }}
          />
          <motion.input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
            variants={fadeInUp}
            transition={{ duration: 0.35 }}
          />
          <motion.textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
            variants={fadeInUp}
            transition={{ duration: 0.4 }}
          />
          <motion.button
            type="submit"
            disabled={isSending}
            className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition flex items-center justify-center disabled:opacity-60"
            variants={fadeInUp}
            transition={{ duration: 0.45 }}
          >
            {isSending ? (
              <>
                <ImSpinner2 className="animate-spin mr-2 text-lg" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;

