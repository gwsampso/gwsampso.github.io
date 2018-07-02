export interface Value {
  number: number;
}

export interface BondCouponAccrual {
  bondCouponAccrualId: number;
  portfolioCode: string;
  date: Date;
  isin: string;
  holding: number;
  factor: number;
  couponRate: number;
  couponFrequency: number;
  currency: string;
  status: string;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface BondCouponReceipt {
  bondCouponReceiptId: number;
  portfolioCode: string;
  date: Date;
  isin: string;
  holding: number;
  factor: number;
  couponRate: number;
  couponFrequency: number;
  currency: string;
  status: string;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface BondCreditRating {
  isin: string;
  agency: string;
  effectiveDate: Date;
  rating: string;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface BondCreditRatingMap {
  rating: string;
  score: number;

}

export interface BondIndexFactor {
  isin: string;
  effectiveDate: Date;
  indexFactor: number;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface BondIssuer {
  issuerTicker: string;
  issuerName: string;
  equityTicker: string;
  issuerClass: string;
  vf: Date;
  vt: Date;
  vu: string;

}

export interface BondMaster {
  isin: string;
  currency: string;
  country: string;
  ticker: string;
  isFloater: string;
  isLinker: string;
  isGreen: string;
  isMbs: string;
  coupon: number;
  couponFrequency: number;
  maturityDate: Date;
  pricingSource: string;
  pricingFactor: number;
  cusip: string;
  sedol: string;
  secondaryId: string;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;
  description: string;

}

export interface BondOrder {
  bondOrderId: number;
  orderDate: Date;
  portfolioCode: string;
  isin: string;
  transactionCode: string;
  settleDate: Date;
  quantity: number;
  status: string;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface BondPriceAccrued {
  isin: string;
  valueDate: Date;
  settlementDate: Date;
  daysToSettle: number;
  accruedInterest: number;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface BondPriceCapital {
  isin: string;
  valueDate: Date;
  capitalPrice: number;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface BondPriceDuration {
  isin: string;
  valueDate: Date;
  type: string;
  duration: number;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface BondPriceYield {
  isin: string;
  valueDate: Date;
  yield: number;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface BondTrade {
  bondTradeId: number;
  isin: string;
  sequence: number;
  brokerCode: string;
  transactionCode: string;
  tradeDate: Date;
  settleDate: Date;
  portfolioCode: string;
  quantity: number;
  price: number;
  yield: number;
  accruedInterest: number;
  settleAmount: number;
  status: string;
  auditTrail: string;
  bondOrderId: number;
  omgeoStatus: string;
  omgeoResponse: string;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface BondTradeCompetitive {
  bondTradeCompetitiveId: number;
  isin: string;
  sequence: number;
  brokercode: string;
  transactionCode: string;
  tradeDate: Date;
  settleDate: Date;
  quantity: number;
  price: number;
  yield: number;
  accruedInterest: number;
  settleAmount: number;
  status: string;
  auditTrail: string;
  bondOrderId: number;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface BondTradeMaturity {
  bondTradeMaturityId: number;
  portfolioCode: string;
  isin: string;
  quantity: number;
  settleAmount: number;
  effectiveDate: Date;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface BondTradeMaturitie {
  bondTradeMaturityId: number;
  portfolioCode: string;
  isin: string;
  quantity: number;
  settleAmount: number;
  effectiveDate: Date;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}


export interface Broker {
  brokerCode: string;
  brokerName: string;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface BrokerExternal {
  brokerExternalCode: string;
  securityType: string;
  brokerCode: string;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface BrokerSsi {
  brokerSsiId: number;
  brokerSsiDesc: string;
  brokerBicCode: string;
  settlementLocationBic: string;
  agentLocalCode: string;
  agentLocalCodeType: string;
  agentAccount: string;
  agentBicCode: string;
  additionalInfo: string;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface BrokerSsimap {
  brokerCode: string;
  securityType: string;
  subSecurityType: string;
  currency: string;
  brokerSsiId: number;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface CashAccrual {
  cashAccrualId: number;
  portfolioCode: string;
  date: Date;
  currency: string;
  value: number;
  status: string;
  comment: string;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface CashFlow {
  cashFlowId: number;
  portfolioCode: string;
  date: Date;
  currency: string;
  account: string;
  value: number;
  status: string;
  comment: string;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface CashTransfer {
  cashTransferId: number;
  portfolioCode: string;
  date: Date;
  currencyO: string;
  accountO: string;
  valueO: number;
  currencyI: string;
  accountI: string;
  valueI: number;
  status: string;
  comment: string;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface CreditRating {
  rating: string;
  score: number;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface EquityDividendAccrual {
  equityDividendAccrualId: number;
  portfolioCode: string;
  date: Date;
  sedol: string;
  holding: number;
  factor: number;
  dividendRate: number;
  currency: string;
  status: string;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface EquityDividendReceipt {
  equityDividendReceiptId: number;
  portfolioCode: string;
  date: Date;
  sedol: string;
  holding: number;
  factor: number;
  dividendRate: number;
  currency: string;
  status: string;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface EquityMaster {
  djangoid: string;
  isin: string;
  sedol: string;
  cusip: string;
  ticker: string;
  priceticker: string;
  exchange: string;
  cty: string;
  ccy: string;
  dividendccy: string;
  gics: string;
  name: string;
}

export interface EquityOrder {
  equityOrderId: number;
  orderDate: Date;
  portfolioCode: string;
  sedol: string;
  transactionCode: string;
  quantity: number;
  status: string;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface EquityPrice {
  sedol: string;
  valueDate: Date;
  price: number;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface EquityReturn {
  sedol: string;
  valueDate: Date;
  returnGross: number;
  returnNet: number;
  returnDeclared: number;
  returnPrice: number;
  returnIncome: number;
  returnGrossLog: number;
  returnNetLog: number;
  returnDeclaredLog: number;
  returnPriceLog: number;
  returnIncomeLog: number;
  dividendGross: number;
  dividendNet: number;
  dividendDeclared: number;
  dividendCurrency: string;
  frankingLevel: number;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface EquityTrade {
  equityTradeId: number;
  sedol: string;
  brokerCode: string;
  transactionCode: string;
  tradeDate: Date;
  settleDate: Date;
  quantity: number;
  price: number;
  portfolioCode: string;
  tradeAmount: number;
  commission: number;
  tax: number;
  equityOrderId: number;
  omgeoStatus: string;
  omgeoResponse: string;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;
  settleAmount: number;

}

export interface FutureDuration {
  contractCode: string;
  valueDate: Date;
  type: string;
  duration: number;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface FutureMaster {
  contractCode: string;
  name: string;
  exchange: string;
  notional: string;
  contractSize: number;
  valueOfOnePoint: number;
  tickSize: number;
  tickValue: number;
  priceMultiple: number;
  cashSettlement: string;
  firstTrade: Date;
  lastTrade: Date;
  firstNotice: Date;
  marginSize: number;
  currency: string;
  exchangeCode: string;
  category: string;
  period: number;
  couponRate: number;
  couponFrequency: number;
  calculationType: string;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface FutureOrder {
  futureOrderId: number;
  orderDate: Date;
  portfolioCode: string;
  contractCode: string;
  transactionCode: string;
  quantity: number;
  instruction: string;
  status: string;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface FuturePrice {
  contractCode: string;
  valueDate: Date;
  price: number;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface FutureTrade {
  futureTradeId: number;
  contractCode: string;
  brokerCode: string;
  transactionCode: string;
  tradeDate: Date;
  settleDate: Date;
  quantity: number;
  price: number;
  portfolioCode: string;
  futureOrderId: number;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface FutureYield {
  contractCode: string;
  valueDate: Date;
  yield: number;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface Fxorder {
  fxorderId: number;
  orderDate: Date;
  batchId: string;
  type: string;
  status: string;
  transactionCode: string;
  givenCurrency: string;
  givenAmount: number;
  settleCurrency: string;
  valueDate: Date;
  farDate: Date;
  portfolioCode: string;
  comment: string;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface Fxrate {
  currency: string;
  valueDate: Date;
  spot: number;
  fwd1W: number;
  fwd1M: number;
  fwd2M: number;
  fwd3M: number;
  fwd4M: number;
  fwd5M: number;
  fwd6M: number;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface Fxtrade {
  fxtradeId: number;
  tradeDateTime: Date;
  counterParty: string;
  batchId: string;
  type: string;
  transactionCode: string;
  givenCurrency: string;
  givenAmount: number;
  settleDate: Date;
  settleCurrency: string;
  settleAmount: number;
  spot: number;
  fwdPts: number;
  swapPts: number;
  allIn: number;
  status: string;
  action: string;
  portfolioCode: string;
  fxorderId: number;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface FxtradeNonDeliverable {
  fxtradeNonDeliverableId: number;
  portfolioCode: string;
  tradeDate: Date;
  transactionCode: string;
  givenCurrency: string;
  givenAmount: number;
  settleCurrency: string;
  settleAmount: number;
  settleDate: Date;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface MoneyDrawer {
  moneyDrawerId: number;
  drawerName: string;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface MoneyIssuer {
  issuerCode: string;
  issuerTicker: string;
  issuerName: string;
  equityTicker: string;
  issuerClass: string;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface MoneyMaster {
  moneyId: string;
  custodianId: string;
  currency: string;
  issuerCode: string;
  drawer: string;
  description: string;
  type: string;
  maturityDate: Date;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface MoneyMaturity {
  moneyMaturityId: number;
  portfolioCode: string;
  moneyId: string;
  quantity: number;
  settleAmount: number;
  maturityDate: Date;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface MoneyMaturitie {
  moneyMaturityId: number;
  portfolioCode: string;
  moneyId: string;
  quantity: number;
  settleAmount: number;
  maturityDate: Date;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface MoneyPrice {
  moneyId: string;
  custodianMoneyId: string;
  source: string;
  valueDate: Date;
  price: number;
  yield: number;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface MoneyTrade {
  moneyTradeId: number;
  moneyId: string;
  brokerCode: string;
  transactionCode: string;
  tradeDate: Date;
  settleDate: Date;
  currency: string;
  issuerCode: string;
  type: string;
  drawer: string;
  quantity: number;
  portfolioCode: string;
  maturityDate: Date;
  rounding: number;
  price: number;
  yield: number;
  tradedSpread: number;
  referenceRate: string;
  settleAmount: number;
  status: string;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface OptionMaster {
  djangoid: string;
  contractcode: string;
  name: string;
  exchange: string;
  ccy: string;
  category: string;
}

export interface OptionOrder {
  optionOrderId: number;
  orderDate: Date;
  portfolioCode: string;
  contractCode: string;
  transactionCode: string;
  quantity: number;
  instruction: string;
  status: string;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface OptionPrice {
  contractCode: string;
  valueDate: Date;
  price: number;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface OptionTrade {
  optionTradeId: number;
  contractCode: string;
  brokerCode: string;
  transactionCode: string;
  tradeDate: Date;
  settleDate: Date;
  quantity: number;
  price: number;
  portfolioCode: string;
  tradeAmount: number;
  settleAmount: number;
  commission: number;
  tax: number;
  optionOrderId: number;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface PortfolioMaster {
  portfolioCode: string;
  shortName: string;
  fullName: string;
  indexCode: string;
  perfMethod: string;
  accruedOffset: string;
  custodian: string;
  custodianCode: string;
  reconciliationCode: string;
  gtssLongName: string;
  arsn: string;
  apircode: string;
  abn: string;
  tfn: string;
  lei: string;
  managementFee: number;
  buySellSpread: number;
  launchDate: Date;
  currency: string;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}

export interface SwapRate {
  country: string;
  valueDate: Date;
  type: string;
  rate: number;
  vf: Date;
  vt: Date;
  vflag: number;
  vu: string;

}
