document.addEventListener( 'DOMContentLoaded', function () {

  new Splide('#splide-slider-sobre', {
    type: 'loop',
    arrows: true,
    gap: '1rem',
    keyboard: 'global',
    wheel: true,
    pagination: true,
    perPage: 1,
  }).mount();

} );


var splide = new Splide( '#main-carousel', {
  pagination: false,
  type: 'loop',
  label: 'Galeria de fotos',
  width: 650,
  perPage: 1,
  pagination: true,
  keyboard: 'global',
  wheel: true,

} );

var thumbnails = document.getElementsByClassName( 'thumbnail' );
var current;

for ( var i = 0; i < thumbnails.length; i++ ) {
  initThumbnail( thumbnails[ i ], i );
}

function initThumbnail( thumbnail, index ) {
  thumbnail.addEventListener( 'click', function () {
    splide.go( index );
  } );
}

splide.on( 'mounted move', function () {
  var thumbnail = thumbnails[ splide.index ];

  if ( thumbnail ) {
    if ( current ) {
      current.classList.remove( 'is-active' );
    }

    thumbnail.classList.add( 'is-active' );
    current = thumbnail;
  }
} );

splide.mount();