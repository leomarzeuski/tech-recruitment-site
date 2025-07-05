"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

const jobs = [
  {
    id: 1,
    title: "Senior React Developer",
    company: "TechCorp",
    location: "Remote",
    salary: "R$ 15.000 - R$ 20.000",
    tech: ["React", "TypeScript", "Next.js"],
    type: "Full-time",
    level: "Senior",
  },
  {
    id: 2,
    title: "DevOps Engineer",
    company: "CloudStart",
    location: "São Paulo",
    salary: "R$ 12.000 - R$ 18.000",
    tech: ["AWS", "Docker", "Kubernetes"],
    type: "Full-time",
    level: "Pleno",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "Híbrido",
    salary: "R$ 8.000 - R$ 12.000",
    tech: ["Node.js", "React", "MongoDB"],
    type: "Full-time",
    level: "Júnior",
  },
];

export default function JobsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [selectedFilter, setSelectedFilter] = useState("all");
  const router = useRouter();

  const filters = ["all", "remote", "senior", "junior", "fullstack"];

  return (
    <section ref={ref} className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Vagas em Destaque
          </h2>
          <p className="text-xl text-gray-300">
            Oportunidades selecionadas para você
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedFilter === filter
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                    }
                  : {
                      opacity: 0,
                      y: 50,
                      rotateX: -15,
                    }
              }
              transition={{
                delay: index * 0.2,
                duration: 0.6,
                type: "spring",
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                rotateX: 5,
                transition: { duration: 0.3 },
              }}
              onClick={() => router.push(`/jobs/${job.id}`)}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-gray-400">{job.company}</p>
                </div>
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    job.level === "Senior"
                      ? "bg-red-500/20 text-red-400"
                      : job.level === "Pleno"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-green-500/20 text-green-400"
                  }`}
                >
                  {job.level}
                </motion.div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <span>📍</span>
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <span>💰</span>
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <span>⏰</span>
                  <span>{job.type}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {job.tech.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push(`/jobs/${job.id}`)}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Ver Detalhes
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/jobs")}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold text-lg"
          >
            Ver Todas as Vagas
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
