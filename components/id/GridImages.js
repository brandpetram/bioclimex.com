import Imgix, { Picture, Source } from "react-imgix";

const FullGrid = (props) => {
  const product = props.Product;
  return (
    <>
      <div className={"md:w-10/12 mx-auto pt-20 "}>
        <div className={"grid grid-cols-1 md:grid-cols-2 space-y-20"}>
          <div className="mb-24 w-10/12 md:w-1/2 mx-auto">
            <h1 className="font-bold text-gray-800 text-2xl 4xl:text-5xl leading-tight mt-10 tracking-wider">
              {product.textos[0].title}
            </h1>
            <p className="text-gray-700 font-light mt-5 text-xl">
              {product.textos[0].p1}
            </p>
            <p className="text-gray-700 mt-5 font-light text-xl">
              {product.textos[0].p2}
            </p>
          </div>
          {product.images.map((imagen) => (

            <div className={'transform lg:even:pt-32'}><Picture>
            <Source
            src={imagen.image}
            width={4000}
            height={2000}
            htmlAttributes={{
            alt: imagen.alt,
            media: "(min-width: 1920px)",
          }}
            imgixParams={{
            ar: imagen.aspectRatio,
            h: "500",
            fit: "crop",
            auto: "compress",
            cs: "srgb",


          }}
            />
            <Source
            src={imagen.image}
            width={2000}
            height={750}
            htmlAttributes={{
            alt: imagen.alt,
            media: "(min-width: 1024px)",
          }}
            imgixParams={{

            ar: imagen.aspectRatio,
            h: "500",
            fit: "crop",
            auto: "compress",
            cs: "srgb",


          }}
            />
            <Source
            src={imagen.image}
            width={800}
            height={500}
            htmlAttributes={{
            alt: imagen.alt,
            media: "(min-width: 768px)",
          }}
            imgixParams={{
            ar: imagen.aspectRatio,
            h: "500",
            fit: "crop",
            auto: "compress",
            cs: "srgb",


          }}
            />
            <Source
            src={imagen.image}
            width={300}
            height={200}
            htmlAttributes={{
            alt: imagen.alt,
            media: "(min-width: 320px)",
          }}
            imgixParams={{
            ar: imagen.aspectRatio,
            h: "500",
            fit: "crop",
            auto: "compress",
            cs: "srgb",


          }}
            />
            <Imgix
            className={"w-9/12 mx-auto"}
            width={1000}
            height={300}
            key={imagen.image}
            src={imagen.image}
            htmlAttributes={{
            alt: imagen.alt,
          }}
            imgixParams={{
            ar: imagen.aspectRatio,
            h: "200",
            fit: "crop",
            auto: "compress",
            cs: "srgb",
          }}
            />
            </Picture></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FullGrid;
