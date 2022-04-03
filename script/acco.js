const accoMesureWidth = (item) => {
  let reqItemWidth = 0
  const screenWidth = $(window).width()
  const accoContainer = item.closest('.acco__list')
  const titlesBlocks = accoContainer.find('.acco__button')
  const titlesWidth = titlesBlocks.width() * titlesBlocks.length
  const textContainer = item.find('.acco__text')
  const paddingLeft = parseInt(textContainer.css('padding-left'))
  const paddingRight = parseInt(textContainer.css('padding-right'))
  const isMobile = window.matchMedia('(max-width: 830px)').matches
  if (isMobile) {
    reqItemWidth = screenWidth - titlesWidth
  } else {
    reqItemWidth = 524
  }
  return {
    container: reqItemWidth,
    textContainer: reqItemWidth - paddingLeft - paddingRight,
  }
}

const closeEveryItemInAcco = (accoContainer) => {
  const accoItems = accoContainer.find('.acco__item')
  const accoContent = accoContainer.find('.acco__content')
  accoItems.removeClass('acco__item--active')

  accoContent.width(0)
}

const openAccoItem = (item) => {
  const hiddenContent = item.find('.acco__content')
  const accoReqWidth = accoMesureWidth(item)
  const textBlock = item.find('.acco__text')

  item.addClass('acco__item--active')
  hiddenContent.width(accoReqWidth.container)
  textBlock.width(accoReqWidth.textContainer)
}

$('.acco__button').on('click', (e) => {
  e.preventDefault()
  const $this = $(e.currentTarget)
  const item = $this.closest('.acco__item')
  const accoItemOpened = item.hasClass('acco__item--active')
  const accoContainer = $this.closest('.acco__list')

  if (accoItemOpened) {
    closeEveryItemInAcco(accoContainer)
  } else {
    closeEveryItemInAcco(accoContainer)
    openAccoItem(item)
  }
})
