<template>
  <div
    ref="wrapper"
    class="monaco-editor-wrapper"
    style="height:100%">
    <div
      ref="editor"
      class="app-monaco-editor"
      style="height:90%"/>

    <div class="monaco-editor-footer" style="height:10%">
      <div>
        language
      </div>
      <div>
        Line {{ position.lineNumber }}, Column {{ position.column }}
      </div>
    </div>
  </div>
</template>

<script>
// https://github.com/antonreshetov/massCode/blob/master/src/renderer/components/editor/MonacoEditor.vue
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import { ipcRenderer } from 'electron'
export default {
  name: 'MonacoEditor',
  props: {
    value: {
      type: String,
      default: null
    },
    language: {
      type: String,
      default: 'text'
    },
    theme: {
      type: String,
      default: 'massCode-dark'
    }
  },
  data () {
    return {
      editor: null,
      position: {
        lineNumber: 0,
        column: 0
      },
      isFocused: false
    }
  },
  mounted () {
    this.init()
    window.addEventListener('resize', this.updateLayout)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.updateLayout)
  },
  methods: {
    init () {
      this.defineThemes()

      this.editor = monaco.editor.create(this.$refs.editor, {
        value: this.value,
        language: this.language,
        // 小地图的渲染
        minimap: {
          enabled: true
        },
        matchBrackets: 'always',
        scrollbar: {
          useShadows: true,
          verticalScrollbarSize: 5,
          horizontalScrollbarSize: 5
        },
        contextmenu: false,
        scrollBeyondLastLine: false,
        // renderWhitespace: this.preferences.renderWhitespace,
        // wordWrap: this.preferences.wordWrap,
        links: false
      })
      this.editor.onDidChangeModelContent(e => {
        const value = this.editor.getValue()
        this.$emit('input', value)
      })
      this.editor.onMouseDown(e => {
        this.position = e.target.position
      })
      this.editor.onDidFocusEditorText(e => {
        this.isFocused = true
      })
      this.editor.onDidBlurEditorText(e => {
        this.isFocused = false
      })
      this.editor.onDidChangeCursorPosition(e => {
        this.position = e.position
      })

      this.bindUndoRedo()
    },

    defineThemes () {
      monaco.editor.defineTheme('massCode-dark', {
        base: 'vs-dark',
        inherit: true,
        rules: [{ background: 'EDF9FA' }],
        colors: {
          'editor.background': '#333333',
          'editor.lineHighlightBackground': '#333',
          'editorLineNumber.foreground': '#525252',
          'editorSuggestWidget.foreground': '#ffffff',
          'editorSuggestWidget.background': '#404040',
          'editorSuggestWidget.selectedBackground': '#525252',
          'editorSuggestWidget.highlightForeground': '#67a4ef',
          'list.focusBackground': '#ffffff',
          'list.hoverBackground': '#585858',
          'list.hoverForeground': '#ffffff',
          'list.highlightForeground': '#333333'
        }
      })
      monaco.editor.defineTheme('massCode-light', {
        base: 'vs',
        inherit: true,
        rules: [{ background: 'EDF9FA' }],
        colors: {
          'editor.background': '#ffffff',
          'editor.lineHighlightBackground': '#ffffff',
          'editorLineNumber.foreground': '#525252',
          'editorSuggestWidget.foreground': '#262626',
          'editorSuggestWidget.background': '#f7f7f7',
          'editorSuggestWidget.selectedBackground': '#d9d9d9',
          'editorSuggestWidget.highlightForeground': '#67a4ef',
          'list.focusBackground': '#ffffff',
          'list.hoverBackground': '#d3d3d3',
          'list.hoverForeground': '#262626',
          'list.highlightForeground': '#ffffff'
        }
      })
    },

    bindUndoRedo () {
      ipcRenderer.on('menu:undo', () => {
        if (this.isFocused) {
          this.editor.getModel().undo()
        }
      })
      ipcRenderer.on('menu:redo', () => {
        if (this.isFocused) {
          this.editor.getModel().redo()
        }
      })
    },
    updateLayout () {
      const wrapperRect = this.$refs.wrapper.getBoundingClientRect()
      // console.log(wrapperRect)
      const width = wrapperRect.width
      const height = wrapperRect.height * 0.6
      // console.log(width)
      // console.log(height)
      this.editor.layout({ width: width, height: height })
    }
  }
}
</script>

<style>
.app-monaco-editor{
  height: 100%;
}
.monaco-editor-footer{
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  color: #808080;
}
</style>