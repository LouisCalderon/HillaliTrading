'use client';

import { useState } from 'react';
import Card from '@/components/Card';

export default function MentorshipPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: '',
    goals: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.');
    setFormData({ name: '', email: '', experience: '', goals: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-transparent min-h-screen">
      <div className="container-main py-16">
        <div className="text-center mb-16">
          <h1 className="heading-primary">
            Mentoría Personalizada
          </h1>
          <p className="paragraph-large max-w-3xl mx-auto">
            Obtén guía uno a uno de traders experimentados. Aprende estrategias probadas,
            evita errores comunes y acelera tu viaje en el trading con mentoría personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="heading-secondary mb-8">Lo Que Obtienes</h2>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-white/20">
                <h3 className="font-semibold text-white mb-2">📚 Desarrollo de Estrategias</h3>
                <p className="text-white/90">Estrategias de trading personalizadas adaptadas a tu estilo y tolerancia al riesgo</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-white/20">
                <h3 className="font-semibold text-white mb-2">🎯 Análisis de Rendimiento</h3>
                <p className="text-white/90">Revisión detallada de tus operaciones con sugerencias accionables de mejora</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-white/20">
                <h3 className="font-semibold text-white mb-2">🧠 Coaching Psicológico</h3>
                <p className="text-white/90">Domina tus emociones y desarrolla disciplina para resultados consistentes</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-white/20">
                <h3 className="font-semibold text-white mb-2">📊 Gestión de Riesgos</h3>
                <p className="text-white/90">Aprende técnicas profesionales de gestión de riesgos y dimensionamiento de posiciones</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-white/20">
                <h3 className="font-semibold text-white mb-2">💬 Llamadas Semanales</h3>
                <p className="text-white/90">Llamadas de video regulares para discutir progreso y responder preguntas</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="heading-secondary mb-8">Programas de Mentoría</h2>
            <div className="space-y-6">
              <Card
                title="Programa Principiante - $29/mes"
                description="Perfecto para traders nuevos. Aprende fundamentos, estrategias básicas y construye confianza."
              >
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm text-white/90">
                    <span className="text-green-400 mr-2">✓</span>
                    2 sesiones semanales de 1 hora
                  </li>
                  <li className="flex items-center text-sm text-white/90">
                    <span className="text-green-400 mr-2">✓</span>
                    Desarrollo básico de estrategias
                  </li>
                  <li className="flex items-center text-sm text-white/90">
                    <span className="text-green-400 mr-2">✓</span>
                    Fundamentos de gestión de riesgos
                  </li>
                  <li className="flex items-center text-sm text-white/90">
                    <span className="text-green-400 mr-2">✓</span>
                    Soporte por email
                  </li>
                </ul>
              </Card>

              <Card
                title="Programa Avanzado - $59/mes"
                description="Para traders experimentados listos para llevar su rendimiento al siguiente nivel."
              >
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm text-white/90">
                    <span className="text-green-400 mr-2">✓</span>
                    4 sesiones semanales de 1 hora
                  </li>
                  <li className="flex items-center text-sm text-white/90">
                    <span className="text-green-400 mr-2">✓</span>
                    Optimización avanzada de estrategias
                  </li>
                  <li className="flex items-center text-sm text-white/90">
                    <span className="text-green-400 mr-2">✓</span>
                    Análisis de rendimiento
                  </li>
                  <li className="flex items-center text-sm text-white/90">
                    <span className="text-green-400 mr-2">✓</span>
                    Soporte prioritario
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>

        <div className="card-glass">
          <h2 className="heading-secondary mb-8 text-center">
            Inicia Tu Viaje de Mentoría
          </h2>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#00CCFF] focus:border-transparent"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#00CCFF] focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="experience" className="block text-sm font-medium text-white mb-2">
                Experiencia en Trading *
              </label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#00CCFF] focus:border-transparent"
              >
                <option value="" className="text-gray-900">Selecciona tu nivel de experiencia</option>
                <option value="beginner" className="text-gray-900">Principiante (0-6 meses)</option>
                <option value="intermediate" className="text-gray-900">Intermedio (6-24 meses)</option>
                <option value="advanced" className="text-gray-900">Avanzado (2+ años)</option>
                <option value="professional" className="text-gray-900">Trader profesional</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="goals" className="block text-sm font-medium text-white mb-2">
                Tus Metas de Trading
              </label>
              <textarea
                id="goals"
                name="goals"
                value={formData.goals}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#00CCFF] focus:border-transparent"
                placeholder="¿Qué quieres lograr con el trading?"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                Mensaje Adicional
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#00CCFF] focus:border-transparent"
                placeholder="¿Alguna pregunta o preocupación específica?"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-[#C71585] text-white px-8 py-3 rounded-md hover:bg-[#A01070] transition-colors font-medium shadow-lg"
              >
                Solicitar Consulta de Mentoría
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}