import ClearCloudyIcon from "@/src/components/icons/weather/clear-cloudy.png";
import CloudyIcon from "@/src/components/icons/weather/cloudy.png";
import RainIcon from "@/src/components/icons/weather/rain.png";
import SnowIcon from "@/src/components/icons/weather/snow.png";
import SunnyIcon from "@/src/components/icons/weather/sunny.png";
import ThunderstormsIcon from "@/src/components/icons/weather/thunder.png";

export const KBO_WEATHER = {
  "1": {
    name: "맑음",
    icon: SunnyIcon,
  },
  "2": {
    name: "구름조금",
    icon: ClearCloudyIcon,
  },
  "3": {
    name: "구름많음",
    icon: CloudyIcon,
  },
  "4": {
    name: "흐림",
    icon: CloudyIcon,
  },
  "5": {
    name: "비",
    icon: RainIcon,
  },
  "6": {
    name: "눈",
    icon: SnowIcon,
  },
  "7": {
    name: "비온후 갬",
    icon: RainIcon,
  },
  "8": {
    name: "소나기",
    icon: RainIcon,
  },
  "9": {
    name: "비 또는 눈",
    icon: SnowIcon,
  },
  "10": {
    name: "흐리고 비",
    icon: RainIcon,
  },
  "11": {
    name: "천둥번개",
    icon: ThunderstormsIcon,
  },
  "12": {
    name: "안개",
    icon: CloudyIcon,
  },
} as const;

export type KboWeatherCode = keyof typeof KBO_WEATHER;
