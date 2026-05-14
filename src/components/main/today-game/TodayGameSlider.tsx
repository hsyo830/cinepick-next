"use client";

import "swiper/css";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { KboGame } from "@/src/types/todayGames";

import GameCard from "./GameCard";

type TodayGameSliderProps = {
  games: KboGame[];
};

const TodayGameSlider = ({ games }: TodayGameSliderProps) => {
  return (
    <>
      {/* 모바일 */}
      <div className="flex w-full gap-2 overflow-x-auto md:hidden">
        {games.map((game) => (
          <div key={game.gameId} className="w-70 shrink-0">
            <GameCard game={game} />
          </div>
        ))}
      </div>

      {/* 태블릿~ */}
      <div className="hidden w-full min-w-0 overflow-hidden md:block">
        <Swiper
          className="w-full"
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={20}
          loop={games.length > 3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {games.map((game) => (
            <SwiperSlide key={game.gameId} className="min-w-0">
              <GameCard game={game} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default TodayGameSlider;
