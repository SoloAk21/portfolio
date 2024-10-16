import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Contact = () => {
  const { t, i18n } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Clear success and error messages after a few seconds
  useEffect(() => {
    if (successMessage || errorMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 5000); // 5 seconds
      return () => clearTimeout(timer);
    }
  }, [successMessage, errorMessage]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear the error for the field being typed in
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = t("nameRequired");
    if (!formData.email) {
      newErrors.email = t("emailRequired");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("emailInvalid");
    }
    if (!formData.message) newErrors.message = t("messageRequired");
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formData,
          import.meta.env.VITE_EMAILJS_USER_ID
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setSuccessMessage(t("messageSent"));
            setFormData({ name: "", email: "", phone: "", message: "" });
          },
          (error) => {
            console.log("FAILED...", error);
            setErrorMessage(t("messageFailed"));
          }
        )
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-title">{t("contactUs")}</div>
      <div className="contact-desc">{t("contactDesc")}</div>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="h-full flex flex-col">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder={t("yourName")}
            className="contact-input"
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="h-full flex flex-col">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder={t("yourEmail")}
            className="contact-input h-11"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="h-full flex flex-col">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder={t("yourPhone")}
            className="contact-input h-11"
          />
        </div>
        <div className="h-full flex flex-col">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder={t("yourMessage")}
            className="contact-input"
            rows="4"
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <div className="flex justify-end">
          <button type="submit" className="contact-button" disabled={loading}>
            {loading ? (
              <span className="flex gap-2">
                <AiOutlineLoading3Quarters className="animate-spin" />{" "}
                {t("sendMessage")}
              </span>
            ) : (
              t("sendMessage")
            )}
          </button>
        </div>
      </form>

      {successMessage && <p className="success fade-in">{successMessage}</p>}
      {errorMessage && <p className="error fade-in">{errorMessage}</p>}
    </div>
  );
};

export default Contact;
