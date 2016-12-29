export type Doneness = 'rare' | 'medium' | 'wellDone';

export type Meat = {
  weightFactor: number,
  timeFactors: {[doneness: string]: number},
  fixedDescription: string,
  variableDescription: string,
};

export const MEATS: {[roastType: string]: Meat} = {
  turkey: {
    weightFactor: 500,
    timeFactors: {
      wellDone: 20,
    },
    fixedDescription: '180C for first 20 mins.',
    variableDescription: ' Then 160C for next #.',
  },
  beef: {
    weightFactor: 450,
    timeFactors: {
      rare: 20,
      medium: 25,
      wellDone: 30,
    },
    fixedDescription: '180C',
    variableDescription: ' for #.',
  },
  lamb: {
    weightFactor: 450,
    timeFactors: {
      rare: 20,
      medium: 25,
      wellDone: 30,
    },
    fixedDescription: '180C',
    variableDescription: ' for #.',
  },
  venison: {
    weightFactor: 450,
    timeFactors: {
      rare: 20,
      medium: 25,
      wellDone: 30,
    },
    fixedDescription: '180C',
    variableDescription: ' for #.',
  },
  pork: {
    weightFactor: 450,
    timeFactors: {
      wellDone: 35,
    },
    fixedDescription: '180C',
    variableDescription: ' for #.',
  },
  chicken: {
    weightFactor: 500,
    timeFactors: {
      wellDone: 20,
    },
    fixedDescription: '180C for first 20 mins.',
    variableDescription: ' Then 160C for next #.',
  },
  goose: {
    weightFactor: 500,
    timeFactors: {
      wellDone: 20,
    },
    fixedDescription: '200C for first 20 mins. ',
    variableDescription: ' Then 160C for next #.',
  },
  duck: {
    weightFactor: 500,
    timeFactors: {
      wellDone: 20,
    },
    fixedDescription: '200C for first 20 mins. ',
    variableDescription: ' Then 160C for next #.',
  },
};
