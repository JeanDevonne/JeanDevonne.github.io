export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-center py-6">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        © 2018-2025{" "}
        <a
          href="skype:live:.cid.1f2b0c3a4d7e5f8b?chat"
          className="hover:underline hover:underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jean León
        </a>
        . Powered by{" "}
        <a
          href="https://www.netlify.com/"
          className="hover:underline hover:underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
        .
      </p>
  </footer>
  )
}