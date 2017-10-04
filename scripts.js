var copyToClipboard = new Clipboard('#copyToClipboard')
var localStorageKey = 'selectedPokemon'
var cachedData = false

function getSelectedPokemon() {
  var selected = []

  if (window.localStorage && window.localStorage.getItem) {
    if (window.localStorage.getItem(localStorageKey)) {
      selected = JSON.parse(window.localStorage.getItem(localStorageKey))
      cachedData = true
    }
  }

  return selected
}

var selected = getSelectedPokemon()
var rare = ['DRATINI', 'MAREEP', 'LARVITAR', 'CHANSEY', 'PUPITAR', 'FLAAFFY', 'DRAGONAIR']

var pokemonListDOM = document.createDocumentFragment()

pokemonList.forEach(function (pokemon) {
  var input = document.createElement('input')
  input.type = 'checkbox'
  input.value = pokemon.id.toString()

  if (!pokemon.candyToEvolve) {
    input.disabled = true
  }

  var label = document.createElement('label')

  var div = document.createElement('div')
  div.className = 'pokemon text-capitalize col-sm-4 col-md-2'
  div.dataset.id = pokemon.id.toString()

  if (!pokemon.candyToEvolve) {
    div.className = div.className + ' text-secondary disabled'
  } else {
    div.className = div.className + ' text-primary candy_' + pokemon.candyToEvolve
    div.dataset.candyToEvolve = pokemon.candyToEvolve.toString()
  }

  if (rare.indexOf(pokemon.name) !== -1) {
    div.className = div.className + ' rare'
  }

  if (!pokemon.preEvolution) {
    div.className = div.className + ' basic'

    if (pokemon.candyToEvolve) {
      div.className = div.className + ' text-success'

      if (!cachedData && pokemon.candyToEvolve <= 25 && !pokemon.itemRequired && div.className.indexOf('rare') === -1) {
        input.checked = true
        selected.push(pokemon.id)
      }
    }
  }

  if (cachedData && selected.indexOf(pokemon.id) !== -1) {
    input.checked = true
  }

  var pokemonName = document.createTextNode(' ' + pokemon.name.replace(/_/g, ' ').replace('FEMALE', '♀').replace('MALE', '♂'))

  label.appendChild(input)
  label.appendChild(pokemonName)
  div.appendChild(label)
  pokemonListDOM.appendChild(div)
})

var evolve = document.getElementById('evolve')

var pokemonListContainer = document.getElementById('pokemonListContainer')
pokemonListContainer.appendChild(pokemonListDOM)

function sortNumbers(a, b) {
  return a - b;
}

function updateSelected(id) {
  id = parseInt(id, 10)
  var location = selected.indexOf(id)

  if (location !== -1) {
    selected.splice(location, 1)
  } else {
    selected.push(id)
  }

  generateEvolveFormula()
}

function generateEvolveFormula() {
  selected.sort(sortNumbers)
  evolve.textContent = 'evolve&' + selected.join(',')

  if (window.localStorage && window.localStorage.setItem) {
    window.localStorage.setItem(localStorageKey, JSON.stringify(selected))
  }
}
generateEvolveFormula()

jQuery(function () {
  jQuery(pokemonListContainer).on('click', function (e) {
    e.stopPropagation()
    e.preventDefault()

    var target = jQuery(e.target)
    var pokemon = target.parents('div.pokemon')
    if (pokemon.length && !pokemon.hasClass('disabled')) {
      if (pokemon.find('input').is(':checked')) {
        pokemon.find('input').prop('checked', false)
      } else {
        pokemon.find('input').prop('checked', true)
      }
      updateSelected(pokemon.data('id'))
    }
  })

  jQuery('[data-toggle="tooltip"]').tooltip()
})