import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import Layout2 from "../components/Layout2";
import Head from "next/head";
import "../styles/embla.css";
import Script from "next/script";
import * as gtag from "../lib/gtag";

const layouts = {
  L1: Layout,
  L2: Layout2,
};

function MyApp({ Component, pageProps }) {
  let Layout = layouts["L1"];

  if (Component.layout == "L2") {
    Layout = layouts["L2"];
  }

  {
    /* Solo es necesario poner el nombre del componente, seguido de .layout = "L2" si se requiere seleccionar el segundo layout (Layout2)
    layout.js es el layout por defecto y no es necesario marcarlo explicitamente. 
    EJEMPLO: 
    
    Para seleccionar el segundo Layout en Example, antes del export default se debe poner: 
    Example.layout = "L2"

    Para seleccionar el primer layout en Example, no sé declara nada.
*/
  }
  return (
    <Layout>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=AW-464893311`}
      />
      <Script
        id="gtag-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-464893311', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Script
        strategy="lazyOnload"
        id="clientify"
        dangerouslySetInnerHTML={{
          __html: `function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"b87ca11281451fd909868e3d585b2f33"})});
        `,
        }}
      />
      <Script
        strategy="lazyOnload"
        id="conversion-tracker-google-phone"
        dangerouslySetInnerHTML={{
          __html: `gtag('config', 'AW-464893311/jzrMCL-83KoYEP_q1t0B', {
            'phone_conversion_number': '5559197533'
          });`,
        }}
      />
      <Script
        strategy="lazyOnload"
        id="clientify-2"
        dangerouslySetInnerHTML={{
          __html: ` if (typeof trackerCode ==='undefined'){
            (function (d, w, u, o) {
                w[o] = w[o] || function () {
                    (w[o].q = w[o].q || []).push(arguments)
                };
                a = d.createElement('script'),
                    m = d.getElementsByTagName('script')[0];
                a.async = 1; a.src = u;
                m.parentNode.insertBefore(a, m)
            })(document, window, 'https://analytics.clientify.net/tracker.js', 'ana');
            ana('setTrackerUrl', 'https://analytics.clientify.net');
            ana('setTrackingCode', 'CF-28799-28799-RAVG0');
            ana('trackPageview');
        }
        `,
        }}
      />
      <Script
        strategy="lazyOnload"
        id="gtag-manager"
        dangerouslySetInnerHTML={{
          __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','AW-464893311'); `,
        }}
      />
      {" "}
      <Script
        strategy="lazyOnload"
        id="clientify-3"
        dangerouslySetInnerHTML={{
          __html: `
    if (typeof trackerCode ==='undefined'){
      (function (d, w, u, o) {
        w[o] = w[o] || function () {
          (w[o].q = w[o].q || []).push(arguments)
        };
        a = d.createElement('script'),
          m = d.getElementsByTagName('script')[0];
        a.async = 1; a.src = u;
        m.parentNode.insertBefore(a, m)
      })(document, window, 'https://analytics.clientify.net/tracker.js', 'ana');
      ana('setTrackerUrl', 'https://analytics.clientify.net');
      ana('setTrackingCode', 'CF-28799-28799-RAVG0');
      ana('trackPageview');
    }
    `,
        }}
      />
         
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
        <title>Bioclimex | Climatización y ventilación industrial</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
