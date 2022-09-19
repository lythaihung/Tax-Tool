'use strict';
//pick var
const button_thueCaNhan = document.getElementById('tinhThueThuNhapCaNhan');
const news_block = document.getElementById('news');
const menu_block = document.getElementById('menu');
console.dir(button_thueCaNhan);
//event handle
const counting_side = function () {
  news_block.style.display = 'none';
  menu_block.style.display = 'none';
};
counting_side();
// button_thueCaNhan.addEventListener(onclick, counting_side);
