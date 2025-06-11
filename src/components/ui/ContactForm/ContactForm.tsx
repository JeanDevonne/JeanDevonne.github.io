"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Notificación de carga (opcional)
    const toastId = toast.loading("Enviando mensaje...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle validation errors
        if (data.error && Array.isArray(data.error)) {
          const errorMessage = data.error[0].message;
          throw new Error(errorMessage);
        }
        throw new Error(data.error || "Error al enviar");
      }

      // Éxito: Actualiza la notificación
      toast.success("¡Mensaje enviado con éxito!", { id: toastId });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      // Error: Notificación de error
      toast.error(
        error instanceof Error ? error.message : "Error desconocido",
        { id: toastId }
      );
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required 
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 text-gray-700 focus:ring-blue-500 focus:border-transparent"
          placeholder="Tu nombre"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required 
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 text-gray-700 focus:ring-blue-500 focus:border-transparent"
          placeholder="tu@email.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
        <textarea 
          id="message" 
          name="message" 
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={5}
          required 
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 text-gray-700 focus:ring-blue-500 focus:border-transparent"
          placeholder="Cuéntame sobre tu proyecto..."
        ></textarea>
      </div>
      <button 
        type="submit" 
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
        disabled={isLoading}
      >
        {isLoading ? "Enviando..." : "Enviar Mensaje"}
      </button>
    </form>
  )
}
