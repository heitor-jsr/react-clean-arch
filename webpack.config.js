const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: "development",
  entry: "./src/main/index.tsx",
  output: {
    path: path.join(__dirname, "public/js"),
    publicPath: "/public/js",
    filename: "bundle.js"
  },
  resolve: {  
    extensions: [".ts", ".tsx", ".js", "scss"],
    // por usar os paths indicando o @ nos imports, precimaos incluir um alias pra informar isso no webpack, se não ele se
    // perde ao tentar localizar os imports com os @ no inicio. isso vai substituir todos os @ com o src
    alias: {
      "@": path.join(__dirname, "src")
    }
  },
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      loader: "ts-loader",
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader",
        options: {
          modules: true
        }
      }, {
        loader: "sass-loader"
      },
    ]
    }]
  },
  // precisamos configurar o devServer d o webpack, porque quando ele roda pela primeira vez, ele identifica como
  // a pasta source do projeto a pasta onde estão todos os arquivos, e não a public propriamente dita, que é o ponto de
  // entrada da aplicação a ser renderizada pelo navegador.
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    // por padrao, o devServer nao gera os arquivos do bundle fisicamente, ele só salva eles na memoria. pra isso, precisamos
    // incluir a configuração abaixo, para dizer ao webpack para gerar o bundle fisicamente e levantar o servidor.
    devMiddleware: {
          writeToDisk: true,
      },
    // necessario para os casos em que trabalharemos com rotas - react router dom.
    historyApiFallback: true
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}