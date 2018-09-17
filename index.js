import './index.scss'

//获取页面的宽度
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
//获取html元素
let htmlDom = document.getElementsByTagName('html')[0];
//设置字体的大小
htmlDom.style.fontSize = htmlWidth / 10 + 'px';

window.addEventListener('resize', () => {
	let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
	htmlDom.style.fontSize = htmlWidth / 10 + 'px';
});