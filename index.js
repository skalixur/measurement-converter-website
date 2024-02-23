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
  let convertedValue
  if (category === 'temperature') {
    let convertTemperature = conversionTable[category][fromUnit][toUnit]
    convertedValue = convertTemperature(value, fromUnit, toUnit)
  } else {
    convertedValue = value * conversionTable[category][fromUnit][toUnit]
  }

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
