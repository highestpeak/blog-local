<template>
  <!-- todo: 输入搜索内容后进行搜索时的项目样式 -->
  <div style="flex: 1 1 0%; overflow: hidden; display: flex; flex-direction: column;" class="quick-find">
    <!-- head -->
    <div style="display: flex; align-items: center; border: none; padding: 0px 16px; width: 100%; background: transparent; font-size: 18px; line-height: inherit; height: 52px; flex-grow: 0; flex-shrink: 0; z-index: 1; box-shadow: rgba(55, 53, 47, 0.09) 0px 1px 0px;">
      <font-awesome-icon :icon="['fas', 'search']" size="1x" style="width: 18px; height: 18px; display: block; fill: rgba(55, 53, 47, 0.4); flex-shrink: 0; backface-visibility: hidden; margin-right: 10px; flex-grow: 0;"/>
      <input placeholder="Search WHO's Notion…" type="text" autofocus="autofocus" style="font-size: inherit; line-height: inherit; border: none; background: none; width: 100%; display: block; resize: none; padding: 0px; min-width: 0px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
    </div>

    <!-- main body -->
    <div v-for="(key,index) in 2" :key="index" style="width: 100%; height: 100%; overflow: hidden auto;">
      <div>
        <!-- Recent pages -->
        <div style="padding-top: 0px; padding-bottom: 8px;">
          <div style="display: flex; padding: 2px 14px 0px; margin: 0px; color: rgba(55, 53, 47, 0.6); font-size: 11px; font-weight: 500; line-height: 120%; user-select: none; height: 32px; align-items: center; text-transform: uppercase;">
            <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Recent pages</div>
          </div>

          <ul style="list-style-type: none; padding: 0px; margin: 0px;">
            <div v-for="(key,index) in 7" :key="index" class="list-item" style="user-select: none; transition: none 0s ease 0s; cursor: pointer; width: 100%;">
              <div style="display: flex; align-items: center; line-height: 120%; width: 100%; user-select: none; min-height: 36px; font-size: 14px; padding-top: 8px; padding-bottom: 8px;">
                <!-- icon -->
                <div style="display: flex; align-items: center; justify-content: center; margin-left: 14px; margin-top: 1px; align-self: center;">
                  <div style="user-select: none; transition: background 20ms ease-in 0s; display: flex; align-items: center; justify-content: center; height: 19px; width: 19px; border-radius: 3px; flex-shrink: 0;">
                      <font-awesome-icon :icon="['fas', 'home']" size="1x" style="width: 17.1px; height: 17.1px; display: block; fill: rgba(55, 53, 47, 0.8); flex-shrink: 0; backface-visibility: hidden;"/>
                  </div>
                </div>
                <!-- page name -->
                <div style="margin-left: 8px; margin-right: 14px; min-width: 0px; display: inline-flex; align-items: baseline;">
                  <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; flex-shrink: 0; max-width: 100%;">
                    <div class="notranslate" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-weight: 500; line-height: 20px;">
                      Blog-Local
                    </div>
                  </div>
                  <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: rgba(55, 53, 47, 0.6); margin-top: 1px; font-size: 12px; display: inline-flex;">
                    <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: rgba(55, 53, 47, 0.6); margin-top: 0px; font-size: 12px; margin-left: 0.5em; margin-right: 0.5em;">
                      —
                    </span>
                    <div style="display: flex; font-size: 12px; color: rgba(55, 53, 47, 0.4); overflow: hidden;">
                      <div class="notranslate" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 12px; color: rgba(55, 53, 47, 0.4);">
                        项目
                      </div>
                      <span style="padding-left: 4px; padding-right: 4px;">/</span>
                      <div class="notranslate" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 12px; color: rgba(55, 53, 47, 0.4);">
                        详细需求分析
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>

        <!-- Recent pages -->
        <!-- 同上 -->
        <!-- <div style="padding-top: 0px; padding-bottom: 8px;">
        </div> -->
      </div>
    </div>

    <!-- footer -->
    <div style="flex-shrink: 0;">
      <div style="box-shadow: rgba(55, 53, 47, 0.09) 0px -1px 0px; margin-top: 1px; display: flex; flex-direction: row; justify-content: space-between; align-items: center; font-size: 14px;">
        <div style="display: flex; align-items: center; line-height: 120%; width: 100%; user-select: none; min-height: 28px; font-size: 12px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: rgba(55, 53, 47, 0.4);">
          <div style="margin-left: 14px; margin-right: 14px; min-width: 0px; flex: 1 1 auto;">
            <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
              <ul style="list-style-type: none; padding: 0px; margin: 0px; font-size: 12px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: rgba(55, 53, 47, 0.4);">
                <li style="display: inline; margin-right: 16px;">
                  <span style="margin-right: 4px; margin-bottom: 1px; font-variant: all-small-caps; font-size: 13.2px; color: rgba(55, 53, 47, 0.6);">
                    ↑↓
                  </span>
                  Select
                </li>
                <li style="display: inline; margin-right: 16px;">
                  <span style="margin-right: 4px; margin-bottom: 1px; font-variant: all-small-caps; font-size: 13.2px; color: rgba(55, 53, 47, 0.6);">
                    Enter
                  </span>
                  Open
                </li>
                <li style="display: inline; margin-right: 16px;">
                  <span style="font-size: 10.5px; color: rgba(55, 53, 47, 0.6);">
                    ctrl
                  </span>
                  <span style="margin-right: 4px; margin-bottom: 1px; font-variant: all-small-caps; font-size: 13.2px; color: rgba(55, 53, 47, 0.6);">
                    +Enter
                  </span>
                  Open in a new window
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div><!-- footer -->
  </div>
</template>

<script>
export default {
  name: 'QuickFind'
}
</script>

<style>
.modal-body{
  padding: 0rem !important;
}
.quick-find .list-item:hover{
  background-color: #EFEFEF;
}
</style>