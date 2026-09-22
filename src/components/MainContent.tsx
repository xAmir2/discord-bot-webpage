import { Link } from "react-router-dom";

export function MainContent() {
  return (
    <main className="text-white">
      <section className="flex flex-col items-center px-6 py-20 text-center">
        <h1 className="text-5xl font-bold">Verba</h1>

        <h2 className="mt-4 text-3xl font-semibold">
          Translate. Communicate. Connect.
        </h2>

        <p className="mt-4 max-w-2xl text-lg text-gray-300">
          A simple Discord bot that makes communication across languages easier.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="https://discord.com/oauth2/authorize?client_id=1549707806708342814"
            className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold hover:bg-indigo-500"
          >
            Add Verba to Discord
          </a>

          <Link
            to="/documentation"
            className="rounded-lg border border-gray-500 px-6 py-3 font-semibold hover:bg-gray-800"
          >
            Documentation
          </Link>
        </div>
      </section>
      <div className="flex justify-center">
        <hr className="border-gray-400  w-2/4" />
      </div>
      <section className="px-6 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">Why Verba?</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-semibold">Multiple Languages</h3>
            <p className="mt-2 text-gray-300">
              Translate messages into different languages.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Simple Commands</h3>
            <p className="mt-2 text-gray-300">
              Use Verba directly through Discord slash commands.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Fast & Reliable</h3>
            <p className="mt-2 text-gray-300">
              Get translations without leaving your server.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Easy Setup</h3>
            <p className="mt-2 text-gray-300">
              Add Verba to your server and start translating.
            </p>
          </div>
        </div>
      </section>
      <div className="flex justify-center">
        <hr className="border-gray-400  w-2/4" />
      </div>
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">How it works</h2>

        <div className="mt-8">
          <p>/translate text:"Hello, how are you?" language:"Italian"</p>

          <p className="my-4 text-2xl">↓</p>

          <p className="text-xl font-semibold">"Ciao, come stai?"</p>
        </div>
      </section>
      <div className="flex justify-center">
        <hr className="border-gray-400  w-2/4" />
      </div>
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">Ready to translate?</h2>

        <p className="mx-auto mt-4 max-w-xl text-gray-300">
          Add Verba to your Discord server and start communicating across
          languages.
        </p>

        <a
          href="https://discord.com/oauth2/authorize?client_id=1549707806708342814"
          className="mt-8 inline-block rounded-lg bg-indigo-600 px-6 py-3 font-semibold hover:bg-indigo-500"
        >
          Add Verba to Discord
        </a>
      </section>
     
    </main>
  );
}
