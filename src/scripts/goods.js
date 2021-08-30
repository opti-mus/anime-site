import { Content } from './content'

export function goods() {
  let hash = window.location.hash.substring(1)
  let wrapper = document.querySelector('.anime-info')

  if (!wrapper) return
  Content.getAnime(hash).then((res) => {
    wrapper.innerHTML = _allInfoPage(res)
    return res
  })
}
function _allInfoPage(data) {
  const { title, views, year, genres, type, img, desc, ageRating, series } =
    data
  let genresValid = !genres
    ? ''
    : genres
        .filter((item) => item !== null)
        .map((el) => `<li><a href=''>${el}</a></li>`)
  return `
  <ul class="anime-info__main">
    <h1 class="anime-info__title">${title}</h1>
    <li class="anime-info__views"><b>Просмотров</b>: ${
      views || 'Неизвестно'
    }</li>
    <li class="anime-info__year"><b>Год</b>: ${year}</li>
    <li class="anime-info__age"><b>Возрастной рейтинг</b>: ${
      ageRating || ''
    }</li>
    <li><b class='anime-info__genres-title'>Жанр:</b><ul class='anime-info__genres'>${genresValid}</ul></li>
    <li class="anime-info__type"><b>Тип</b>: ${type}</li>
    <li class="anime-info__serias"><b>Серий</b>: ${series}</li>
  </ul>
  <div class="anime-info__img">
    <img class="anime-info__picture" src="${img}" alt="">
  </div>
    <p class="anime-info__desc">${desc || ''}</p>
  </div>
  `
}
