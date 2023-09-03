// import
const path = require('path')
// 경로와 관련한 작업을 수행하기 위하여 Node.js의 내장 모듈인 path를 가져와 사용

// export
module.exports = {
		// 파일을 읽어들이기 시작하는 진입점 설정
		entry: './js/main.js',
		
		// 결과물(번들)을 반환하는 설정 
		output: {
				path: path.resolve(__dirname, 'public'),
				// path 속성은 번들된 파일이 저장될 디렉토리를 설정. 현재 webpack.config.js 파일이 있는 디렉토리에서부터 상대적인 위치에 'public' 디렉토리를 지정하고 그곳에 번들된 파일을 저장.
				filename: 'app.js',
				// 번들된 JavaScript 파일의 이름은 app.js
				clean: true
				// 기존에 만들었던 파일이 있다면 제거
		}
}