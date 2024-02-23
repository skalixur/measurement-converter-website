const conversionTable = {
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
  volume: {
    liters: {
      liters: 1,
      milliliters: 1000,
      cubicInches: 61.0237,
      cubicFeet: 0.0353147,
      cubicYards: 0.00130795,
      gallons: 0.264172,
      quarts: 1.05669,
      pints: 2.11338,
      cups: 4.22675,
    },
    milliliters: {
      liters: 1 / 1000,
      milliliters: 1,
      cubicInches: 0.0610237,
      cubicFeet: 0.0000353147,
      cubicYards: 0.00000130795,
      gallons: 0.000264172,
      quarts: 0.00105669,
      pints: 0.00211338,
      cups: 0.00422675,
    },
    cubicInches: {
      liters: 1 / 61.0237,
      milliliters: 1 / 0.0610237,
      cubicInches: 1,
      cubicFeet: 0.000578704,
      cubicYards: 0.0000214335,
      gallons: 0.000145833,
      quarts: 0.000578704,
      pints: 0.00115741,
      cups: 0.00231481,
    },
    cubicFeet: {
      liters: 1 / 0.0353147,
      milliliters: 1 / 0.0000353147,
      cubicInches: 1728,
      cubicFeet: 1,
      cubicYards: 0.037037,
      gallons: 7.48052,
      quarts: 29.9221,
      pints: 59.8442,
      cups: 119.688,
    },
    cubicYards: {
      liters: 1 / 0.00130795,
      milliliters: 1 / 0.00000130795,
      cubicInches: 46656,
      cubicFeet: 27,
      cubicYards: 1,
      gallons: 201.974,
      quarts: 807.896,
      pints: 1615.79,
      cups: 3231.58,
    },
    gallons: {
      liters: 3.78541,
      milliliters: 3785.41,
      cubicInches: 231,
      cubicFeet: 0.133681,
      cubicYards: 0.00495113,
      gallons: 1,
      quarts: 4,
      pints: 8,
      cups: 16,
    },
    quarts: {
      liters: 0.946353,
      milliliters: 946.353,
      cubicInches: 57.75,
      cubicFeet: 0.0334201,
      cubicYards: 0.00123778,
      gallons: 0.25,
      quarts: 1,
      pints: 2,
      cups: 4,
    },
    pints: {
      liters: 0.473176,
      milliliters: 473.176,
      cubicInches: 28.875,
      cubicFeet: 0.0167101,
      cubicYards: 0.000618891,
      gallons: 0.125,
      quarts: 0.5,
      pints: 1,
      cups: 2,
    },
    cups: {
      liters: 0.236588,
      milliliters: 236.588,
      cubicInches: 14.4375,
      cubicFeet: 0.00835503,
      cubicYards: 0.000309445,
      gallons: 0.0625,
      quarts: 0.25,
      pints: 0.5,
      cups: 1,
    },
  },
}

function convertMeasurement(event) {
  event.preventDefault()

  // Get the input values
  const value = parseFloat(document.querySelector('input[name="value"]').value)
  const fromUnit = unparseCamelCasing(
    document.querySelector('select[name="from"]').value
  )
  const toUnit = unparseCamelCasing(
    document.querySelector('select[name="to"]').value
  )

  // Find the conversion category (length, volume, etc.)
  let category
  for (const key in conversionTable) {
    if (conversionTable[key][fromUnit]) {
      category = key
      break
    }
  }

  // Perform the conversion
  let convertedValue = value * conversionTable[category][fromUnit][toUnit]
  if (isNaN(convertedValue)) {
    convertedValue = 'Invalid conversion'
  }
  convertedValue = `= ${convertedValue.toFixed(4)} ${parseCamelCasing(toUnit)}`

  // Update the result element
  document.getElementById('result').textContent = convertedValue
}

function unparseCamelCasing(str) {
  return str
    .replace(/\s(.)/g, function (match, group1) {
      return group1.toUpperCase()
    })
    .replace(/^\w/, function (str) {
      return str.toLowerCase()
    })
}
function parseCamelCasing(camelCaseString) {
  return camelCaseString
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, function (str) {
      return str.toUpperCase()
    })
}

window.onload = function () {
  const selectFrom = document.querySelector('select[name="from"]')
  const selectTo = document.querySelector('select[name="to"]')

  const units = Object.keys(conversionTable)
  units.forEach(unit => {
    const optgroupElement = document.createElement('optgroup')
    optgroupElement.label = parseCamelCasing(unit)

    const subUnits = Object.keys(conversionTable[unit])
    subUnits.forEach(subUnit => {
      const optionElement = document.createElement('option')
      optionElement.value = subUnit
      optionElement.textContent = parseCamelCasing(subUnit)
      optgroupElement.appendChild(optionElement)
    })

    selectFrom.appendChild(optgroupElement.cloneNode(true))
  })

  function updateSelectToOptions() {
    const selectedGroup =
      selectFrom.options[selectFrom.selectedIndex].parentNode.label
    selectTo.innerHTML = '' // Clear existing options

    const selectedOptgroup = Array.from(
      selectFrom.getElementsByTagName('optgroup')
    ).find(optgroup => optgroup.label === selectedGroup)
    selectTo.appendChild(selectedOptgroup.cloneNode(true)) // Add options from the selected group
  }

  updateSelectToOptions()
  selectFrom.addEventListener('change', updateSelectToOptions)
}
