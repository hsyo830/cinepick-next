export type GameStatus = "NORMAL" | "RAIN_DELAY" | "RAIN_CANCEL";

export type GameStatusIcon = "check" | "delay" | "cancel";

interface GameStatusMeta {
  label: string;
  listLabel: string;
  icon: GameStatusIcon;
  bgClass: string;
  textClass: string;
  iconClass: string;
  hoverClass: string;
}

export const GAME_STATUS_META = {
  NORMAL: {
    label: "경기 진행",
    listLabel: "정상 진행",
    icon: "check",
    bgClass: "bg-success-soft",
    textClass: "text-success",
    iconClass: "text-success",
    hoverClass: "hover:bg-success-soft",
  },

  RAIN_DELAY: {
    label: "우천 지연",
    listLabel: "우천 지연",
    icon: "delay",
    bgClass: "bg-warning-soft",
    textClass: "text-warning",
    iconClass: "text-warning",
    hoverClass: "hover:bg-warning-soft",
  },

  RAIN_CANCEL: {
    label: "우천 취소",
    listLabel: "우천 취소",
    icon: "cancel",
    bgClass: "bg-danger-soft",
    textClass: "text-danger",
    iconClass: "text-danger",
    hoverClass: "hover:bg-danger-soft",
  },
} as const satisfies Record<GameStatus, GameStatusMeta>;
