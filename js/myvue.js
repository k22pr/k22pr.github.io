new Vue({
	el: '#root',
	mounted() {
		// make an ax request to our server

		//axios
		axios.get('./module').then(response => console.log(response));
	}
})

langList = new Vue({
	el: 'langList',
	data: {
		title: 'Language List',
		content : '사용할 수 있거나 사용하고 있는 언어 목록입니다.'
	}
})