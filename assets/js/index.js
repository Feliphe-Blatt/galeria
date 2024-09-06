document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#image-carousel' ).mount();
} );

var splide = new Splide( '#main-carousel', {
  pagination: false,
  type: 'loop',
  label: 'Galeria de fotos artísticas',
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