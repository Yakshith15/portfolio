import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7umbj75",
        "template_q46d8nt",
        form.current,
        "LlHJ0mnSHZosogWLz"
      )
      .then(
        (result) => {
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex flex-col justify-center items-center relative z-10 pt-10  bg-bg-dark clip-path-polygon">
      <div className="relative flex justify-between items-center flex-col w-full max-w-[1350px] pb-20 gap-3">
        <h2 className="text-4xl text-center font-semibold mt-5 text-text-primary-dark md:mt-3 md:text-3xl">
          Contact
        </h2>
        <p className="text-lg text-center max-w-[600px] text-text-secondary-dark md:mt-3 md:text-base">
          Feel free to reach out to me for any questions or opportunities!
        </p>
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="w-[95%] max-w-[600px] flex flex-col bg-card-dark p-8 rounded-2xl shadow-lg mt-7 gap-3"
        >
          <h3 className="text-2xl mb-1.5 font-semibold text-text-primary-dark">
            Email Me 🚀
          </h3>
          <input
            placeholder="Your Email"
            name="from_email"
            className="flex-1 bg-transparent border border-text-secondary-dark outline-none text-lg text-text-primary-dark rounded-xl p-3 focus:border-primary-dark"
          />
          <input
            placeholder="Your Name"
            name="from_name"
            className="flex-1 bg-transparent border border-text-secondary-dark outline-none text-lg text-text-primary-dark rounded-xl p-3 focus:border-primary-dark"
          />
          <input
            placeholder="Subject"
            name="subject"
            className="flex-1 bg-transparent border border-text-secondary-dark outline-none text-lg text-text-primary-dark rounded-xl p-3 focus:border-primary-dark"
          />
          <textarea
            placeholder="Message"
            rows="4"
            name="message"
            className="flex-1 bg-transparent border border-text-secondary-dark outline-none text-lg text-text-primary-dark rounded-xl p-3 focus:border-primary-dark"
          />
          <input
            type="submit"
            value="Send"
            className="w-full text-center py-4 text-white rounded-[20px] cursor-pointer text-xl font-semibold transition-all duration-200 bg-gradient-to-r from-secondary-dark to-primary-dark hover:scale-105 hover:brightness-110 shadow-xl shadow-bg-dark sm:py-3 sm:text-lg"
          />
        </form>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </div>
    </div>
  );
};

export default Contact;
