import magnificPopup from 'magnific-popup';
import $ from 'jquery';

console.log( magnificPopup );

window.addEventListener('load', () => {
  let $youtubeBtn = $('.popup-youtube');

  $youtubeBtn.magnificPopup({
      type: 'iframe',
  });
});

// $(document).ready(function() {
//   $('.popup-youtube').magnificPopup({
//     type: 'iframe',
// });
