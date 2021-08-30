import { Content } from './content'
import showNavbar from './navbar'
import { goods } from './goods'

function _toHTMLbasicItem(data) {
  let genres = !data.genres
    ? ''
    : data.genres.filter((item) => item !== null).map((el) => `<li>${el}</li>`)
  let hideInfo = !(data.type && data.series && data.year)
    ? 'style="display:none"'
    : ''
  let hideGenres = !(genres && data.update) ? 'style="display:none"' : ''
  return `
      <li class="basic__item basic-item" data-id = ${data.id} >
        <a href="anime.html#${data.id}" class="basic-item__link">
          <span class="basic-item__date">13 мая</span>
          <img
            src=${data.img || '/'}
            class="basic-item__image"
            alt=""
          />
          <div class="basic-item__desc">
            <span class="basic-item__title">
              ${data.title} 
            </span>
            <span class='basic-item__separ'>${genres ? '-' : ''}</span>
            <ul ${hideGenres} class='basic-item__genres'>${genres}</ul>
            <span ${hideInfo}>
              Тип: ${data.type} | Серий: ${data.series} | ${data.year}
            </span>
          </div>
        </a>
      </li>
  `
}
function _toHTMLAnimeCard(data) {
  let genres = !data.genres
    ? ''
    : data.genres
        .filter((item) => item !== null)
        .map((el) => `<li><a href=''>${el}</a></li>`)
  return `
    <article class="new-anime__item">
      <a href="anime.html#${data.id}">
        <img
        class="new-anime__img"
        src="${data.img}"
        alt=""
        />
      </a>
      <div class="new-anime__desc">
        <a href="anime.html#${data.id}" class="new-anime__title"
          >${data.title}</a
        >
        <ul class="new-anime__info">
          <li class="new-anime__series">${data.year} | ${data.type} | Серий: ${data.series}</li>
          <li>
            <b class='new-anime__genre-title'>Жанры:</b>
            <ul class="new-anime__genres">
              ${genres}
            </ul>
          </li>
          <li class="new-anime__age">
            <b>Возрастной рейтинг:</b> ${data.ageRating}
          </li>
        </ul>
      </div>
    </article>
  `
}
function _toHTMLSliderItem(data) {
  return `
    <div class="my-slider__item">
      <a href="anime.html#${data.id}">
        <img class="my-slider__img" src="${data.img}" alt="${data.title}"/>
        <span class="my-slider__label">${data.title}</span>
      </a>
    </div>
  `
}

export function addToWebList(sel, req, html) {
  if (!sel) return
  Content.getData(req).then((el) => {
    el.forEach((item) => {
      sel.insertAdjacentHTML('afterbegin', html(item))
    })
  })
}

window.addEventListener('load', () => {
  showNavbar()
  goods()
  addToWebList(
    document.querySelector('.basic__list'),
    'animes',
    _toHTMLbasicItem
  )
  addToWebList(
    document.querySelector('.basic__news-list'),
    'anime-news',
    _toHTMLbasicItem
  )
  addToWebList(
    document.querySelector('.basic__preview-list'),
    'anime-adt',
    _toHTMLbasicItem
  )
  addToWebList(
    document.querySelector('.new-anime__container'),
    'animes',
    _toHTMLAnimeCard
  )
  addToWebList(
    document.querySelector('.my-slider__visible'),
    'animes',
    _toHTMLSliderItem
  )
})
