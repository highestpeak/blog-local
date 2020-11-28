<template>
  <div>  
    <b-container>
      <!-- 基本信息 -->
      <h1 style="margin-left: 10px;"> {{articleInfo.title}} </h1>
      <!-- 单列 -->
      <b-row>
        <b-col>
          <StatisticItem :icon="['fas', 'home']" name="位置" :align="8" :value="articleInfo.storageLocation"/>
          <StatisticItem :icon="['fas', 'home']" name="文件" :align="8" :value="articleInfo.fileName"/>
          <StatisticItem :icon="['fas', 'home']" name="状态" :align="8" :value="articleInfo.status.desc"/>
        </b-col>
      </b-row>
      <!-- 双列 -->
      <b-row>
        <b-col>
          <StatisticItem :icon="['fas', 'home']" name="大小" :align="8" :value="articleInfo.size[1]"/>
          <StatisticItem :icon="['fas', 'home']" name="创建时间" :value="articleInfo.time"/>
        </b-col>
        <b-col>
          <StatisticItem :icon="['fas', 'home']" name="字数" :align="8" :value="articleInfo.words"/>
          <StatisticItem :icon="['fas', 'home']" name="更新时间" :value="articleInfo.time"/>
        </b-col>
      </b-row>
      <!-- 单列 -->
      <b-row>
        <b-col>
          <StatisticItem :icon="['fas', 'home']" name="概述" :align="8" :value="articleInfo.summary"/>
        </b-col>
      </b-row>

      <!-- 类别体系 -->
      <!-- 单列 -->
      <b-row>
        <b-col>
          <StatisticItem :icon="['fas', 'home']" name="标签" :align="8" :useSlot="true">
            <template v-slot:body>
              <TagCloud :tags=tagCloudData(articleInfo.tags) />
            </template>
          </StatisticItem>

          <StatisticItem :icon="['fas', 'home']" name="类别" :align="8" :useSlot="true">
            <template v-slot:body>
              <ul>
                <li v-for="(category,index) in articleInfo.categories" :key="index"> {{category}} </li>
              </ul>
            </template>
          </StatisticItem>

          <StatisticItem :icon="['fas', 'home']" name="关键字" :align="6" :useSlot="true">
            <template v-slot:body>
              <ul>
                <li v-for="(keyWord,index) in Object.keys(articleInfo.keyWords)" :key="index"> {{keyWord}}-{{articleInfo.keyWords[keyWord]}} </li>
              </ul>
            </template>
          </StatisticItem>
        </b-col>
      </b-row>

      <!-- 类别 标签 关键字 -->
      <!-- 类别体系：显示位于哪些类别中，类别的完整链条要显示一下 -->
      <!-- 选择关键字作为新的标签 -->
      <!-- 添加类别和标签 -->
    </b-container>

    <!-- todo -->

    <!-- todo item -->

    <!-- 标准检查：显示完成了哪些标准检查，没有完成哪些标准检查，可以自动完成的可以点击完成 -->

    <!-- 历史记录：显示时间轴，做了哪些修改 -->

    <!-- 引用关系：
          文章结尾的文章引用（图示）
          文章引用的图片
          文章引用的 Gist 代码段
          文章引用的视频
          文章和其他文章共享的段落-->
<!-- { 
  "name": "MySQL和存储引擎", 
  "categries": [ "数据库" ], 
  "tags": [ "MySQL", "存储引擎", "优化", "数据结构" ], 
  "create_time": "2020-2-20 19:26:00", 
  "update_time": null, 
  "todos": 3, 
  "standard_check": null, 
  "size": "17.64 KB", 
  "words": 8692, 
  "storage_location": 
  "E:/_data/testDir/BlogLocalTest", 
  "key_words": [ "查询", "索引", "存储", "引擎", "MySQL" ], 
  "status": { 
    "unmodify": false, 
    "modify": false, 
    "del": false, 
    "new": true, 
    "untrack": true, 
    "track": false, 
    "desc": "文件没有在之前的任何commit中提交,工作区中为新文件" 
    }
} -->
    <!-- {{articleInfo}} -->
  </div>
</template>

<script>
import StatisticItem from '@/components/StatisticItem.vue'
import TagCloud from '@/components/Tags/TagCloud.vue'
export default {
  name: 'ArticleDetail',
  props: ['articleInfo'],
  components: {
    StatisticItem, TagCloud
  },
  methods: {
    tagCloudData: function (tagNames) {
      return Array.from(tagNames, tagName => {
        return {
          name: tagName,
          link: '#' + tagName
        }
      })
    }
  }
}
</script>

<style>

</style>