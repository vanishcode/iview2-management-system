<style media="screen">
  div > h1 {
    margin-bottom: 20px;
  }
</style>
<template>
    <div>
      <h1>使用iView自带的文件上传组件，方便快捷</h1>
      <Upload
          multiple
          type="drag"
          action="//jsonplaceholder.typicode.com/posts/">
          <div style="padding: 20px 0">
              <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
              <p>点击或将文件拖拽到这里上传</p>
          </div>
      </Upload>
    </div>
</template>
<script>
    export default {

    }
</script>
