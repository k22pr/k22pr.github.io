/*global langContent*/
langContent = {
	selectLang : 0,
	lang : ['PHP7.x','JavaScript','CSS3','C lang','C#','Java','Rust'],
	content : [
		'PHP... ',
		'js...'
	]
}
/*global Vue*/
/*
new Vue({
	el: '#root',
	mounted() {
		// make an ax request to our server

		//axios
		//axios.get('./content').then(response => console.log(response));
	}
})
*/

//langauge List Content
new Vue({
	el: '#langList',
	data: {
		title: 'Language List',
		content : '사용할 수 있는 언어 목록 입니다.<br>PHP7.x, jQuery, Vue.js, Sass 등 다양한 웹언어를 다루며<br>서버부터 클라이언트에 걸쳐 다양한 언어를 다룰 수 있습니다.'
	}
})

var changeTabContent = new Vue({
		el : '#tabContent',
		computed : {
			title : function(){
				return langContent.lang[langContent.selectLang]
			},
			description : function(){
				return langContent.content[langContent.selectLang]
			}
		}
})

new Vue({
	el : '#tabMenu',
	data : {
		changeTabMenu : function(no){
			langContent.selectLang = no;
		}
	}
})