import React from "react";
import { useFormik } from "formik";
import BasicSchema from "./joy";
import "./styles/contact.css";

function Contact() {
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        name: "",
        number: "",
        message: "",
      },
      validationSchema: BasicSchema,
    });

  console.log(errors);
  return (
    <div className="contact-container">
      <div
        className="address-box"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in"
        data-aos-duration="1000"
      >
        <h2>Follow us</h2>
        <div className="address2">
          <h1>
            <i class="bi bi-geo-alt"></i>Address
          </h1>
          <p>Vayapurinagar,</p>
          <p>karur,tamilnadu,india.</p>
        </div>
        <div className="number">
          <h1>
            <i class="bi bi-telephone"></i>Lets Talk
          </h1>
          <p>9093984848</p>
        </div>
        <div className="email">
          <h1>
            <i class="bi bi-envelope"></i>General support
          </h1>
          <p>Contact@gmail.com</p>
        </div>
      </div>
      <div className="contact-box">
        <h1>Get in touch with us</h1>
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-easing="ease-in"
          data-aos-duration="1000"
        >
          <label htmlfor="name">Enter Your Name*</label>
          <br />

          <input
            type="text"
            placeholder="Enter name here"
            value={values.name}
            id="name"
            onChange={handleChange}
            onBlur={handleBlur}
            className="input input-bordered input-accent w-full max-w-xs"
          />
          <br></br>
          {errors.name && touched.name && <p>{errors.name}</p>}

          <label htmlfor="email">Enter Your Email*</label>
          <br />

          <input
            value={values.email}
            id="email"
            type="email"
            placeholder="Enter Email here"
            onChange={handleChange}
            onBlur={handleBlur}
            className="input input-bordered input-accent w-full max-w-xs"
          />
          <br></br>
          {errors.email && touched.email && <p>{errors.email}</p>}

          <label htmlfor="number">Enter Your Number</label>
          <br />

          <input
            value={values.number}
            id="number"
            type="number"
            placeholder="Enter number here"
            onChange={handleChange}
            onBlur={handleBlur}
            className="input input-bordered input-accent w-full max-w-xs"
          />
          <br></br>
          {errors.number && touched.number && <p>{errors.number}</p>}

          <label htmlFor="message">Message*</label>
          <br />

          <textarea
            className="textarea textarea-accent"
            placeholder="Write us a message"
          ></textarea>
          {errors.message && touched.message && <p>{errors.message}</p>}
          <div id="btn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
