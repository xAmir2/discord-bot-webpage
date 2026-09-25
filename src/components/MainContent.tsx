import { Link } from "react-router-dom";

export function MainContent() {
  return (
    <main className="text-white">
      <section className="flex flex-col items-center px-6 py-20 text-center">
        <h1 className="text-5xl font-bold">Verba</h1>
        <h2 className="mt-4 text-3xl font-semibold">
          Translate. Communicate. Connect.
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-gray-300">
          The name <span className="font-semibold text-white">Verba</span> comes
          from Latin, where it means
          <span className="font-semibold text-white">"words"</span>. Since words
          are at the heart of communication, it felt like the right name for a
          project built around making communication between different languages
          easier.
        </p>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">
          Nowadays, it's easy to find a Discord bot that can translate messages
          for you. However, many of these services rely on subscriptions or paid
          plans. For someone who might only need a translator for a single
          conversation or for a specific moment, paying for a subscription may
          not make much sense.
        </p>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">
          That's why I decided to build
          <span className="font-semibold text-white"> Verba</span> myself: a
          Discord translation bot that I can run whenever I need it, without
          having to pay for a subscription. The idea is simple — you provide
          your own PC, install the required software, follow the setup guide,
          and you have your own translation bot ready to use.
        </p>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">
          This project is also about learning by building. Instead of simply
          adding an existing bot to a server, the goal is to understand how a
          Discord bot works, how it communicates with an external translation
          API, and how all the pieces come together to create a working
          application.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            to="/documentation"
            className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold hover:bg-indigo-500"
          >
            Build Your Own Bot
          </Link>

          <a
            href="https://github.com/xAmir2/discord-bot-translator"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-500 px-6 py-3 font-semibold hover:bg-gray-800"
          >
            View on GitHub
          </a>
        </div>
      </section>
      <div className="flex justify-center">
        <hr className="w-2/4 border-gray-400" />
      </div>
      <section className="px-6 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">
          What You’ll Build
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-semibold">Discord Translation</h3>
            <p className="mt-2 text-gray-300">
              Build a Discord bot capable of translating messages between
              different languages directly from your server.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold"> Slash Commands </h3>
            <p className="mt-2 text-gray-300">
              Use Discord slash commands to interact with your bot and request
              translations whenever you need them.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold"> External APIs </h3>
            <p className="mt-2 text-gray-300">
              Learn how your application communicates with a translation API and
              uses its response inside your Discord bot.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold"> Your Own Bot </h3>
            <p className="mt-2 text-gray-300">
              Run the bot yourself on your own PC, giving you access to your own
              translator without relying on a third-party bot.
            </p>
          </div>
        </div>
      </section>
      <div className="flex justify-center">
        <hr className="w-2/4 border-gray-400" />
      </div>
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold"> How Verba Works </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-300">
          Verba connects Discord with a translation service. When you use the
          translation command, your bot receives the message, sends it to the
          translation API, and returns the translated text to Discord.
        </p>
        <div className="mx-auto mt-8 max-w-xl">
          <p className="rounded-lg bg-gray-900 px-4 py-3 font-mono text-sm">
            /translate text:"Hello, how are you?" language:"Italian"
          </p>
          <p className="my-4 text-2xl"> ↓ </p>
          <p className="text-xl font-semibold"> "Ciao, come stai?" </p>
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-gray-400">
          Behind this simple interaction is a complete application: a Discord
          bot, a Java application, and an external translation API working
          together.
        </p>
      </section>
      <div className="flex justify-center">
        <hr className="w-2/4 border-gray-400" />
      </div>
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold"> Ready to Build Your Own? </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-300">
          You don't need to pay for a third-party Discord bot or keep a
          subscription active just to translate when you need it. With your own
          PC and a few free tools, you can set up and run your own translation
          bot.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-gray-300">
          The documentation will guide you through the entire process, from
          creating your Discord application to configuring and running your bot.
        </p>
        <Link
          to="/documentation"
          className="mt-8 inline-block rounded-lg bg-indigo-600 px-6 py-3 font-semibold hover:bg-indigo-500"
        >
          Start Building
        </Link>
      </section>
    </main>
  );
}
