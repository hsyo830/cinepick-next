import AlcoholIcon from "@/src/components/icons/foodBooth/AlcoholIcon";
import BunsikIcon from "@/src/components/icons/foodBooth/BunsikIcon";
import BurgerIcon from "@/src/components/icons/foodBooth/BurgerIcon";
import CafeIcon from "@/src/components/icons/foodBooth/CafeIcon";
import ChickenIcon from "@/src/components/icons/foodBooth/ChickenIcon";
import ConvenienceStoreIcon from "@/src/components/icons/foodBooth/ConvenienceStoreIcon";
import DessertIcon from "@/src/components/icons/foodBooth/DessertIcon";
import KoreanIcon from "@/src/components/icons/foodBooth/KoreanIcon";
import PizzaIcon from "@/src/components/icons/foodBooth/PizzaIcon";
import RestaurantIcon from "@/src/components/icons/foodBooth/RestaurantIcon";

export const FOOD_CATEGORIES = [
  { label: "전체", value: "all", icon: null },
  { label: "치킨", value: "chicken", icon: ChickenIcon },
  { label: "버거", value: "burger", icon: BurgerIcon },
  { label: "피자", value: "pizza", icon: PizzaIcon },
  { label: "한식", value: "korean", icon: KoreanIcon },
  { label: "분식", value: "bunsik", icon: BunsikIcon },
  { label: "간식", value: "dessert", icon: DessertIcon },
  { label: "카페", value: "cafe", icon: CafeIcon },
  { label: "주류", value: "alcohol", icon: AlcoholIcon },
  { label: "편의점", value: "convenienceStore", icon: ConvenienceStoreIcon },
  { label: "식당", value: "restaurant", icon: RestaurantIcon },
] as const;

export type FoodCategory = (typeof FOOD_CATEGORIES)[number];
export type FoodCategoryLabel = FoodCategory["label"];
export type FoodCategoryValue = FoodCategory["value"];
