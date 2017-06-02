/*global Vue*/
new Vue({
	el: '#root',
	mounted() {
		// make an ax request to our server

		//axios
		//axios.get('./content').then(response => console.log(response));
	}
})

//langauge List Content
new Vue({
	el: '#langList',
	data: {
		title: 'Web Language',
		content : '사용할 수 있거나 사용하고 있는 언어 목록입니다.'
	}
})

new Vue({
		el : '#serverContent',
		data : {
			title : 'Server Side',
			description : 'Hello!'
		}
})
new Vue({
		el : '#scriptContent',
		data : {
			title : 'Script',
			description : 'Hello!'
		}
})