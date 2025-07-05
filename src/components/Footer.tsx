"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "💼",
      href: "#",
      color: "from-blue-600 to-blue-700",
    },
    {
      name: "GitHub",
      icon: "🐙",
      href: "#",
      color: "from-gray-700 to-gray-800",
    },
    {
      name: "Twitter",
      icon: "🐦",
      href: "#",
      color: "from-blue-400 to-blue-500",
    },
    {
      name: "Discord",
      icon: "🎮",
      href: "#",
      color: "from-indigo-600 to-purple-600",
    },
  ];

  const footerLinks = {
    "Para Desenvolvedores": [
      "Buscar Vagas",
      "Criar Perfil",
      "Salários Tech",
      "Guia de Carreira",
    ],
    "Para Empresas": [
      "Postar Vagas",
      "Buscar Talentos",
      "Planos Premium",
      "Recrutamento Tech",
    ],
    Recursos: ["Blog Tech", "Webinars", "Comunidade", "Newsletter"],
    Suporte: ["Central de Ajuda", "Contato", "Termos de Uso", "Privacidade"],
  };

  const techStats = [
    { label: "Vagas Ativas", value: "2.5K+", icon: "💼" },
    { label: "Desenvolvedores", value: "50K+", icon: "👨‍💻" },
    { label: "Empresas Parceiras", value: "500+", icon: "🏢" },
    { label: "Contratações", value: "10K+", icon: "🤝" },
  ];

  return (
    <footer className="relative bg-gradient-to-t from-black via-gray-900 to-gray-800 border-t border-gray-700">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {techStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-4xl mb-2"
              >
                {stat.icon}
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                viewport={{ once: true }}
                className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1"
              >
                {stat.value}
              </motion.div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"
              >
                <span className="text-white font-bold text-xl">⚡</span>
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                DevJobs
              </span>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Conectamos os melhores talentos tech com oportunidades
              extraordinárias. Sua próxima carreira dos sonhos está aqui.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  viewport={{ once: true }}
                  className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all duration-300`}
                >
                  <span className="text-xl">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(
            ([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold mb-4">{category}</h3>
                <ul className="space-y-2">
                  {links.map((link, linkIndex) => (
                    <motion.li
                      key={link}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: categoryIndex * 0.1 + linkIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                    >
                      <motion.a
                        href="#"
                        whileHover={{ x: 5, color: "#60a5fa" }}
                        className="text-gray-400 hover:text-blue-400 transition-all duration-200 text-sm"
                      >
                        {link}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="text-gray-400 text-sm"
            >
              © 2025 DevJobs. Todos os direitos reservados.
            </motion.div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <motion.span
                whileHover={{ scale: 1.1, color: "#60a5fa" }}
                className="cursor-pointer transition-all duration-200"
              >
                Privacidade
              </motion.span>
              <span>•</span>
              <motion.span
                whileHover={{ scale: 1.1, color: "#60a5fa" }}
                className="cursor-pointer transition-all duration-200"
              >
                Termos
              </motion.span>
              <span>•</span>
              <motion.span
                whileHover={{ scale: 1.1, color: "#60a5fa" }}
                className="cursor-pointer transition-all duration-200"
              >
                Cookies
              </motion.span>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-sm text-gray-400"
            >
              <span>Feito com</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-500"
              >
                ❤️
              </motion.span>
              <span>por desenvolvedores</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
      />
    </footer>
  );
}
