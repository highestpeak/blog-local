<template>
  <div>
    <!-- 视图模式 -->
    <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
      <b-button-group class="mx-1">
          <b-button>
            <font-awesome-icon :icon="['fas', 'list']" size="lg" />
          </b-button>
          <b-button>
            <font-awesome-icon :icon="['fas', 'table']" size="lg" />
          </b-button>          
          <b-button>
            <font-awesome-icon :icon="['fas', 'image']" size="lg" />
          </b-button>
      </b-button-group>
    </b-button-toolbar>

    <!-- 视图详细内容 -->
    <b-card 
      img-src="https://placekitten.com/300/300" 
      img-alt="Card image" 
      img-left class="mb-3"
      img-height="120">
      <b-card-text>
      Some quick example text to build on the card and make up the bulk of the card's content.
      Last updated 3 mins ago
      </b-card-text>
    </b-card>

    <b-card
      header="featured"
      header-tag="header"
      footer="Last updated 3 mins ago"
      footer-tag="footer"
      style="height:240px;width:240px;"
      class="card-only-image"
    >
      <b-img src="https://picsum.photos/300/150/?image=41" fluid alt="Fluid image"></b-img>
    </b-card>

    another is a table view

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
  </div>
</template>

<script>
export default {
  name: 'Picture'
}
</script>

<style>
.card-only-image .card-body{
  padding: 0 !important;
  display: flex;
}
.card-only-image .card-header,
.card-only-image .card-footer {
    padding-bottom: 0.25rem;
    padding-top: 0.25rem;
    padding-left: 0.25rem;
    background-color: rgba(0, 0, 0, 0.03);
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
.card-only-image .card-header{
  font-weight: bold;
}
</style>