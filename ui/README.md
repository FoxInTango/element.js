# UIElement

## 基本元素
## UIText
## UIImage
## 外观元素
## UIStyle
## 排版元素
## UILayot
## UISlot
## 视图元素
## UIView
## 容器元素

# 类关系
## UIElement
## |------------|------------|
## |            |            |
## UIText       UIImage      UIView -- displayType : 
##                           UIListView
##                           UITreeView
##                           UIGridView
##                           UIMenu

# 视图结构
## UIView
## |
## |
## UIStatus[]
## |
## |------------|
## UISlout[]    UILayout
## |            |
## |            |
## attachments  subelements
## |
## text
## |
## image
## |
## view
## |
## component

## 动态渲染
## 条件渲染
## 数据绑定

## 资料 ： 
## MIME-TYPE ：
##     https://developer.mozilla.org/zh-CN/docs/Glossary/MIME_type
##     https://www.iana.org/assignments/media-types/media-types.xhtml
## HTML元素 与 SVG元素的组合 ？-- SVG元素的事件响应与HTML元素的事件响应