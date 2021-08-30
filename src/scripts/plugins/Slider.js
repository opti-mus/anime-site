export default class Slider {
  constructor(data, { slideTo = 0 } = data) {
    this.slideTo = slideTo
    this.data = data
    this.movingSlide()
    this.moving = 0
    this.count = 0
    this.setItems()
  }

  get widthSliderItem() {
    const { sel } = this.data
    const sliderItem = sel.querySelector('.my-slider__item')
    if (!sliderItem) return
    return sliderItem.offsetWidth
  }
  get visibleItems() {
    const { items } = this.data

    return this.widthSliderItem * items
  }
  setItems() {
    const { sel } = this.data
    sel.style.width = this.visibleItems + 'px'
  }
  get allWidthSlider() {
    const { sel } = this.data
    const sliderItem = sel.querySelectorAll('.my-slider__item')
    if (!sliderItem) return
    return sliderItem.length
  }
  get visible() {
    const { sel } = this.data
    const visibleItems = sel.querySelector('.my-slider__visible')
    if (!visibleItems) return
    return visibleItems.offsetWidth / this.widthSliderItem
  }
  moveRightSlide() {
    const { sel } = this.data
    const sliderVisible = sel.querySelector('.my-slider__visible')
    console.log(this.slideTo)
    if (!sliderVisible) return
    if (!this.slideTo) this.count++
    else this.count = this.count + this.slideTo

    if (this.count > this.allWidthSlider - this.visible) this.count = 0

    if (this.count <= this.allWidthSlider) {
      sliderVisible.style.transform = `translateX(-${
        this.count * this.widthSliderItem
      }px)`
    }
  }

  moveLeftSlide() {
    const { sel } = this.data
    const sliderVisible = sel.querySelector('.my-slider__visible')
    if (!sliderVisible) return
    if (!this.slideTo) this.count--
    else this.count = this.count - this.slideTo

    if (this.count < 0) {
      this.count = this.allWidthSlider - this.visible
    }
    sliderVisible.style.transform = `translateX(-${
      this.count * this.widthSliderItem
    }px)`
  }
  movingSlide() {
    const { sel } = this.data
    const arrowRight = sel.querySelector('.my-slider__arrow-right')
    const arrowLeft = sel.querySelector('.my-slider__arrow-left')
    if (!arrowRight || !arrowLeft) return
    arrowLeft.addEventListener('click', this.moveLeftSlide.bind(this))
    arrowRight.addEventListener('click', this.moveRightSlide.bind(this))
  }
}
