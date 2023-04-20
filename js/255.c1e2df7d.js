(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{883:function(n,e){n.exports="\x3c!--\ntitle: 02-Hexo配置\nsort:\n--\x3e\n\n# Hexo 配置\n\n## `_config.yml`\n\n### 网站\n\n| 参数          | 描述                                            |\n| :------------ | :---------------------------------------------- |\n| `title`       | 网站标题                                        |\n| `subtitle`    | 网站副标题                                      |\n| `description` | 网站描述                                        |\n| `keywords`    | 网站的关键词。使用半角逗号 `,` 分隔多个关键词。 |\n| `author`      | 您的名字                                        |\n| `language`    | 网站使用的语言                                  |\n| `timezone`    | 网站时区。Hexo 默认使用您电脑的时区。           |\n\n### 网址\n\n| 参数                         | 描述                                                                                    | 默认值                      |\n| :--------------------------- | :-------------------------------------------------------------------------------------- | :-------------------------- |\n| `url`                        | 网址                                                                                    |                             |\n| `root`                       | 网站根目录                                                                              |                             |\n| `permalink`                  | 文章的 [永久链接](https://hexo.io/zh-cn/docs/permalinks) 格式                           | `:year/:month/:day/:title/` |\n| `permalink_defaults`         | 永久链接中各部分的默认值                                                                |                             |\n| `pretty_urls`                | 改写 [`permalink`](https://hexo.io/zh-cn/docs/variables) 的值来美化 URL                 |                             |\n| `pretty_urls.trailing_index` | 是否在永久链接中保留尾部的 `index.html`，设置为 `false` 时去除                          | `true`                      |\n| `pretty_urls.trailing_html`  | 是否在永久链接中保留尾部的 `.html`, 设置为 `false` 时去除 (_对尾部的 `index.html`无效_) | `true`                      |\n\n### 目录 （新手没必要修改）\n\n| 参数           | 描述                                                                                                                                                                   | 默认值           |\n| :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------- |\n| `source_dir`   | 资源文件夹，这个文件夹用来存放内容。                                                                                                                                   | `source`         |\n| `public_dir`   | 公共文件夹，这个文件夹用于存放生成的站点文件。                                                                                                                         | `public`         |\n| `tag_dir`      | 标签文件夹                                                                                                                                                             | `tags`           |\n| `archive_dir`  | 归档文件夹                                                                                                                                                             | `archives`       |\n| `category_dir` | 分类文件夹                                                                                                                                                             | `categories`     |\n| `code_dir`     | Include code 文件夹，`source_dir` 下的子目录                                                                                                                           | `downloads/code` |\n| `i18n_dir`     | 国际化（i18n）文件夹                                                                                                                                                   | `:lang`          |\n| `skip_render`  | 跳过指定文件的渲染。匹配到的文件将会被不做改动地复制到 `public` 目录中。您可使用 [glob 表达式](https://github.com/micromatch/micromatch#extended-globbing)来匹配路径。 |                  |\n\n### 文章\n\n| 参数                    | 描述                                                                                         | 默认值    |\n| :---------------------- | :------------------------------------------------------------------------------------------- | :-------- |\n| `new_post_name`         | 新文章的文件名称                                                                             | :title.md |\n| `default_layout`        | 预设布局                                                                                     | post      |\n| `auto_spacing`          | 在中文和英文之间加入空格                                                                     | false     |\n| `titlecase`             | 把标题转换为 title case                                                                      | false     |\n| `external_link`         | 在新标签中打开链接                                                                           | true      |\n| `external_link.enable`  | 在新标签中打开链接                                                                           | `true`    |\n| `external_link.field`   | 对整个网站（`site`）生效或仅对文章（`post`）生效                                             | `site`    |\n| `external_link.exclude` | 需要排除的域名。主域名和子域名如 `www` 需分别配置                                            | `[]`      |\n| `filename_case`         | 把文件名称转换为 (1) 小写或 (2) 大写                                                         | 0         |\n| `render_drafts`         | 显示草稿                                                                                     | false     |\n| `post_asset_folder`     | 启动 [Asset 文件夹](https://hexo.io/zh-cn/docs/asset-folders)                                | false     |\n| `relative_link`         | 把链接改为与根目录的相对位址                                                                 | false     |\n| `future`                | 显示未来的文章                                                                               | true      |\n| `highlight`             | 代码块的设置                                                                                 |           |\n| `highlight.enable`      | 开启代码块高亮                                                                               | `true`    |\n| `highlight.auto_detect` | 如果未指定语言，则启用自动检测                                                               | `false`   |\n| `highlight.line_number` | 显示行数 _Enabling this option will also enable `wrap` option_                               | `true`    |\n| `highlight.tab_replace` | 用 n 个空格替换 tabs；如果值为空，则不会替换 tabs                                            | `''`      |\n| `highlight.wrap`        | Wrap the code block in [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) | `true`    |\n| `highlight.hljs`        | Use the `hljs-*` prefix for CSS classes                                                      | `false`   |\n\n### 分类 & 标签\n\n| 参数               | 描述     | 默认值          |\n| :----------------- | :------- | :-------------- |\n| `default_category` | 默认分类 | `uncategorized` |\n| `category_map`     | 分类别名 |                 |\n| `tag_map`          | 标签别名 |                 |\n\n### 日期 / 时间格式\n\n- Hexo 使用 [Moment.js](http://momentjs.com/) 来解析和显示时间。\n\n| 参数                   | 描述                                                                                                                                                                                         | 默认值       |\n| :--------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------- |\n| `date_format`          | 日期格式                                                                                                                                                                                     | `YYYY-MM-DD` |\n| `time_format`          | 时间格式                                                                                                                                                                                     | `HH:mm:ss`   |\n| `use_date_for_updated` | 启用以后，如果 Front Matter 中没有指定 `updated`， [`post.updated`](https://hexo.io/zh-cn/docs/variables#页面变量) 将会使用 `date` 的值而不是文件的创建时间。在 Git 工作流中这个选项会很有用 | `true`       |\n\n### 分页\n\n| 参数             | 描述                                | 默认值 |\n| :--------------- | :---------------------------------- | :----- |\n| `per_page`       | 每页显示的文章量 (0 = 关闭分页功能) | `10`   |\n| `pagination_dir` | 分页目录                            | `page` |\n\n### 扩展\n\n| 参数             | 描述                                                                                                                                   |\n| :--------------- | :------------------------------------------------------------------------------------------------------------------------------------- |\n| `theme`          | 当前主题名称。值为`false`时禁用主题                                                                                                    |\n| `theme_config`   | 主题的配置文件。在这里放置的配置会覆盖主题目录下的 `_config.yml` 中的配置                                                              |\n| `deploy`         | 部署部分的设置                                                                                                                         |\n| `meta_generator` | [Meta generator](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta#属性) 标签。 值为 `false` 时 Hexo 不会在头部插入该标签 |\n\n## 同步 github\n\n```yaml\nnpm install hexo-deployer-git --save\n_congig.yml\ndeploy:\n  type: git\n  repo: git@github.com:fzf404/fzf404.github.io.git\n  master: master\n```\n"}}]);