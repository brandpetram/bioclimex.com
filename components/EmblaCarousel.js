import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import Imgix from "react-imgix";

const slides = [
  {
    src: "https://brandpetram.imgix.net/bioclimex.com/images/expertos-en-climatizacion-y-ventilacion-industrial-bioclimex-mexico-20.jpg",
    alt: "epsilon template",
    href: "#",
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
    <div className={"w-auto"}>
      <h2 className=" md:w-3/4 xl:w-8/12 stroke font-extrabold text-gray-900 text-7xl md:text-9xl lg:text-16xl xl:text-20xl 2xl:text-22xl 3xl:text-20xl 4xl:text-22xl mx-4 mb-5 md:mb-0 leading-none md:leading-none xl:ml-10 tracking-tight">
        ¿Qué espacios ventilamos y climatizamos?
      </h2>
      <div className="relative overflow-hidden">
        <div className="w-auto pt-10 overflow-hidden" ref={viewportRef}>
          <div className="flex w-full space-x-10">
            {slides.map((slide, index) => (
              <div
                className={
                  index === 0 ? "flex flex-col pl-10" : "flex flex-col"
                }
                key={slide.src}
              >
                <a
                  className={
                    "w-72 lg:w-96 xl:w-56 2xl:w-96 3xl:w-110 4xl:w-120 5xl:w-148"
                  }
                  href={slide.href}
                >
                  <figure className="relative">
                    <Imgix
                      width={1000}
                      src={slide.src}
                      alt={slide.alt}
                      imgixParams={{
                        ar: "1:1.17",
                        fit: "crop",
                        "fp-x": slide.fpx,
                        "fp-y": slide.fpx,
                        "fp-z": slide.fpx,
                      }}
                    />
                  </figure>
                </a>
                <h1
                  className={
                    "mt-5 font-bold uppercase leading-none mb-1 text-gray-900"
                  }
                >
                  {slide.title}
                </h1>
                <p className={"leading-none text-sm text-gray-600"}>
                  {slide.desc}
                </p>
              </div>
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
