"use client";

import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import {
  ArrowLeft,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { getJobById } from "@/services/jobsService";

// Dados das vagas agora importados do serviço centralizado

export default function JobDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [isApplying, setIsApplying] = useState(false);
  const [hasApplied, setHasApplied] = useState(false);

  const jobId = parseInt(params.id as string);
  const job = getJobById(jobId);

  if (!job) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Vaga não encontrada</h1>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            Voltar ao início
          </button>
        </div>
      </div>
    );
  }

  const handleApply = async () => {
    setIsApplying(true);
    // Simular processo de candidatura
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setHasApplied(true);
    setIsApplying(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Voltar
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                {job.title}
              </h1>
              <p className="text-xl text-gray-300 mb-4">{job.company}</p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin size={16} />
                  {job.location}
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <DollarSign size={16} />
                  {job.salary}
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock size={16} />
                  {job.type}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {job.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div
                className={`px-4 py-2 rounded-full text-sm font-medium text-center ${
                  job.level === "Senior"
                    ? "bg-red-500/20 text-red-400"
                    : job.level === "Pleno"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-green-500/20 text-green-400"
                }`}
              >
                {job.level}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleApply}
                disabled={isApplying || hasApplied}
                className={`px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  hasApplied
                    ? "bg-green-600 text-white"
                    : isApplying
                    ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                }`}
              >
                {hasApplied ? (
                  <div className="flex items-center gap-2">
                    <CheckCircle size={20} />
                    Candidatura Enviada
                  </div>
                ) : isApplying ? (
                  "Enviando..."
                ) : (
                  "Candidatar-se"
                )}
              </motion.button>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                Descrição
              </h3>
              <p className="text-gray-300 leading-relaxed">{job.description}</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                Sobre a Empresa
              </h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  {job.companyInfo?.size || "N/A"}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  Fundada em {job.companyInfo?.founded || "N/A"}
                </div>
                <p className="text-sm text-gray-400">
                  {job.companyInfo?.industry || "N/A"}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">
                Requisitos
              </h3>
              <ul className="space-y-2">
                {job.requirements?.map((req, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-300"
                  >
                    <span className="text-green-400 mt-1">•</span>
                    {req}
                  </li>
                )) || (
                  <li className="text-gray-400">
                    Requisitos não especificados
                  </li>
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                Benefícios
              </h3>
              <ul className="space-y-2">
                {job.benefits?.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-300"
                  >
                    <span className="text-purple-400 mt-1">•</span>
                    {benefit}
                  </li>
                )) || (
                  <li className="text-gray-400">
                    Benefícios não especificados
                  </li>
                )}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
