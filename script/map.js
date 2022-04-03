let myMap

const init = () => {
  myMap = new ymaps.Map('map', {
    center: [56.311465, 43.97923],
    zoom: 12,
    controls: [],
  })
  const coords = [
    [56.330045, 44.009406],
    [56.337672, 43.963286],
    [56.292091, 43.97923],
  ]
  const myCollection = new ymaps.GeoObjectCollection(
    {},
    {
      draggable: false,
      iconLayout: 'default#image',
      iconImageHref: './img/svg/marker.svg',
      iconImageSize: [46, 57],
      iconImageOffset: [-35, -52],
    }
  )

  coords.forEach((coord) => {
    myCollection.add(new ymaps.Placemark(coord))
  })

  myMap.geoObjects.add(myCollection)

  myMap.behaviors.disable('scrollZoom')
}
ymaps.ready(init)
console.log(myMap.behaviors)
