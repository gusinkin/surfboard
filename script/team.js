const openItem = (item) => {
  const container = item.closest('.team__item')
  const contentBlock = container.find('.team__content')

  container.addClass('team__item--active')
  contentBlock.height(contentBlock.find('.team__content-inner').height())
}

const closeEveryItem = (container) => {
  container.find('.team__item').removeClass('team__item--active')
  container.find('.team__content').height(0)
}

$('.team__name').click((e) => {
  const $this = $(e.currentTarget)
  const container = $this.closest('.team__list')

  if ($this.closest('.team__item').hasClass('team__item--active')) {
    closeEveryItem(container)
  } else {
    closeEveryItem(container)
    openItem($this)
  }
})
