export default class Select {
  constructor(sel, data) {
    this.sel = sel
    this.data = data
    this.init()
    this.visualSelect()
    this.resizeSelect()
    this.addOption()
    this._height = this.resizeSelect()
    this._labels = []
    this._searchResults = this.data.options
    this.searchSelect()
    this.closeAllSelect()
  }
  init() {
    console.log(this._searchResults)
    this.sel.insertAdjacentHTML('beforeend', this._toHTML(this.data))
  }
  resizeSelect() {
    const list = this.sel.querySelector('.select__main')
    const placeholder = this.sel.querySelector('.select__placeholder')

    this.sel.style.height = placeholder.offsetHeight / 14 + 'em'
    list.style.height = placeholder.offsetHeight / 14 + 'em'
    return placeholder.offsetHeight / 14
  }

  visualSelect() {
    const placeholder = this.sel.querySelector('.select__placeholder')
    const close = this.sel.querySelector('.select__close')

    placeholder.addEventListener('click', this.toggleSelect.bind(this))
    close.addEventListener('click', this.toggleSelect.bind(this))
  }
  openSelect() {
    const list = this.sel.querySelector('.select__main')
    const close = this.sel.querySelector('.select__close')

    close.classList.add('anim')
    list.style.height = 'auto'
    list.style.zIndex = '999'
    list.setAttribute('data-open', 1)
  }
  closeSelect() {
    const list = this.sel.querySelector(`.select__main`)
    const close = this.sel.querySelector(`.select__close`)

    list.style.height = this._height + 'em'
    close.classList.remove('anim')

    list.setAttribute('data-open', 0)
  }
  toggleSelect() {
    const list = this.sel.querySelector('.select__main')
    let isOpenEl = +list.getAttribute('data-open')

    if (isOpenEl) this.closeSelect()
    else this.openSelect()
  }
  closeAllSelect() {
    document.addEventListener('click', (e) => {
      if (!this.sel.contains(e.target)) {
        let select = this.sel.querySelector('.select__main')
        select.style.height = this._height + 'em'
        select.style.zIndex = 'auto'
        select.setAttribute('data-open', false)
      }
    })
  }
  addOption() {
    const list = this.sel.querySelector('.select__list')
    list.addEventListener('click', (e) => {
      const label = e.target.dataset.label
      if (label && e.target.classList.contains('disable')) return
      e.target.classList.add('disable')
      console.log(label)
      this.drawLabel(label)
    })
  }
  drawLabel(label) {
    const placeholder = this.sel.querySelector('.select__placeholder')
    const { multiSelect } = this.data
    if (!multiSelect) {
      placeholder.innerHTML = label
      this.enableOption(label, true)
      this.closeSelect()
      return
    }
    this._labels.push(label)
    this._labels = this._labels.filter((el) => el)

    placeholder.innerHTML = this.listLabel(this._labels)
    this._height = placeholder.offsetHeight / 14 - 0.4
    this.sel.style.height = this._height + 'em'
    this.closeSelect()
    this.removeLabel()
  }

  removeLabel() {
    const placeholder = this.sel.querySelector('.select__placeholder')
    if (!this._labels.length) {
      placeholder.innerHTML = this.data.placeholder
      this._height = this.resizeSelect()
    }

    placeholder.addEventListener('click', (e) => {
      let label = e.target.dataset.label

      if (this._labels.includes(label)) {
        let inx = this._labels.indexOf(label)
        this._labels.splice(inx, 1)
        this.drawLabel()
        this.enableOption(label)
      }
    })
  }
  enableOption(label, multi = false) {
    const list = this.sel.querySelectorAll('.select__option')

    list.forEach((element) => {
      if (multi && element.dataset.label !== label)
        element.classList.remove('disable')
      if (element.dataset.label === label && !multi)
        element.classList.remove('disable')
    })
  }
  searchSelect() {
    const { search } = this.data
    if (!search) return
    const searchInput = this.sel.querySelector('.select__search')
    searchInput.addEventListener('input', this.searchOptions.bind(this))
  }
  searchOptions(e) {
    let result = []
    let inputValue = e.target.value.toLowerCase()
    this._searchResults.forEach((el) => {
      let optionTitle = el.title.toLowerCase()
      if (optionTitle.indexOf(inputValue) >= 0) {
        result.push(el)
      }
    })
    this.drawSearchResult(result)
  }
  drawSearchResult(result = []) {
    const listOptions = this.sel.querySelector('.select__list')
    listOptions.innerHTML = this.listOption(result)
  }
  listLabel(arr) {
    return arr
      .map(
        (el) =>
          `<span class='select__label'>${el} <i data-label=${el}>&times;</i></span>`
      )
      .join('')
  }
  listOption(arr) {
    return (
      arr
        .map(
          (el) =>
            `<li class='select__option' data-label=${el.title}>${el.title}</li>`
        )
        .join('') ||
      `<li class='select__option disable' >Ничего не найдено</li>`
    )
  }
  _toHTML(data) {
    const { options, search, placeholder, multiSelect } = data
    let searchEl = search ? `<input class='select__search' type='text'/>` : ''
    let charClose = multiSelect
      ? `<span class='select__close'>&times;</span>`
      : `<i class="select__close select__arrow"></i>`
    let allOptions = options
      ? options
          .map(
            (el) =>
              `<li class='select__option' data-label=${el.title}>${el.title}</li>`
          )
          .join('')
      : ''

    return `
      <div class='select' >
        <div class='select__main' data-open=0>
          ${charClose}
          <span class='select__placeholder' data-select='1'>${
            placeholder || ''
          }</span>
          <div>
            ${searchEl}
            <ul class='select__list'>
              ${allOptions}
            </ul>
          </div>
        </div>
      </div>
    `
  }
}

// new Select(document.querySelector('.select-wrapper'), {
//   multiSelect: true,
//   search: true,
//   placeholder: 'По каким жанрам искать?',
//   options: [
//     {
//       title: 'Приключение',
//     },
//     {
//       title: 'Ниндзя',
//     },
//     {
//       title: 'Якудза',
//     },
//     {
//       title: 'Военная-тематика',
//     },
//     {
//       title: 'Безумие',
//     },
//     {
//       title: 'Вампиры',
//     },
//   ],
// })
// new Select(document.querySelector('.select-wrapper2'), {
//   multiSelect: true,
//   search: true,
//   placeholder: 'По каким жанрам искать?',
//   options: [
//     {
//       title: 'Приключение',
//     },
//     {
//       title: 'Ниндзя',
//     },
//     {
//       title: 'Якудза',
//     },
//     {
//       title: 'Военная-тематика',
//     },
//     {
//       title: 'Безумие',
//     },
//     {
//       title: 'Вампиры',
//     },
//   ],
// })
