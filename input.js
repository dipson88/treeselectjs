class TreeselectInput {
  constructor ({ DOMelement, value, showOnlyNumberMode }) {
    this.DOMelement = DOMelement
    this.value = value ?? []

    this.showOnlyNumberMode = showOnlyNumberMode ?? false

    this.render()
  }

  render () {
    const container = this.#createContainer()
    this.DOMelement.appendChild(container)

    // setTimeout(() => {
    //   this.updateValue([{ value: '3', name: 'teseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeet 3 update' }])
    // }, 2000)
  }

  updateValue (value) {
    this.value = value
    const tags = this.DOMelement.querySelector('.input-container-tags')
    tags.innerHTML = ''
    this.#addTagsByValue(tags)
    console.log('updateValue')
  }

  clear () {
    this.value = []
    const input = this.DOMelement.querySelector('.input-container-edit')
    input.value = ''
    const tags = this.DOMelement.querySelector('.input-container-tags')
    tags.innerHTML = ''
    console.log('clear')
  }

  clearSearchValue () {
    const input = this.DOMelement.querySelector('.input-container-edit')
    input.value = ''
    console.log('clearSearch')
  }

  removeElement (id) {
    this.value = this.value.filter(v => v.id !== id)
    const tags = this.DOMelement.querySelector('.input-container-tags')
    const el = tags.querySelector(`[element-id="${id}"]`)

    if (el) {
      tags.removeChild(el)
      this.#emitInput()
    }
  }

  #emitInput () {
    console.log('input', this.value)
  }

  #emitSearch (value) {
    console.log('search', value)
  }

  #createContainer () {
    const container = document.createElement('div')
    container.classList.add('input-container')

    container.addEventListener('focus', () => {
      container.classList.add('input-container-focused')
    }, true)
    container.addEventListener('blur', () => {
      container.classList.remove('input-container-focused')
    }, true)

    const tags = this.#createTagsSection()
    const input = this.#createInput()

    container.append(tags, input)

    return container
  }

  #createTagsSection () {
    const tags = document.createElement('div')
    tags.classList.add('input-container-tags')
    this.#addTagsByValue(tags)

    return tags
  }

  #addTagsByValue (tagsSection) {
    if (this.showOnlyNumberMode) {
      tagsSection.appendChild(this.#createOnlyNumberElement(this.value))
    } else {
      this.value.forEach(value =>  {
        tagsSection.appendChild(this.#createElement(value))
      })
    }
  }

  #createElement ({ id, name }) {
    const element = document.createElement('div')
    element.setAttribute('element-id', id)
    element.setAttribute('title', name)
    element.classList.add('input-container-element')

    element.addEventListener('click', (event) => {
      this.removeElement(id)
    })

    const crossElement = this.#createElementCross()
    const tagElement = this.#createElementTag(name)

    element.append(tagElement, crossElement)

    return element
  }

  #createElementTag (name) {
    const elementTag = document.createElement('span')
    elementTag.classList.add('input-container-element-name')
    elementTag.innerHTML = name

    return elementTag
  }

  #createElementCross () {
    const elementCross = document.createElement('span')
    elementCross.classList.add('input-container-element-cross')

    return elementCross
  }

  #createOnlyNumberElement (values) {
    const el = document.createElement('span')

    if (values.length === 1) {
      const [value] = values
      el.innerHTML = value.name

      return el
    }

    el.innerHTML = `${values.length} elements selected`

    return el
  }

  #createInput () {
    const input = document.createElement('input')
    input.classList.add('input-container-edit')

    input.addEventListener('keydown', (event) => {
      if (event.code === 'Backspace' && input.value === '' && this.value.length) {
        this.removeElement(this.value[this.value.length - 1].id)
      }
    })

    input.addEventListener('input', (event) => {
      this.#emitSearch(event.target.value)
    })

    return input
  }
}

export default TreeselectInput
