import React from "react";
import Imgix, { Picture, Source } from "react-imgix";

const Textos = ({ data }) => {
  return (
    <div className={"space-y-10"}>
      {data.map((contenido, index) => (
        <div key={index}>
          {contenido.lista ? (
            <ul className="space-y-5 text-gray-700 text-lg list-disc ml-10">
              {contenido.lista.map((item) => (
                <li>{item.item}</li>
              ))}
            </ul>
          ) : (
            <div>
              <h1
                className={
                  "text-4xl font-bold mb-7 leading-tight text-gray-800"
                }
              >
                {contenido.title}
              </h1>
              <div className={"space-y-5 text-gray-700 text-lg"}>
                <p>{contenido.text}</p>
                {contenido.image ? (
                  <div>
                    <a href="/contacto.html">
                      <Picture>
                        <Source
                          src={contenido.image}
                          width={4000}
                          height={2000}
                          htmlAttributes={{
                            alt: contenido.alt,
                            media: "(min-width: 1920px)",
                          }}
                          imgixParams={{
                            ar: "2:1",
                            h: "500",
                            fit: "crop",
                            auto: "compress",
                            cs: "srgb",
                          }}
                        />
                        <Source
                          src={contenido.image}
                          width={2000}
                          height={750}
                          htmlAttributes={{
                            alt: contenido.alt,
                            media: "(min-width: 1024px)",
                          }}
                          imgixParams={{
                            ar: "2:1",
                            h: "500",
                            fit: "crop",
                            auto: "compress",
                            cs: "srgb",
                          }}
                        />
                        <Source
                          src={contenido.image}
                          width={800}
                          height={500}
                          htmlAttributes={{
                            alt: contenido.alt,
                            media: "(min-width: 768px)",
                          }}
                          imgixParams={{
                            ar: "2:1",
                            h: "500",
                            fit: "crop",
                            auto: "compress",
                            cs: "srgb",
                          }}
                        />
                        <Source
                          src={contenido.image}
                          width={300}
                          height={200}
                          htmlAttributes={{
                            alt: contenido.alt,
                            media: "(min-width: 320px)",
                          }}
                          imgixParams={{
                            ar: "2:1",
                            h: "500",
                            fit: "crop",
                            auto: "compress",
                            cs: "srgb",
                          }}
                        />
                        <Imgix
                          className={"rounded-md my-10"}
                          width={1000}
                          height={300}
                          key={contenido.image}
                          src={contenido.image}
                          htmlAttributes={{
                            alt: contenido.alt,loading: "lazy"
                          }}
                          imgixParams={{
                            ar: "2:1",
                            h: "200",
                            fit: "crop",
                            auto: "compress",
                            cs: "srgb",
                          }}
                        />
                      </Picture>
                    </a>
                  </div>
                ) : (
                  <div />
                )}
                {contenido.video2 ? (
                <FacebookVideoWrapper video={contenido.video2}/>
                ) : (
                  <span />
                )}
                <p>{contenido.second}</p>
                <p>{contenido.third}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Textos;
