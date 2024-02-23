function convertMeasurement(event) {
  event.preventDefault()

  // Get the input values
  const value = parseFloat(document.querySelector('input[name="value"]').value)
  const fromUnit = document.querySelector('select[name="from"]').value
  const toUnit = document.querySelector('select[name="to"]').value

  // Conversion table with each unit convertible to itself
  const conversionTable = {
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
  }

  // Perform the conversion
  let convertedValue
  if (
    conversionTable.hasOwnProperty(fromUnit) &&
    conversionTable[fromUnit].hasOwnProperty(toUnit)
  )
    convertedValue = `= ${(value * conversionTable[fromUnit][toUnit]).toFixed(
      4
    )} ${toUnit}`
  else convertedValue = ''

  // Update the result element
  document.getElementById('result').textContent = convertedValue
}
