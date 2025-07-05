"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section ref={ref} className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-300">
            Vamos conectar talentos e oportunidades
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">
              Informações de Contato
            </h3>

            <div className="space-y-6">
              {[
                { icon: "📧", label: "Email", value: "contato@devjobs.com" },
                { icon: "📱", label: "Telefone", value: "+55 (11) 99999-9999" },
                {
                  icon: "📍",
                  label: "Endereço",
                  value: "São Paulo, SP - Brasil",
                },
                { icon: "🌐", label: "Website", value: "www.devjobs.com" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                  }
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1 }}
              className="mt-8"
            >
              <h4 className="text-lg font-semibold mb-4 text-white">
                Redes Sociais
              </h4>
              <div className="flex gap-4">
                {["LinkedIn", "GitHub", "Twitter", "Instagram"].map(
                  (social) => (
                    <motion.div
                      key={social}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center cursor-pointer"
                    >
                      <span className="text-white font-bold text-sm">
                        {social.slice(0, 2)}
                      </span>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="name"
                  placeholder="Seu Nome"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all duration-300"
                  required
                />
              </div>

              <div>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  name="email"
                  placeholder="Seu Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all duration-300"
                  required
                />
              </div>

              <div>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="company"
                  placeholder="Empresa (opcional)"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all duration-300"
                />
              </div>

              <div>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  name="message"
                  placeholder="Sua Mensagem"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-4 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all duration-300 resize-none"
                  required
                />
              </div>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Enviar Mensagem
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
