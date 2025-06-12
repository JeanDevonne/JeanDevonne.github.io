export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-center py-6">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        © 2018-2025 Jean León. Powered by{" "}
        <a
          href="https://vercel.com/"
          className="hover:underline hover:underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vercel
        </a>
        .
      </p>
  </footer>
  )
}