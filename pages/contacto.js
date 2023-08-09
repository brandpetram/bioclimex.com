import Head from "next/head";
import NextLink from "next/link";
import Script from "next/script";
const Contacto = () => {
  return (
    <main className="bg-zinc-950">
      <Head>
        <title>Contacto | Bioclimex</title>
      </Head>
      <style jsx>{`
        html {
          margin: 0;
          height: 100%;
          overflow: hidden;
        }
        iframe {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          border: 0;
        }
      `}</style>
      <div className=" w-full h-full flex">
        <iframe
          src="https://apps.clientify.net/formbuilderembed/simpleembed/#/success/twostepformpopup/144/28799"
          title="Contacto"
          allow="camera;microphone"
          className="flex w-full h-full"
        ></iframe>
        <Script
          src="https://api.clientify.net/web-marketing/superforms/script/144689.js"
          strategy="beforeInteractive"
        ></Script>
        <div className="z-50 absolute bottom-10 right-10 md:left-10 flex gap-0.2em font-light text-xs no-underline">
          <NextLink href="/">
            &larr;<span>Inicio</span>
          </NextLink>
        </div>
      </div>
    </main>
  );
};

Contacto.Layout = "L2";

export default Contacto;
