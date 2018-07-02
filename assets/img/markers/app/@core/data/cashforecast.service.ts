import { Injectable } from '@angular/core';

@Injectable()
export class CashforecastService {

  private data = [
    {
      title: '2015',
      portfolios: [
        { portfolio: 'G003', performance: '0.97', down: true, fum: '816', vol: '97' },
        { portfolio: 'G004', performance: '1.83', down: true, fum: '806', vol: '95' },
        { portfolio: 'G005', performance: '0.64', down: true, fum: '803', vol: '94' },
        { portfolio: 'G006', performance: '2.17', down: false, fum: '818', vol: '98' },
        { portfolio: 'G023', performance: '1.32', down: true, fum: '809', vol: '96' },
        { portfolio: 'G024', performance: '0.05', down: true, fum: '808', vol: '96' },
        { portfolio: 'G026', performance: '1.39', down: false, fum: '815', vol: '97' },
        { portfolio: 'G027', performance: '0.73', down: true, fum: '807', vol: '95' },
        { portfolio: 'G028', performance: '2.61', down: true, fum: '792', vol: '92' },
        { portfolio: 'G030', performance: '0.16', down: true, fum: '791', vol: '92' },
        { portfolio: 'G031', performance: '1.71', down: true, fum: '786', vol: '89' },
        { portfolio: 'G032', performance: '0.37', down: false, fum: '789', vol: '91' },
      ],
    },
    {
      title: '2016',
      active: true,
      portfolios: [
        { portfolio: 'G003', performance: '1.56', down: true, fum: '789', vol: '91' },
        { portfolio: 'G004', performance: '0.33', down: false, fum: '791', vol: '92' },
        { portfolio: 'G005', performance: '0.62', down: true, fum: '790', vol: '92' },
        { portfolio: 'G006', performance: '1.93', down: true, fum: '783', vol: '87' },
        { portfolio: 'G023', performance: '2.52', down: true, fum: '771', vol: '83' },
        { portfolio: 'G024', performance: '0.39', down: false, fum: '774', vol: '85' },
        { portfolio: 'G026', performance: '1.61', down: true, fum: '767', vol: '81' },
        { portfolio: 'G027', performance: '1.41', down: true, fum: '759', vol: '76' },
        { portfolio: 'G028', performance: '1.03', down: true, fum: '752', vol: '74' },
        { portfolio: 'G030', performance: '2.94', down: false, fum: '769', vol: '82' },
        { portfolio: 'G031', performance: '0.26', down: true, fum: '767', vol: '81' },
        { portfolio: 'G032', performance: '1.62', down: true, fum: '760', vol: '76' },
      ],
    },
    {
      title: '2017',
      portfolios: [
        { portfolio: 'G003', performance: '1.34', down: false, fum: '789', vol: '91' },
        { portfolio: 'G004', performance: '0.95', down: false, fum: '793', vol: '93' },
        { portfolio: 'G005', performance: '0.25', down: true, fum: '791', vol: '92' },
        { portfolio: 'G006', performance: '1.72', down: false, fum: '797', vol: '95' },
        { portfolio: 'G023', performance: '2.62', down: true, fum: '786', vol: '90' },
        { portfolio: 'G024', performance: '0.72', down: false, fum: '789', vol: '91' },
        { portfolio: 'G026', performance: '0.78', down: true, fum: '784', vol: '89' },
        { portfolio: 'G027', performance: '0.36', down: true, fum: '782', vol: '88' },
        { portfolio: 'G028', performance: '0.55', down: false, fum: '787', vol: '90' },
        { portfolio: 'G030', performance: '1.81', down: true, fum: '779', vol: '86' },
        { portfolio: 'G031', performance: '1.12', down: true, fum: '774', vol: '84' },
        { portfolio: 'G032', performance: '0.52', down: false, fum: '776', vol: '95' },
      ],
    },
  ];

  constructor() {
  }

  // TODO: observables
  getData() {
    return this.data;
  }
}
