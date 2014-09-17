#BookShare文档 Beta0.0.1

##写在前面：
>这个idea源自于好几次网上购书的经历，虽说趁着活动打折入手省了一笔钱但每一次一两百还是觉得好贵啊，况且有挺多书看完基本上就搁一边了，利用率实在太低。在这个电子书盛行的时代，还是有跟鄙人志同道合喜欢手握实体书的娃儿，所以打算搭建一个线上图书分享平台，通过线下各种途径获取他人书籍。此项目目前还处于嗷嗷待哺的阶段，欢迎各界牛人拍砖！

##User

用户功能点：

 * 书单操作（本我）
 * 操作他人书单（联系）

##首页

 * 搜索
 * 分类
 * 热门


##社交平台

* 私信（暂缓）


###详细的信息
来自：[我滴Github项目页面](https://github.com/MapleShaw/StaticTemplate)

Tips：

    $ git remote add origin git@github.com:xxx
的时候出现

    fatal: remote origin already exists.
    
这个错误，使用

    git remote rm origin

###2014-09-16 update

    [$injector:modulerr] http://errors.angularjs.org/1.2.24/$injector/modulerr?p0=bookShare&p1=Error…%3A%2F%2F%2FD%3A%2FsublimeGit%2Fbookshare%2Fjs%2Fangular.min.js%3A18%3A170) 

这个错误由mian.js模块依赖对应不上导致

    XMLHttpRequest cannot load file:///D:/sublimeGit/bookshare/tpls/hot.html. Cross origin requests are only supported for HTTP. angular.min.js:79
    Error: Failed to execute 'send' on 'XMLHttpRequest': Failed to load 'file:///D:/sublimeGit/bookshare/tpls/hot.html'.

这个错误由 [慕课网](http://www.imooc.com/qadetail/16144) 

###2014-09-17 update

添加了页面模版

后续：分类的展示  注册  登录  数据库  迁移到服务器