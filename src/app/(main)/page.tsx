import Experience from "@/sections/Experience/Experience";
import Hero from "@/sections/Hero/Hero";
export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Proyecto 1",
      description: "Descripción del proyecto 1",
      image: "https://casesworld.pe/cdn/shop/files/WhatsApp_Image_2024-10-20_at_10.42.36_PM.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      githubLink: "",
    },
    {
      id: 2,
      title: "Proyecto 1",
      description: "Descripción del proyecto 1",
      image: "https://casesworld.pe/cdn/shop/files/WhatsApp_Image_2024-10-20_at_10.42.36_PM.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      githubLink: "",
    },
    {
      id: 3,
      title: "Proyecto 1",
      description: "Descripción del proyecto 1",
      image: "https://casesworld.pe/cdn/shop/files/WhatsApp_Image_2024-10-20_at_10.42.36_PM.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      githubLink: "",
    },
    {
      id: 4,
      title: "Proyecto 1",
      description: "Descripción del proyecto 1",
      image: "https://casesworld.pe/cdn/shop/files/WhatsApp_Image_2024-10-20_at_10.42.36_PM.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      githubLink: "",
      demoLink: "",
    },
    {
      id: 5,
      title: "Proyecto 1",
      description: "Descripción del proyecto 1",
      image: "https://casesworld.pe/cdn/shop/files/WhatsApp_Image_2024-10-20_at_10.42.36_PM.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      githubLink: "",
    },
    {
      id: 6,
      title: "Proyecto 1",
      description: "Descripción del proyecto 1",
      image: "https://casesworld.pe/cdn/shop/files/WhatsApp_Image_2024-10-20_at_10.42.36_PM.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      githubLink: "",
      demoLink: "",
    }
  ]

  return (
    <div className="">
      <main className="flex flex-col items-center">
        <Hero />
        <section className="w-full py-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Proyectos destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full text-sm">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-3">
                    <a href={project.githubLink} className="text-blue-500 hover:underline">GitHub</a>
                    <a href={project.demoLink} className="text-blue-500 hover:underline">Live Demo</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="w-full py-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Habilidades</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center">
              <h3 className="text-lg font-bold">HTML</h3>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center">
              <h3 className="text-lg font-bold">CSS</h3>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center">
              <h3 className="text-lg font-bold">JavaScript</h3>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center">
              <h3 className="text-lg font-bold">React</h3>
            </div>
          </div>
        </section>
        <Experience />
        <section id="contacto" className="w-full py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">¿Trabajamos juntos?</h2>
            <p className="text-lg text-center max-w-2xl mx-auto mb-12">
              Si tienes un proyecto en mente o quieres contactarme, ¡estaré encantado de escucharte!
            </p>

            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-1/2">
                  <div className="h-full bg-white p-2 rounded-xl shadow-md">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2319.479393564965!2d-77.03149469924948!3d-12.120101318041424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8137c30393f%3A0x5268cb2b1c4b162b!2sMiraflores!5e0!3m2!1ses!2spe!4v1746650406197!5m2!1ses!2spe" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0, minHeight: '400px' }}
                      allowFullScreen
                      loading="lazy"
                      className="rounded-lg"
                    ></iframe>
                    <p className="mt-4 text-sm text-gray-500 text-center">📍 Lima, Perú</p>
                  </div>
                </div>

              <div className="w-full lg:w-1/2 bg-white p-8 rounded-xl shadow-md">
                <form className="space-y-6" action="https://formsubmit.co/tu-email@ejemplo.com" method="POST">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                    <input 
                      type="text" 
                      id="nombre" 
                      name="nombre" 
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
                      required 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 text-gray-700 focus:ring-blue-500 focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                    <textarea 
                      id="mensaje" 
                      name="mensaje" 
                      rows={5}
                      required 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 text-gray-700 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Cuéntame sobre tu proyecto..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
                  >
                    Enviar mensaje
                  </button>
                </form>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold mb-4">También puedes encontrarme en:</h3>
              <div className="flex justify-center space-x-6">
                <a href="mailto:jeanleon.dev@gmail.com" className=" hover:text-blue-600 transition">
                  ✉️ Email
                </a>
                <a href="https://github.com/JeanDevonne" target="_blank" className="hover:text-blue-700 transition">
                  💻 GitHub
                </a>
                <a href="https://www.linkedin.com/in/jencarlos/" target="_blank" className="hover:text-blue-700 transition">
                  🔗 LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
