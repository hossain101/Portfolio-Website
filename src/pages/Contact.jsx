import { useState, useRef, Suspense } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Fox from "../models/Fox";
import Loader from "../components/Loader";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const formRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlur = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,

        {
          from_name: form.name,
          to_name: "Shoaib",
          from_email: form.email,
          to_email: "shoaibhossain24@gmail.com",
          message: form.message,
        },

        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        console.log(result.text);
        setIsLoading(false);
        setForm({ name: "", email: "", message: "" });
        alert(
          "Your message has been sent successfully. I will get back to you soon. Thank you!"
        );
      })
      .catch((error) => {
        console.log(error.text);
        setIsLoading(false);
        alert("Sorry! Your message could not be sent. Please try again later.");
      });
  };

  const [isLoading, setIsLoading] = useState(false);

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get In Touch</h1>
        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Shoaib"
              onChange={handleChange}
              onFocus={handleBlur}
              onBlur={handleBlur}
              required
              value={form.name}
              autoComplete="off"
            />
          </label>
          <label className="text-black-500 font-semibold">
            E-Mail
            <input
              type="email"
              name="email"
              className="input"
              placeholder="example@domain.com"
              onChange={handleChange}
              onFocus={handleBlur}
              onBlur={handleBlur}
              required
              value={form.email}
              autoComplete="off"
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              type="text"
              name="message"
              className="input"
              placeholder="Dear Shoaib, ..."
              onChange={handleChange}
              onFocus={handleBlur}
              onBlur={handleBlur}
              requiredrows={5}
              value={form.message}
              autoComplete="off"
            />
          </label>
          <button
            type="submit"
            className="bg-teal-800 hover:bg-teal-950 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleSubmit}
            disabled={isLoading}
            // onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas camera={{ position: [0, 0, 5],fov:75,near:0.1,far:1000}}>
          <Suspense fallback={<Loader />}></Suspense>

            <ambientLight intensity={0.5} />
            <directionalLight position={[0,0,1]} intensity={2.5} />
            <pointLight position={[-1, -1, -1]} intensity={0.5} />
            

          <Fox 
          position={[0.5, 0.35, 0]}
          rotation={[12.6, -0.6, 0]}
            scale={[0.5, 0.5, 0.5]}
          
          />
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
