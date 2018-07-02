export interface FXTrade {
  HedgeDate: Date;
  settleAmount: number;
  Type: string;
  Side: string;
  settleCCY: string;
  }

export interface FXTradeList {
  Type: string;
  Side: string;
  GivenCCY: string;
  GivenAmount: number;
  SettleCCY: string;
  SettleAmount: number;
  ValueDate: Date;
  HedgeDate: Date;
  PortfolioCode: string;
}

// export interface FXTradeList {
//   Type: string;
// }