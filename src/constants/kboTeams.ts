import DoosanLogo from "@/public/image/team-logo/doosan-logo.svg";
import HanwhaLogo from "@/public/image/team-logo/hanwha-logo.svg";
import KiaLogo from "@/public/image/team-logo/kia-logo.svg";
import KiwoomLogo from "@/public/image/team-logo/kiwoom-logo.svg";
import KtLogo from "@/public/image/team-logo/kt-logo.svg";
import LgLogo from "@/public/image/team-logo/lg-logo.svg";
import LotteLogo from "@/public/image/team-logo/lotte-logo.svg";
import NcLogo from "@/public/image/team-logo/nc-logo.svg";
import SamsungLogo from "@/public/image/team-logo/samsung-logo.svg";
import SsgLogo from "@/public/image/team-logo/ssg-logo.svg";

export const KBO_TEAMS = {
  LT: {
    name: "롯데 자이언츠",
    logo: LotteLogo,
  },
  HH: {
    name: "한화 이글스",
    logo: HanwhaLogo,
  },
  HT: {
    name: "KIA 타이거즈",
    logo: KiaLogo,
  },
  WO: {
    name: "키움 히어로즈",
    logo: KiwoomLogo,
  },
  KT: {
    name: "KT 위즈",
    logo: KtLogo,
  },
  LG: {
    name: "LG 트윈스",
    logo: LgLogo,
  },
  NC: {
    name: "NC 다이노스",
    logo: NcLogo,
  },
  OB: {
    name: "두산 베어스",
    logo: DoosanLogo,
  },
  SS: {
    name: "삼성 라이온즈",
    logo: SamsungLogo,
  },
  SK: {
    name: "SSG 랜더스",
    logo: SsgLogo,
  },
} as const;

export type KboTeamCode = keyof typeof KBO_TEAMS;
