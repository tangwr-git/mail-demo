# mail-demo

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 目录结构

src  
-assets  
--imgs  
--css  
-components //公共组件  
--common // 完全公共，阔以直接做迁移的组件   
--content // 业务相关的组件  
--views //视图组件  
-router  
-store  
-network  
-common //公共的 js  
--const.js  
--utils.js  
-App.vue  
-main.js

### git上传  
#### git status   
具体状态如下：  
1：Untracked: 未跟踪,一般为新增文件，此文件在文件夹中, 但并没有加入到git库, 不参与版本控制. 通过git add 状态变为Staged.  
2：Modified: 文件已修改, 仅仅是修改, 并没有进行其他的操作.  
3：deleted： 文件已删除，本地删除，服务器上还没有删除.  
4：renamed：
#### git add .  
使用上面的命令将所有的修改的文件提交到缓存区
#### git commit -m “修改项目代码”  
将代码提交到本地仓库中
#### git push  
将缓存区代码推送到Git服务器