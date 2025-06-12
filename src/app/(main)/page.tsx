import Experience from "@/sections/Experience/Experience";
import Hero from "@/sections/Hero/Hero";
import Image from "next/image";
import ContactForm from "@/components/ui/ContactForm/ContactForm";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Groom",
      description: "Sitio web creado con Astro Build con intergacion con Link by Stripe",
      image: "/projects/groom.jpg",
      tags: ["Astro", "Tailwind CSS", "Stripe"],
      githubLink: "https://github.com/JeanDevonne/groom-landing",
      demoLink: "https://joingroom.com/",
    },
    {
      id: 2,
      title: "Auna Mini Site",
      description: "Sitio web informativo y de ayuda a combatir el Covid-19",
      image: "/projects/auna.jpg",
      tags: ["PUG", "SASS", "Express.js", "Vercel"],
      githubLink: "https://github.com/JeanDevonne/auna-minisite",
      demoLink: "https://auna-minisite.vercel.app/",
    },
    {
      id: 3,
      title: "Todo List",
      description: "Aplicacion de tareas usando Vue,js",
      image: "/projects/todo.jpg",
      tags: ["HTML", "CSS", "Vue.js", "GitHub"],
      githubLink: "https://github.com/JeanDevonne/todo",
      demoLink: "https://jeandevonne.github.io/todo/",
    },
    {
      id: 4,
      title: "10 Lukas",
      description: "Sitio web para negocio local de bar-restaurante turistico.",
      image: "/projects/10lukas.jpg",
      tags: ["Swiper", "Cloudinary", "Netlify"],
      githubLink: "",
      demoLink: "https://10lukas.netlify.app/",
    },
    {
      id: 5,
      title: "Dua Lipa Set List 2025",
      description: "Proyecto jugando con HTML, CSS y Spotify",
      image: "/projects/dua.jpg",
      tags: ["HTML", "CSS"],
      githubLink: "https://github.com/JeanDevonne/ThisIsDuaLipa",
      demoLink: "https://jeandevonne.github.io/ThisIsDuaLipa/",
    },
    {
      id: 6,
      title: "Rimac",
      description: "Aplicacion consistente en un reto",
      image: "/projects/rimac.jpg",
      tags: ["React.js", "TypeScript", "CSS modules"],
      githubLink: "https://github.com/JeanDevonne/rimac-frontend-challenge",
      demoLink: "https://rimac-frontend-challenge-theta.vercel.app/",
    }
  ]

  return (
    <div className="">
      <main className="flex flex-col items-center">
        <Hero />
        <section id="projects" className="w-full md:py-30 py-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Proyectos destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Image src={project.image} width={373.34} height={192} alt={`Thumbnail del proyecto ${project.title}`} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full text-sm">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-3">
                    <a href={project.githubLink} target="_blank" className="text-blue-500 hover:underline">GitHub</a>
                    <a href={project.demoLink} target="_blank" className="text-blue-500 hover:underline">Live Demo</a>
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
                <ContactForm/>
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
