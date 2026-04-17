export declare const LOGOS: {
  RightSurvey: string;
  RightDesk: string;
  RightTime: string;
  RightQ: string;
  RightData: string;
  RightFlow: string;
  RightPlayer: string;
  RightSuccess: string;
  RightBot: string;
};

export type Product = {
  id: string;
  name: keyof typeof LOGOS;
  adminUrl: string;
};
