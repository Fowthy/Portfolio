import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas2 } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    errorname: false,
    erroremail: false,
    errormessage: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    // setForm({
    //   ...form,
    //   [name]: value,
    // });
    switch (name) {
      case "name":
        if(value.length <= 1) {
          setForm({
            ...form,
            [name]: value,
            errorname: true
          })
        } else {
          setForm({
            ...form,
            [name]: value,
            errorname: false
          })
        }
        break;
      case "email":
        if(!value.includes('@') || value.length <= 1) {
          setForm({
            ...form,
            [name]: value,
            erroremail: true
          })
        } else {
          setForm({
            ...form,
            [name]: value,
            erroremail: false
          })
        }
        break;
      case "message":
        if(value.length <= 3) {
          setForm({
            ...form,
            [name]: value,
            errormessage: true
          })
        } else {
          setForm({
            ...form,
            [name]: value,
            errormessage: false
          })
        }
        break;
      }
  //   console.log(form.message.length, value.length, form.message)
  //   if(form.message.length <= 3 || form.email.length == 0 || form.name.length <= 1 || !form.email.includes('@')) {
  //     setForm({
  //       ...form,
  //       [name]: value,
  //       error: true
  //     })
  //   } else {
  //     setForm({
  //       ...form,
  //       [name]: value,
  //       error: false
  //     })
  //   }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(form.message.length <= 3 || form.email.length == 0 || form.name.length <= 1 || !form.email.includes('@')) {
      setForm({
        ...form,
        errorname: true,
        erroremail: true,
        errormessage: true,
      })
    } else {
      setLoading(true);
  
      emailjs
        .send(
          "portfolio_contact",
          "template_cn1s8c1",
          {
            from_name: form.name,
            to_name: "Alex",
            from_email: form.email,
            // to_email: "alex@rizzii.net",
            message: form.message,
          },
          "GKmCRmJKeUsJDve6W"
        )
       .then(() => {
              setLoading(false);
              alert("Thank you. I will get back to you as soon as possible.");
    
              setForm({
                name: "",
                email: "",
                message: "",
              });
          },
          (error) => {
            setLoading(false);
            console.error(error);
  
            alert("Ahh, something went wrong. Please try again.");
          }
        );
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden justify-center`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.5] bg-black-100 p-8 rounded-2xl justify-center mb-10'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your first and last name?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium ${form.errorname && form.name.length <= 1 ? 'border border-red-700' : 'border-none'}`}
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium ${form.erroremail && (!form.email.includes('@') || form.email.length <= 1) ? 'border border-red-700' : 'border-none'}`}
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='How can I help?'
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none ${form.errormessage && form.message.length <= 3 ? 'border border-red-700' : 'border-none'} font-medium`}
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            disabled={form.errorname || form.erroremail || form.errormessage}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas2 />
      </motion.div> */}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
