import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Reporting',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'AUM Segmentation',
        link: '/pages/reporting/AUM_Segmentation',
      },
    ],
  },
  {
    title: 'Theodore',
    icon: 'nb-tables',
    children: [
      {
        title: 'Bond',
        children: [
          {
            title: 'Master',
            link: '/pages/bond/master',
          },
          {
            title: 'Coupons',
            children: [
              {
                title: 'Accrual',
                link: '/pages/bond/accrual',
              },
              {
                title: 'Receipt',
                link: '/pages/bond/receipt',
              },
            ],
          },
          {
            title: 'Ratings',
            children: [
              {
                title: 'Rating',
                link: '/pages/bond/rating',
              },
              {
                title: 'Rating Map',
                link: '/pages/bond/rating-map',
              },
            ]
          },
          {
            title: 'Issuer',
            link: '/pages/bond/issuer',
          },
          {
            title: 'Trades',
            children: [
              {
                title: 'Trade',
                link: '/pages/bond/trade',
              },
              {
                title: 'Competitive',
                link: '/pages/bond/competitive',
              },
              {
                title: 'Maturity',
                link: '/pages/bond/maturity',
              },
              {
                title: 'Order',
                link: '/pages/bond/order',
              },
            ],
          },
          {
            title: 'Prices',
            children: [
              {
                title: 'Accrued',
                link: '/pages/bond/accrued',
              },
              {
                title: 'Capital',
                link: '/pages/bond/capital',
              },
              {
                title: 'Duration',
                link: '/pages/bond/duration',
              },
              {
                title: 'Return',
                link: '/pages/bond/return',
              },
              {
                title: 'Index Factor',
                link: '/pages/bond/index-factor',
              },
            ],
          },
        ],
      },
      {
        title: 'Cash',
        children: [
          {
            title: 'Flow',
            link: '/pages/cash/flow',
          },
          {
            title: 'Accrual',
            link: '/pages/cash/accrual',
          },
          {
            title: 'Movement',
            link: '/pages/cash/movement',
          },
        ],
      },
      {
        title: 'Equity',
        children: [
          {
            title: 'Master',
            link: '/pages/equity/master',
          },
          {
            title: 'Dividends',
            children: [
              {
                title: 'Accrual',
                link: '/pages/equity/accrual',
              },
              {
                title: 'Receipt',
                link: '/pages/equity/receipt',
              },
            ],
          },
          {
            title: 'Trades',
            children: [
              {
                title: 'Trade',
                link: '/pages/equity/trade',
              },
              {
                title: 'Order',
                link: '/pages/equity/order',
              },
            ],
          },
          {
            title: 'Prices',
            children: [
              {
                title: 'Price',
                link: '/pages/equity/price',
              },
              {
                title: 'Return',
                link: '/pages/equity/return',
              },
            ],
          },
        ],
      },
      {
        title: 'Future',
        children: [
          {
            title: 'Master',
            link: '/pages/future/master',
          },
          {
            title: 'Trades',
            children: [
              {
                title: 'Trade',
                link: '/pages/future/trade',
              },
              {
                title: 'Order',
                link: '/pages/future/order',
              },
            ],
          },
          {
            title: 'Prices',
            children: [
              {
                title: 'Price',
                link: '/pages/future/price',
              },
              {
                title: 'Return',
                link: '/pages/future/return',
              },
              {
                title: 'Duration',
                link: '/pages/future/duration',
              },
              {
                title: 'Yield',
                link: '/pages/future/yield',
              },
            ],
          },
        ],
      },
      {
        title: 'Portfolio',
        children: [
          {
            title: 'Master',
            link: '/pages/portfolio/master',
          },
          {
            title: 'Performance',
            link: '/pages/portfolio/performance',
          },
          {
            title: 'Unit Price',
            link: '/pages/portfolio/price',
          },
          {
            title: 'Management Fee',
            link: '/pages/portfolio/fees',
          },
          {
            title: 'Witholding Tax',
            link: '/pages/portfolio/tax',
          },
        ],
      },
      {
        title: 'Option',
        children: [
          {
            title: 'Master',
            link: '/pages/option/master',
          },
          {
            title: 'Price',
            link: '/pages/option/price',
          },
        ],
      },
      {
        title: 'Money',
        children: [
          {
            title: 'Master',
            link: '/pages/money/master',
          },
          {
            title: 'Drawrer',
            link: '/pages/money/performance',
          },
          {
            title: 'Issuer',
            link: '/pages/money/price',
          },
          {
            title: 'Maturing',
            link: '/pages/money/fees',
          },
          {
            title: 'Price',
            link: '/pages/money/tax',
          },
          {
            title: 'Trade',
            link: '/pages/money/trade',
          },
        ],
      },
      {
        title: 'Other',
        children: [
          {
            title: 'Index Master',
            link: '/pages/masters/index-master',
          },
          {
            title: 'Ref Rate Master',
            link: '/pages/masters/refrate-master',
          },
          {
            title: 'Ref Rate Member',
            link: '/pages/masters/refrate-member',
          },
        ],
      },
    ]
  },
  {
    title: 'Utilities',
    icon: 'nb-gear',
    children: [
      {
        title: 'Dataloader',
        link: '/pages/tables/log',
      },
      {
        title: 'Fx Planner',
        link: '/pages/tables/fxplanner',
      },
      {
        title: 'Applications/Redemptions',
        link: '/pages/tables/ApplicationRedemption',
      },
      {
        title: 'Corporate Actions',
        link: '/pages/tables/CACSEntry',
      },
    ],
  },
];
