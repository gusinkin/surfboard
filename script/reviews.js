const findBlock = (alias) => {
  return $('.reviews__item').filter((ndx, item) => {
    return $(item).attr('data-linked-with') === alias
  })
}
$('.interactive-avatar__link').click((e) => {
  e.preventDefault()
  const $this = $(e.currentTarget)

  findBlock($this.attr('data-open'))
    .addClass('reviews__item--active')
    .siblings()
    .removeClass('reviews__item--active')

  $this
    .closest('.interactive-avatar')
    .addClass('interactive-avatar--active')
    .siblings()
    .removeClass('interactive-avatar--active')
})
