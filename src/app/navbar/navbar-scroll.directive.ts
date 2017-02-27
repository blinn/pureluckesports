import { Directive } from '@angular/core';

declare var classie: any;

@Directive({
  selector: '[pleNavbarScroll]'
})
export class NavbarScrollDirective {


  constructor() {
    var cbpAnimatedHeader = (function() {

    var docElem = document.documentElement,
      header = document.querySelector( '.navbar-fixed-top' ),
      didScroll = false,
      changeHeaderOn = 200;

    function init() {
      window.addEventListener( 'scroll', function( event ) {
        if( !didScroll ) {
          didScroll = true;
          setTimeout( scrollPage, 250 );
        }
      }, false );
    }

    function scrollPage() {
      var sy = scrollY();
      if ( sy >= changeHeaderOn ) {
        classie.remove( header, 'navbar-expanded' );
      }
      else {
        classie.add( header, 'navbar-expanded' );
      }
      didScroll = false;
    }

    function scrollY() {
      return window.pageYOffset || docElem.scrollTop;
    }

    init();

})();
   }

}
