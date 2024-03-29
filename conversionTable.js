const conversionTable = {
  temperature: {
    celsius: {
      celsius: celsius => celsius,
      fahrenheit: celsius => (celsius * 9) / 5 + 32,
      kelvin: celsius => celsius + 273.15,
    },
    fahrenheit: {
      celsius: fahrenheit => ((fahrenheit - 32) * 5) / 9,
      fahrenheit: fahrenheit => fahrenheit,
      kelvin: fahrenheit => ((fahrenheit - 32) * 5) / 9 + 273.15,
    },
    kelvin: {
      celsius: kelvin => kelvin - 273.15,
      fahrenheit: kelvin => ((kelvin - 273.15) * 9) / 5 + 32,
      kelvin: kelvin => kelvin,
    },
  },
  length: {
    inches: {
      inches: 1,
      feet: 1 / 12,
      yards: 1 / 36,
      miles: 1 / 63360,
      millimeters: 25.4,
      centimeters: 2.54,
      meters: 0.0254,
      kilometers: 0.0000254,
    },
    feet: {
      inches: 12,
      feet: 1,
      yards: 1 / 3,
      miles: 1 / 5280,
      millimeters: 304.8,
      centimeters: 30.48,
      meters: 0.3048,
      kilometers: 0.0003048,
    },
    yards: {
      inches: 36,
      feet: 3,
      yards: 1,
      miles: 1 / 1760,
      millimeters: 914.4,
      centimeters: 91.44,
      meters: 0.9144,
      kilometers: 0.0009144,
    },
    miles: {
      inches: 63360,
      feet: 5280,
      yards: 1760,
      miles: 1,
      millimeters: 1609344,
      centimeters: 160934.4,
      meters: 1609.344,
      kilometers: 1.609344,
    },
    millimeters: {
      centimeters: 1 / 10,
      inches: 1 / 25.4,
      feet: 1 / 304.8,
      yards: 1 / 914.4,
      miles: 1 / 1609344,
      millimeters: 1,
      centimeters: 1 / 10,
      meters: 1 / 1000,
      kilometers: 1 / 1000000,
    },
    centimeters: {
      millimeters: 10,
      inches: 1 / 2.54,
      feet: 1 / 30.48,
      yards: 1 / 91.44,
      miles: 1 / 160934.4,
      centimeters: 1,
      meters: 1 / 100,
      kilometers: 1 / 100000,
    },
    meters: {
      centimeters: 100,
      millimeters: 1000,
      inches: 1 / 0.0254,
      feet: 1 / 0.3048,
      yards: 1 / 0.9144,
      miles: 1 / 1609.344,
      meters: 1,
      kilometers: 1 / 1000,
    },
    kilometers: {
      meters: 1000,
      millimeters: 1000000,
      centimeters: 100000,
      inches: 1 / 0.0000254,
      feet: 1 / 0.0003048,
      yards: 1 / 0.0009144,
      miles: 1 / 1.609344,
      kilometers: 1,
    },
  },
  area: {
    squareInches: {
      squareInches: 1,
      squareFeet: 1 / 144,
      squareYards: 1 / 1296,
      squareMiles: 1 / 4014489600,
      squareMillimeters: 645.16,
      squareCentimeters: 6.4516,
      squareMeters: 0.00064516,
      squareKilometers: 6.4516e-10,
    },
    squareFeet: {
      squareInches: 144,
      squareFeet: 1,
      squareYards: 1 / 9,
      squareMiles: 1 / 27878400,
      squareMillimeters: 92903.04,
      squareCentimeters: 929.0304,
      squareMeters: 0.09290304,
      squareKilometers: 9.290304e-8,
    },
    squareYards: {
      squareInches: 1296,
      squareFeet: 9,
      squareYards: 1,
      squareMiles: 1 / 3097600,
      squareMillimeters: 836127.36,
      squareCentimeters: 8361.2736,
      squareMeters: 0.83612736,
      squareKilometers: 8.3612736e-7,
    },
    squareMiles: {
      squareInches: 4014489600,
      squareFeet: 27878400,
      squareYards: 3097600,
      squareMiles: 1,
      squareMillimeters: 2589988110336,
      squareCentimeters: 25899881103.36,
      squareMeters: 2589988.110336,
      squareKilometers: 2.589988110336,
    },
    squareMillimeters: {
      squareCentimeters: 0.01,
      squareInches: 1 / 645.16,
      squareFeet: 1 / 92903.04,
      squareYards: 1 / 836127.36,
      squareMiles: 1 / 2589988110336,
      squareMillimeters: 1,
      squareMeters: 1 / 1000000,
      squareKilometers: 1 / 1000000000000,
    },
    squareCentimeters: {
      squareMillimeters: 100,
      squareInches: 1 / 6.4516,
      squareFeet: 1 / 929.0304,
      squareYards: 1 / 8361.2736,
      squareMiles: 1 / 25899881103.36,
      squareCentimeters: 1,
      squareMeters: 1 / 10000,
      squareKilometers: 1 / 10000000000,
    },
    squareMeters: {
      squareCentimeters: 10000,
      squareMillimeters: 1000000,
      squareInches: 1 / 0.00064516,
      squareFeet: 1 / 0.09290304,
      squareYards: 1 / 0.83612736,
      squareMiles: 1 / 2589988.110336,
      squareMeters: 1,
      squareKilometers: 1 / 1000000,
    },
    squareKilometers: {
      squareMeters: 1000000,
      squareMillimeters: 1000000000000,
      squareCentimeters: 10000000000,
      squareInches: 1 / 6.4516e-10,
      squareFeet: 1 / 9.290304e-8,
      squareYards: 1 / 8.3612736e-7,
      squareMiles: 1 / 2.589988110336,
      squareKilometers: 1,
    },
  },

  volume: {
    teaspoons: {
      teaspoons: 1,
      tablespoons: 1 / 3,
      fluidOunces: 1 / 6,
      cups: 1 / 48,
      pints: 1 / 96,
      quarts: 1 / 192,
      gallons: 1 / 768,
      milliliters: 4.92892,
      liters: 0.00492892,
    },
    tablespoons: {
      teaspoons: 3,
      tablespoons: 1,
      fluidOunces: 1 / 2,
      cups: 1 / 16,
      pints: 1 / 32,
      quarts: 1 / 64,
      gallons: 1 / 256,
      milliliters: 14.7868,
      liters: 0.0147868,
    },
    fluidOunces: {
      teaspoons: 6,
      tablespoons: 2,
      fluidOunces: 1,
      cups: 1 / 8,
      pints: 1 / 16,
      quarts: 1 / 32,
      gallons: 1 / 128,
      milliliters: 29.5735,
      liters: 0.0295735,
    },
    cups: {
      teaspoons: 48,
      tablespoons: 16,
      fluidOunces: 8,
      cups: 1,
      pints: 1 / 2,
      quarts: 1 / 4,
      gallons: 1 / 16,
      milliliters: 236.588,
      liters: 0.236588,
    },
    pints: {
      teaspoons: 96,
      tablespoons: 32,
      fluidOunces: 16,
      cups: 2,
      pints: 1,
      quarts: 1 / 2,
      gallons: 1 / 8,
      milliliters: 473.176,
      liters: 0.473176,
    },
    quarts: {
      teaspoons: 192,
      tablespoons: 64,
      fluidOunces: 32,
      cups: 4,
      pints: 2,
      quarts: 1,
      gallons: 1 / 4,
      milliliters: 946.353,
      liters: 0.946353,
    },
    gallons: {
      teaspoons: 768,
      tablespoons: 256,
      fluidOunces: 128,
      cups: 16,
      pints: 8,
      quarts: 4,
      gallons: 1,
      milliliters: 3785.41,
      liters: 3.78541,
    },
    milliliters: {
      teaspoons: 0.202884,
      tablespoons: 0.067628,
      fluidOunces: 0.033814,
      cups: 0.00422675,
      pints: 0.00211338,
      quarts: 0.00105669,
      gallons: 0.000264172,
      milliliters: 1,
      liters: 0.001,
    },
    liters: {
      teaspoons: 202.884,
      tablespoons: 67.628,
      fluidOunces: 33.814,
      cups: 4.22675,
      pints: 2.11338,
      quarts: 1.05669,
      gallons: 0.264172,
      milliliters: 1000,
      liters: 1,
    },
  },
}
