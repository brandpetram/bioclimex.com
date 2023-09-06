import { Widget } from "@typeform/embed-react";
import Head from "next/head";

const Typeform = () => {
  return (
    <div className="">
      <Head>
        <title>Contacto | bioclimex</title>
        <meta
          name="description"
          content="Los expertos en climatización de espacios industriales y comerciales en México"
        />
      </Head>
      <Widget id="Z4uJvQhT" className="h-screen" />
    </div>
  );
};

Typeform.layout = "L2";
{
  /* Solo es necesario poner el nombre del componente, seguido de .layout = "L2" si se requiere seleccionar el segundo layout (Layout2)
    layout.js es el layout por defecto y no es necesario marcarlo explicitamente. 
*/
}

export default Typeform;
