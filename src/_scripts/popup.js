import magnificPopup from 'magnific-popup';
import $ from 'jquery';

window.addEventListener('load', () => {
  let $youtubeBtn = $('.popup-youtube');

  $youtubeBtn.magnificPopup({
      type: 'iframe',
  });
});
