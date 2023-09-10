// import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin')

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
		},

    // 다양한 플러그인 설정
    plugins: [
      new HtmlPlugin({   // HtmlPlugin을 생성
        template: './index.html' // index.html을 원본 템플릿으로 설정함.
      }),
      // new CopyPlugin({
      //   patterns: [
      //     { from: 'static' } // 'static' 디렉토리의 모든 파일과 폴더를 복사
      //   ]
      // })
    ],

    module: {
      rules: [
        {
          test: /\.s?css$/, // 파일 확장자가 .css 또는 .scss 로 끝나는 파일들을 찾는다.
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },
}