// Tìm element theo id
// const $paragraph = document.getElementById('paragraph');
// // console.log('$paragraph: ', $paragraph);
// // Tìm element theo tên thẻ

// const $tagP = document.getElementsByTagName('p');
// console.log('$tagP:',$tagP);

// Tìm element theo class
// const $text = document.getElementsByClassName('text');
// console.log('$text:',$text);

// doccument.querySelector
// const $element = document.querySelector('p#paragraph.text');
// console.log('$element:',$element);
// doccument.querySelectorAll
// const $elements = document.querySelectorAll('p#paragraph.text');
// console.log('$elements:',$elements);

// innerHTML thay doi noi dung
// const $h1 = document.getElementById('h1');
// console.log('$h1:',$h1);
// $h1.innerHTML = 'Noi dung dc thay doi';

// const $tagA = document.getElementById('tagA');
// // $tagA.href = 'http://www.google.com/';

// $tagA.setAttribute('href', 'http://www.youtube.com')
// console.log($tagA.getAttribute('href'));

// // Thay doi style cua element
// $tagA.style.color = 'red';
// $tagA.style.fontSize = '10px';

// Xoa thuoc tinh cua element
// $tagA.removeAttribute('href');

// tao moi element
// let $tagH2 = document.createElement('h2');
// $tagH2.innerHTML = 'Noi dung h2';
// console.log('$tagH2', $tagH2);
// document.body.appendChild($tagH2);
// $tagA.remove();
// const $tagsLi = document.querySelectorAll('li.favorite-list-item');
// for(let tagLi of $tagsLi) {
// tagLi.innerText = 'I love this thing';
// tagLi.style.color = 'red';
// }

// Nhập vào 1 đoạn text từ bàn phím. Thêm vào ul#favorite-list
// một li có nội dung là text vừa nhập vào.
// const text = 'Xe máy';
// const $tagLi = document.createElement('li');
// $tagLi.innerText = text;
// const $tagUl = document.getElementById('favorite-list');
// $tagUl.appendChild($tagLi);