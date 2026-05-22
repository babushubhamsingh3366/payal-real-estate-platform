import { useState } from "react";
import { motion } from "framer-motion";

const infoItems = [
  { label: "Location", value: "Hyderabad, Telangana, India" },
  { label: "Company", value: "Veva Realty · VSpaces by Veva" },
  { label: "Website", value: "vevarealty.com" },
];

const inquiryTypes = [
  "Property Investment Advisory",
  "Residential Property",
  "Commercial Space",
  "Schedule a Consultation",
  "Collaboration / Partnership",
  "Media / Speaking Inquiry",
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", type: inquiryTypes[0], message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-[6%] bg-[#0A0A0B]">
      <div className="flex items-center gap-3 mb-5">
        <span className="w-6 h-px bg-[#C9A84C]" />
        <span className="text-[11px] tracking-[4px] uppercase text-[#C9A84C]">Connect</span>
      </div>
      <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-light leading-[1.15] mb-8">
        Begin a<br /><em className="text-[#C9A84C]">Conversation</em>
      </h2>
      <div className="w-14 h-px bg-[#8A6D2F] mb-14" />

      <div className="grid md:grid-cols-2 gap-20 items-start">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {infoItems.map((item, i) => (
            <div
              key={item.label}
              className={`pb-8 mb-8 ${i < infoItems.length - 1 ? "border-b border-[#222228]" : ""}`}
            >
              <div className="text-[10px] tracking-[3px] uppercase text-[#C9A84C] mb-2">{item.label}</div>
              <div className="text-[16px] text-[#F5F0E8] font-light">{item.value}</div>
            </div>
          ))}
          <p className="text-[14px] text-[#6B6560] leading-[1.9] font-light mt-8">
            Whether you are exploring a property investment, seeking strategic real estate counsel, or looking to collaborate — Payal welcomes a direct conversation.
          </p>
        </motion.div>

        {/* Form */}
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center min-h-[400px] text-center border border-[#222228] p-12"
          >
            <div className="font-serif text-[48px] font-light text-[#C9A84C] mb-4">✓</div>
            <div className="font-serif text-[28px] font-light mb-4">Inquiry Sent</div>
            <p className="text-[14px] text-[#9B9490] font-light leading-[1.8]">
              Thank you for reaching out. Payal or her team will get back to you within 24–48 hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
          >
            {[
              { label: "Full Name", name: "name", type: "text", placeholder: "Your full name" },
              { label: "Email Address", name: "email", type: "email", placeholder: "your@email.com" },
              { label: "Phone", name: "phone", type: "tel", placeholder: "+91 XXXXX XXXXX" },
            ].map((field) => (
              <div key={field.name} className="mb-6">
                <label className="block text-[10px] tracking-[2px] uppercase text-[#6B6560] mb-2.5">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required
                  className="w-full py-3.5 bg-transparent border-0 border-b border-[#222228] text-[#F5F0E8] text-[15px] font-light font-sans focus:border-b focus:border-[#C9A84C] outline-none transition-colors duration-300 placeholder-[#6B6560]"
                />
              </div>
            ))}

            <div className="mb-6">
              <label className="block text-[10px] tracking-[2px] uppercase text-[#6B6560] mb-2.5">
                Purpose of Inquiry
              </label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full py-3.5 bg-transparent border-0 border-b border-[#222228] text-[#9B9490] text-[15px] font-light font-sans outline-none cursor-pointer appearance-none"
              >
                {inquiryTypes.map((t) => (
                  <option key={t} value={t} className="bg-[#111114] text-[#F5F0E8]">{t}</option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-[10px] tracking-[2px] uppercase text-[#6B6560] mb-2.5">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Share your requirements..."
                rows={4}
                className="w-full py-3.5 bg-transparent border-0 border-b border-[#222228] text-[#F5F0E8] text-[15px] font-light font-sans outline-none resize-none transition-colors duration-300 placeholder-[#6B6560]"
              />
            </div>

            <button
              type="submit"
              className="mt-4 w-full py-[18px] bg-[#C9A84C] text-[#0A0A0B] text-[11px] tracking-[3px] uppercase font-semibold font-sans border-none cursor-pointer hover:bg-[#E8D5A3] transition-colors duration-300"
            >
              Send Inquiry →
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}

export default Contact;
