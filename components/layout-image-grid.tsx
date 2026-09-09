"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  content: React.ReactNode;
  className: string;
  thumbnail: string;
};

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-mono tracking-wider font-bold md:text-3xl text-xl text-white uppercase">
        Camera Operating & Steadicam
      </p>
      <p className="font-normal text-sm my-3 max-w-lg text-neutral-200 leading-relaxed">
        Fluid, immersive motion operating with Easyrig, Steadicam, and stabilized gimbal rigs designed for narrative pacing.
      </p>
      <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
        Concept Spec · ARRI Alexa 35 / Easyrig
      </span>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-mono tracking-wider font-bold md:text-3xl text-xl text-white uppercase">
        Aerial Cinematography
      </p>
      <p className="font-normal text-sm my-3 max-w-lg text-neutral-200 leading-relaxed">
        Dual-operator cinema drone flights delivering panoramic perspective and low-altitude dynamic pursuit tracks.
      </p>
      <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
        Concept Spec · DJI Inspire 3 / X9-8K
      </span>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-mono tracking-wider font-bold md:text-3xl text-xl text-white uppercase">
        Observational Documentary
      </p>
      <p className="font-normal text-sm my-3 max-w-lg text-neutral-200 leading-relaxed">
        Responsive, intuitive camera operating built to navigate unpredictable real-world environments without intrusion.
      </p>
      <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
        Concept Spec · Sony FX6 Run & Gun
      </span>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div>
      <p className="font-mono tracking-wider font-bold md:text-3xl text-xl text-white uppercase">
        Commercial & Studio
      </p>
      <p className="font-normal text-sm my-3 max-w-lg text-neutral-200 leading-relaxed">
        High-precision camera movements, motion control tracks, and sculpted lighting for luxury and commercial productions.
      </p>
      <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
        Concept Spec · Anamorphic Glass & Motion Dolly
      </span>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/camera-operating/camera-operating-1.webp",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/aerial/aerial-1.webp",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/documentary/documentary-1.webp",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/commercial/commercial-1.webp",
  },
];

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-4 sm:p-10 grid grid-cols-1 md:grid-cols-3 max-w-8xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "min-h-[260px] md:min-h-[320px]")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden cursor-pointer h-full w-full rounded-2xl sm:rounded-3xl border border-white/10 shadow-lg",
              selected?.id === card.id
                ? "rounded-3xl cursor-pointer absolute inset-0 h-4/5 w-full md:w-3/4 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 h-full w-full"
                : "h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 opacity-0 z-10",
          selected?.id ? "pointer-events-auto bg-black/60" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.6 : 0 }}
      />
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      className={cn(
        "object-cover object-center absolute inset-0 h-full w-full transition duration-300"
      )}
      alt="Cinematic production concept spec"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-3xl shadow-2xl relative z-[60]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        className="absolute inset-0 h-full w-full bg-gradient-to-t from-black via-black/60 to-transparent z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative px-8 pb-8 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};

export function LayoutGridDemo() {
  return (
    <div className="py-12 sm:py-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-6">
        <h2 className="text-2xl sm:text-3xl font-mono uppercase tracking-wider text-foreground">
          Operating Focus & Disciplines
        </h2>
        <p className="text-sm font-mono text-muted-foreground mt-1">
          Ground camera systems, aerial drone piloting, and specialized lighting
        </p>
      </div>
      <LayoutGrid cards={cards} />
    </div>
  );
}
