import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import Imgix from "react-imgix";

const slides = [
  {
    src: "https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-20.jpg",
    alt: "epsilon template",
    href: "/servicios/bypass-gastrico",
    title: "Restaurantes / comida rápida",
    desc: "Ventilación y climatización en restaurantes de comida rápida",
  },
  {
    src: "https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-15.jpg",
    alt: "epsilon template",
    href: "#",
    title: "Cafés",
    desc: "Ventilación y climatización en cafés",
  },
  {
    src: "https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-18.jpg",
    alt: "epsilon template",
    href: "#",
    title: "Procesos de manufactura",
    desc: "Ventilación y climatización en procesos de manufactura",
  },
  {
    src: "https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-19.jpg",
    alt: "epsilon template",
    href: "#",
    title: "Gimnasios y Canchas Techadas",
    desc: "Ventilación y climatización en gimasions",
  },
  {
    src: "https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-23.jpg",
    alt: "epsilon template",
    href: "#",
    title: "Tiendas de conveniencia",
    desc: "Ventilación y climatización en tiendas de conveniencia",
  },
  {
    src: "https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-17.jpg",
    alt: "epsilon template",
    href: "#",
    title: "Parques industriales ",
    desc: "Ventilación y climatización en parques industriales",
  },
  {
    src: "https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-21.jpg",
    alt: "epsilon template",
    href: "#",
    title: "Supermercados",
    desc: "Ventilación y climatización en supermercados",
  },
  {
    src: "https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-16.jpg",
    alt: "epsilon template",
    href: "#",
    title: "Naves industriales",
    desc: "Ventilación y climatización en naves industriales",
  },
  {
    src: "https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-22.jpg",
    alt: "epsilon template",
    href: "#",
    title: "Talleres metal-mecánicos",
    desc: "Ventilación y climatización en talleres de soldadura",
  },
];

const EmblaCarousel = () => {
  const [viewportRef, embla] = useEmblaCarousel({
    align: "start",
    skipSnaps: true,
    dragFree: false,
    containScroll: "keepSnaps",
    slidesToScroll: 1,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className={"w-auto ml-3"} id="servicios">
      <h2 className=" md:w-3/4 xl:w-10/12 stroke font-bold text-gray-900 text-7xl md:text-9xl lg:text-18xl xl:text-24xl 3xl:text-32xl mx-4 leading-none md:leading-none xl:ml-24 tracking-tight">
        ¿Qué espacios ventilamos y climatizamos?
      </h2>
      <div className="relative overflow-hidden">
        <div className="w-auto pt-5 overflow-hidden" ref={viewportRef}>
          <div className="flex w-full space-x-5">
            {slides.map((slide, index) => (
              <a
                className={
                  index === 0 ? "flex flex-col pl-4 md:pl-24" : "flex flex-col"
                }
                key={slide.src}
                href={slide.href}
              >
                <div
                  className={
                    "w-72 lg:w-96 xl:w-[25rem] 2xl:w-120 3xl:w-110 4xl:w-[34rem] 5xl:w-148"
                  }
                >
                  <figure className="relative overflow-hidden group cursor-pointer">
                    <Imgix
                      width={800}
                      src={slide.src}
                      alt={slide.desc}
                      htmlAttributes={{ alt: slide.desc }}
                      imgixParams={{
                        ar: "1:1.2",
                        fit: "crop",
                        "fp-x": slide.fpx,
                        "fp-y": slide.fpx,
                        "fp-z": slide.fpx,
                        q: "30",
                      }}
                    />
                    <span className="transition-all duration-300 opacity-75 translate-y-[80vh] group-hover:translate-y-0 bg-blend-overlay	bg-blue-600 absolute inset-0"></span>
                    <svg
                      width="36"
                      height="26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={"absolute bottom-12 left-8 -translate-x-40 group-hover:translate-x-0 transition-all duration-300"}
                    >
                      <path
                        d="M.75 11.082h29.708v3.833H.75v-3.832z"
                        fill="#fff"
                      />
                      <path
                        d="m22.217 25.842-2.684-2.684L29.693 13 19.532 2.842 22.217.158 35.057 13l-12.84 12.842z"
                        fill="#fff"
                      />
                    </svg>
                  </figure>
                </div>
                <h1
                  className={
                    "mt-5 font-bold uppercase leading-none mb-1 text-gray-900 text-xl"
                  }
                >
                  {slide.title}
                </h1>
                <p className={"leading-none text-sm text-gray-600"}>
                  {slide.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
    </div>
  );
};

export default EmblaCarousel;
