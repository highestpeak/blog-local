<template>
  <div>
    <b-container fluid>
      <b-row>
        <div class="picture-item" v-for="(key,index) in 10" :key="index">
          <div class="picture-item-header">
            header of picture
          </div>
          <div class="picture-item-body">
            <img src="https://picsum.photos/300/150/?image=41" alt="Fluid image" style="max-width: 100%;height: auto;">
          </div>
          <!-- todo: 每次刷新页面时候重新计算 -->
          <div class="picture-item-footer">
            Last updated 3 mins ago
          </div>
        </div>
      </b-row>
    </b-container>
    <p>
      应该能够进行如下功能
    </p>
    <p>
      1. 配置图床，配置图片向图床上的分配策略
    </p>
    <p>
      2. 复制图片地址（多格式的）、重命名、删除图片
    </p>
    <p>
      3. 迁移图床
    </p>
    <p>
      4. 备份图片和文章的映射数据
    </p>
    <p>
      5. 拖动图片上传、监听文件夹、监听剪贴板
    </p>
    <p>
      6. 使用脚本语言，例如 graphiz 等的代码生成的图片
    </p>
    <p>
      7. 和 todo 一样的布局就挺好的， 有标签 能搜索
    </p>
  </div>
</template>

<script>
export default {
  name: 'Picture'
}
</script>

<style>
.picture-item{
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);

  height:240px;
  width:240px;
  margin:10px;
}
.picture-item-header{
  font-weight: bold;
}
.picture-item-header,
.picture-item-footer{
  padding-bottom: 0.25rem;
  padding-top: 0.25rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  padding-left: 10px;
}
.picture-item-body{
  padding: 0 !important;
  display: flex;
  flex: 1 1 auto;
  min-height: 1px;
}
</style>