import { Content } from './content'
import { goods } from './goods'
import { addToWebList } from './render'
import Select from './plugins/Select'
import showNavbar from './navbar'
import Slider from './plugins/Slider'

function renderFilterSelect() {
  const selectGenresAdd = document.querySelector('.filter__genres-add')
  const selectType = document.querySelector('.filter__type')
  const selectStatus = document.querySelector('.filter__status')
  const selectAgeRating = document.querySelector('.filter__age-rating')
  const selectSort = document.querySelector('.filter__sort')
  if (
    !selectGenresAdd ||
    !selectType ||
    !selectStatus ||
    !selectAgeRating ||
    !selectSort
  )
    return
  const genres = [
    { title: 'Приключение' },
    { title: 'Ниндзя' },
    { title: 'Якудза' },
    { title: 'Военная-тематика' },
    { title: 'Безумие' },
    { title: 'Вампиры' },
  ]
  const animeType = [
    { title: 'Сериал' },
    { title: 'Полнометражный фильм' },
    { title: 'Короткометражный фильм' },
    { title: 'OVA' },
    { title: 'Special' },
    { title: 'ONA' },
  ]
  const animeStatus = [
    { title: 'Не-учитывай' },
    { title: 'Вышел' },
    { title: 'Онгоинг' },
    { title: 'Анонс' },
  ]
  const ageRating = [
    { title: 'G(для всех возрастов)' },
    { title: 'PG(для детей)' },
    { title: 'PR-13(от 13 лет)' },
    { title: 'R-17+(насилие и/или частичная нагота)' },
    { title: 'R+(частичная нагота)' },
  ]
  const sortList = [
    { title: 'Название(А-Я)' },
    { title: 'Дате выхода' },
    { title: 'Рейтингу' },
    { title: 'Голосам' },
    { title: 'Просмотрам' },
  ]
  new Select(selectGenresAdd, {
    multiSelect: true,
    search: true,
    placeholder: 'По каким жанрам искать?',
    options: genres,
  })
  new Select(selectType, {
    multiSelect: true,
    search: true,
    placeholder: 'Какой тип аниме искать?',
    options: animeType,
  })
  new Select(selectStatus, {
    multiSelect: false,
    search: false,
    placeholder: 'Статус аниме',
    options: animeStatus,
  })
  new Select(selectAgeRating, {
    multiSelect: false,
    search: false,
    placeholder: 'По какому рейтингу искать? ',
    options: ageRating,
  })
  new Select(selectSort, {
    multiSelect: false,
    search: false,
    placeholder: 'Ка сортировать?',
    options: sortList,
  })
  toggleFilter()
}

function toggleFilter() {
  const filterHeaderBtn = document.querySelector('.header__filter')
  const filter = document.querySelector('.filter')
  const closeFilter = filter.querySelector('.filter__close')
  if (!filterHeaderBtn) return
  filterHeaderBtn.addEventListener('click', function () {
    filter.classList.toggle('show-filter')
  })
  closeFilter.addEventListener('click', () => {
    filter.classList.remove('show-filter')
  })
}
function renderSlider() {
  const basicSlider = document.querySelector('.basic__slider')
  new Slider({
    sel: basicSlider,
    items: 2,
    slideTo: 2,
  })
}
renderFilterSelect()
renderSlider()
