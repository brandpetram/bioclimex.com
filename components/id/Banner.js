import Imgix, { Picture, Source } from "react-imgix";

const Banner = (props) => {
  return (
    <>
      <div className={"flex"}>
        <div className={"flex-1"}>
          <Picture>
            <Source
              src={props.Banner}
              width={4000}
              height={4000}
              htmlAttributes={{ media: "(min-width: 2550px)" }}
              imgixParams={{
                ar: "15:9",
                fit: "crop",
                auto: "compress",
              }}
            />
            <Source
              src={props.Banner}
              width={2000}
              htmlAttributes={{ media: "(min-width: 1920px)" }}
              imgixParams={{
                ar: "15:9",
                fit: "crop",
                h: "900",
                auto: "compress",
              }}
            />
            <Source
              src={props.Banner}
              width={1735}
              htmlAttributes={{ media: "(min-width: 1280px)" }}
              imgixParams={{
                ar: "12:8",
                fit: "crop",
                h: "1200",
                auto: "compress",
              }}
            />
            <Source
              src={props.Banner}
              width={1735}
              htmlAttributes={{ media: "(min-width: 1024px)" }}
              imgixParams={{
                ar: "1:0.9",
                fit: "crop",
                h: "1600",
                auto: "compress",
              }}
            />
            <Source
              src={props.Banner}
              width={760}
              htmlAttributes={{ media: "(min-width: 768px)" }}
              imgixParams={{
                ar: "1:0.65",
                fit: "crop",
                h: "510",
                auto: "compress",
              }}
            />
            <Source
              src={props.Banner}
              width={500}
              htmlAttributes={{ media: "(min-width: 320px)" }}
              imgixParams={{
                ar: "1:1",
                h: "400",
                fit: "crop",
                crop: "focalpoint",
                "fp-z": "1",
                "fp-x": ".7",
                auto: "compress",
              }}
            />
            <Imgix
              className={"flex-1"}
              src={props.Banner}
              width={4000}
              height={4000}
              imgixParams={{
                ar: "2:7",
                h: "280",
                fit: "crop",
                auto: "compress",
              }}
            />
          </Picture>
        </div>
        <div className={"w-1/2 relative bg-blue-600"}>
          <div
            className={
              "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            }
          >
            <p className="tracking-widest text-sm lg:mb-10 text-center text-white uppercase">
              DGN
            </p>
            <p className="text-center text-red-50 leading-none text-xl md:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-12xl 4xl:text-13xl font-extrabold">
              {props.title}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
