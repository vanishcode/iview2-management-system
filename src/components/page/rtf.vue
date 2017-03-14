<style media="screen">
  .rtf-content {
    height: 400px;
  }
</style>
<template>
    <div class="rtf-content">
        <quill-editor ref="myTextEditor" v-model="content" :config="editorOption"></quill-editor>
    </div>
</template>

<script>
    import { quillEditor } from 'vue-quill-editor';
    export default {
        data: function(){
            return {
                content: '',
                editorOption: {

                }
            }
        },
        components: {
            quillEditor
        }
    }
</script>
