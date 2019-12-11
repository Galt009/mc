一个项目
---

以下是开发者日志，笔记，不用阅读。
* 2019-12-10  
纸上得来终觉浅，绝知此事要躬行。  
为了将我所学的知识串联起来，我准备做此项目。   
我想做一个mc玩家的交流网站，有：注册、登录、评论、播放视频、上传视频、图片的网站，同时也是响应式布局。  
计划如此，开始行动。
我准备用vue3.0来做这个项目，之前没学过vue-cli3.0脚手架，都是自己配置，现在我要去学下如何用vuecli-cli3.0。  
    
    首先，安装node.js
    由于我已安装过node.js，如果已经安装好，可vue 以：
    > node -v   
    查看安装的node.js版本

    全局安装vue-cli3.0脚手架：
    > 卸载：如果已经全局安装了旧版本的vue-cli（1.x或2.x），需要先卸载：npm uninstall vue-cli - g  
    安装： npm install -g @vue/cli  
    查看版本号：vue -V 出现版本号即安装成功。  
    3.0对2.0版本的桥接：npm install -g @vue/cli-init

    如果网速慢，可以：
    >全局安装nrm包：npm i nrm  
    查看当前的镜像地址：nrm ls   
    选择镜像地址：nrm use xxx  

    我将此项目放到Github上。
    >github:  
    git init  
    git add .  
    git commit -m 'notes'
    git remote add origin https://github.com/Galt009/test.git  
    git push -u origin master

    然后：
    > git checkout -b dev  
    新建一个dev分支并进入  
    git push  
    git push --set-upstream origin dev   
    推送到github上  
    我现在对分支的用处大致只知道是用来合并功能的。
* 2019-12-11  
构建项目：
    > vue create xxx  
    > 创建vue.config.js配置文件
    ```
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps？
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            // sass: {data: `@import "./src/styles/main.scss";`}
            sass: {
                // data: `@import "./src/styles/main.scss";`
                prependData: `@import "~@/styles/main.scss";`
            }
        },
        requireModuleExtension: false
    }
    ```
    > 这里有变化,和以前不同了。css的配置困扰了我一会，百度加查看官方文档才知道已经改了。   
    不知道为什么，过一会就又出问题了，css文件处理不了，只有scss文件了。
    
    新建一个styles文件夹，用来放css文件，在文件夹里新建一个main.scss，用来导入其他的css文件  
    然后搞一个normalize.scss导入到main.scss中去  
    @import "./normalize.scss";
    
    先做一个登录界面：  
    >height: 100vh; //占可视窗口的100%  
    >wdith: 100vh; //占可视窗口的100%

    往组件中插入图片：
    ```
    <template>
      <div id="login">
        这是登陆页面
        <img :src="imgUrl" alt=""/>
      </div>
    </template>
    <script>
    export default {
      name: "login",
      data() {
        return {
          imgUrl: require("../../images/login.jpg")
        };
      }
    };
    </script>
    ```
    插入背景图片(方式1）：
    ```
    <template>
      <div id="login">
        这是登陆页面
        <div :style="style" class="a">
          aaa
        </div>
      </div>
    </template>
    <script>
    export default {
      name: "login",
      data() {
        return {
          style: {
            backgroundImage: "url(" + require("../../images/login.jpg") + ")",
            backgroundsize: "80px 260px",
            backgroundRepeat: "no-repeat",
          }
        };
      }
    };
    </script>
    <style lang="scss" scoped>
    #login {
    }
    .a{
      width: 500px;
      height: 500px;
    }
    </style>
    ```
    插入背景图片(方式2）：
    ```
    <template>
      <div id="login">
        这是登陆页面
        <div class="a">
          aaa
        </div>
      </div>
    </template>
    <script>
    export default {
      name: "login"
    };
    </script>
    <style lang="scss" scoped>
    #login {
    }
    .a {
      width: 500px;
      height: 500px;
      background: url("../../images/login.jpg") center center no-repeat;
    }
    </style>
    ```