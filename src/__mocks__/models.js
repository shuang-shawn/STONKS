import { v4 as uuid } from 'uuid';

export const models = [
  {
    id: uuid(),
    name: 'Low',
    description: 'Dollar Cost Averaging Algorithm - This algorithm is for users who like a fine balance. The basic idea is to break down a large order into small orders and place them in the market over time. The logic behind it is that price fluctuates many times, and you may buy the stock cheaper overall compared to just investing in the stock at one point in time. works well in long term ',
    media: '/static/images/products/product_2.png',
  },
  {
    id: uuid(),
    name: 'Medium',
    description: 'Moving Average Algorithm - This algorithm is for users prefer to play it safe. Simple moving average crossover, which buys a stock if its short-period moving average value surpasses its long-period moving average value, and sells if the inverse event happens.                                                                                                                    ',
    media: '/static/images/products/product_3.png',
  },
  {
    id: uuid(),
    name: 'High',
    description: ' RSI Algorithm - This algorithm is for users who are more risk tolerant. High risk, high reward. It measures the speed and change of price movements using a scale of 0 to 100.  a higher RSI value is said to indicate an overbought asset (time to sell) while a lower RSI value is said to indicate an oversold asset (time to buy)                                                  ',
    media: '/static/images/products/product_4.png',
  },
  
];    
