const path = require('path')  //引入node模块，一会要操作文件，输入，生成，输出都需要这玩意。
const SpritesmithPlugin = require('webpack-spritesmith'); // 主角，必须引入。要不然咋用

/* 这里是我们自己修改的模板样式，webpack，会自动生成一个sprite.css的样式，有时候生成的不满意，
我们可以在这里修改，可以自己打印一下 data里面的参数，看着就会大概明白（先看下面的配置，最后看这个模板）
*/
var templateFunction = function (data) {
  var shared = '.icon {background-image: url(I);background-size: Wrem Hrem;}'.replace('I', data.sprites[0].image).replace('W', data.spritesheet.width/100)
    .replace('H', data.spritesheet.height/100)

  var perSprite = data.sprites.map(function (sprite) {
    //console.log(sprite.name);
    return '.icon-N { width:Wrem; height:Hrem; background-position:Xrem Yrem; }'
      .replace('N', sprite.name)
      .replace('W', sprite.width/100)
      .replace('H', sprite.height/100)
      .replace('X', sprite.offset_x/100)
      .replace('Y', sprite.offset_y/100);
  }).join('\n');

  return shared + '\n' + perSprite;
};



// 所有的配置都在这个导出里面
module.exports = {
// webpack的配置入口可以打印这个config。可以看到webpack的配置项
  configureWebpack: config => {
    /*
    细节坑。文档里面写着 需要resolve，引入图片生成的位置，
    不加这行会报错。因为github，Readme里面有这句话
    resolve contains location of where generated image is
    （要把生成的地址resolve到modules里面。不写就错）
    一定要加，血的教训啊
    */
     config.resolve.modules = ['node_modules', './src/assets/img'] 
    // 定义一个插件数组。用来覆盖，在里面使用我们的主角
    const Plugins = [
      new SpritesmithPlugin({
        /*
        目标小图标，这里就是你需要整合的小图片的老巢。
        现在是一个个的散兵，把他们位置找到，合成一个
        */
        src: {
          cwd: path.resolve(__dirname, './src/assets/icon'),
          glob: '*.png'
        },
        // 输出雪碧图文件及样式文件，这个是打包后，自动生成的雪碧图和样式，自己配置想生成去哪里就去哪里
        target: {
          image: path.resolve(__dirname, './src/assets/img/sprite.png'),
          css: [
            [path.resolve(__dirname, './src/assets/css/sprite.scss'), {
              // 引用自己的模板
              format: 'function_based_template'
            }],
          ]
        },
        // 自定义模板入口，我们需要基本的修改webapck生成的样式，上面的大函数就是我们修改的模板
        customTemplates: {
          'function_based_template': templateFunction,
        },
        // 样式文件中调用雪碧图地址写法（Readme这么写的）
        apiOptions: {
          cssImageRef: '~sprite.png'
        },
        // 让合成的每个图片有一定的距离，否则就会紧挨着，不好使用
        spritesmithOptions: {
          padding: 0
        }
      })
    ]
    // config里面，覆盖掉以前的，要不然不好使
    config.plugins = [...config.plugins, ...Plugins]
  }
}