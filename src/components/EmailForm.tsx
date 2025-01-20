import { useState, useRef} from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { style } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const EmailForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [from, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setForm({...from, [name]: value });
  }

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send("service_ln9qag8",
      "template_wz9tvjj",
      {
        from_name: from.name,
        to_name: 'Chandan Kumar',
        from_email: from.email,
        to_mail: 'kumarnchandan05@gmial.com',
        message: from.message,
      },
      "KYfFXhFvS917vsVx_"
    ).then(() => {
      setLoading(false);
      alert('Thank you!. I will get back to you soon.');

      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, (error) => {
      setLoading(false);
      console.error(error);
      alert('Something went wrong. Please try again.');
    })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={style.sectionSubText}>Get in touch</p>
        <h3 className={style.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Your Name</span>
            <input
              type="text"
              name="name"
              value={from.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="py-4 px-6 bg-tertiary placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Your Email</span>
            <input
              type="email"
              name="email"
              value={from.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="py-4 px-6 bg-tertiary placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={from.message}
              onChange={handleChange}
              placeholder="What's do want to say?"
              className="py-4 px-6 bg-tertiary placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-4 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

const WrappedEmailForm =SectionWrapper(EmailForm, "contact");
export default WrappedEmailForm;