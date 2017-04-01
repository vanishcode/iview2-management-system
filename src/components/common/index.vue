<style scoped>

.layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}

.layout-breadcrumb {
    padding: 10px 15px 0;
}

.layout-content {
    min-height: 600px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
}

.layout-content-main {
    padding: 20px 10px;
}

.layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}

.layout-menu-left {
    background: #464c5b;
    /*min-width: 100px;*/
}

.layout-header {
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
}

.layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
    line-height: 30px;
    color: white;
    text-align: center;
    vertical-align: middle;
    overflow: hidden;
}

.layout-ceiling-main a {
    color: #9ba7b5;
}

.layout-hide-text .layout-text {
    display: none;
}

.ivu-col {
    transition: width .2s ease-in-out;
}

</style>

<template>

<div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
    <Row type="flex">
        <i-col :span="spanLeft" class="layout-menu-left">
            <Menu :active-name="setActive" theme="dark" width="auto" @on-select="routeTo">
                <div class="layout-logo-left">
                    <h3>后台管理</h3></div>
                <Menu-item name="about">
                    <Icon type="ios-navigate" :size="iconSize"></Icon>
                    <span class="layout-text">关于</span>
                </Menu-item>
                <Menu-item name="form">
                    <Icon type="document" :size="iconSize"></Icon>
                    <span class="layout-text">表单</span>
                </Menu-item>
                <Menu-item name="table">
                    <Icon type="navicon" :size="iconSize"></Icon>
                    <span class="layout-text">表格</span>
                </Menu-item>
                <Menu-item name="markdown-viewer">
                    <Icon type="social-markdown" :size="iconSize"></Icon>
                    <span class="layout-text">Markdown</span>
                </Menu-item>
                <Menu-item name="markdown-editor-1">
                    <Icon type="edit" :size="iconSize"></Icon>
                    <span class="layout-text">Md编辑器(1)</span>
                </Menu-item>
                <Menu-item name="markdown-editor-2">
                    <Icon type="edit" :size="iconSize"></Icon>
                    <span class="layout-text">Md编辑器(2)</span>
                </Menu-item>
                <Menu-item name="rtf">
                    <Icon type="document-text" :size="iconSize"></Icon>
                    <span class="layout-text">富文本框</span>
                </Menu-item>
                <Menu-item name="upload">
                    <Icon type="ios-cloud-upload-outline" :size="iconSize"></Icon>
                    <span class="layout-text">文件上传</span>
                </Menu-item>
                <Menu-item name="echarts">
                    <Icon type="pie-graph" :size="iconSize"></Icon>
                    <span class="layout-text">图表(Echarts)</span>
                </Menu-item>
            </Menu>
        </i-col>
        <i-col :span="spanRight">
            <div class="layout-header">
                <i-button type="text" @click.native="toggleClick">
                    <Icon type="navicon" size="32"></Icon>
                </i-button>
            </div>
            <div class="layout-breadcrumb">
                <Breadcrumb>
                    <Breadcrumb-item>首页</Breadcrumb-item>
                    <Breadcrumb-item>页面</Breadcrumb-item>
                    <Breadcrumb-item>{{this.$route.path.replace('/','')}}</Breadcrumb-item>
                </Breadcrumb>
            </div>
            <div class="layout-content">
                <div class="layout-content-main">
                    <transition mode="out-in">
                        <router-view></router-view>
                    </transition>
                </div>
            </div>
            <div class="layout-copy">
                2011-2016 &copy; NSLab
            </div>
        </i-col>
    </Row>
</div>

</template>

<script>

export default {

    data() {
            return {
                spanLeft: 5,
                spanRight: 19,
                page: ['about','form','table','markdown-viewer', 'markdown-editor-1', 'markdown-editor-2','rtf','upload','echarts']
            }
        },
        computed: {
            iconSize() {
                return this.spanLeft === 5 ? 14 : 24;
            },
            setActive() {
              return this.$route.path.replace('/','');
            }
        },
        methods: {
            toggleClick() {
                    if (this.spanLeft === 5) {
                        this.spanLeft = 2;

                        this.spanRight = 22;
                    } else {
                        this.spanLeft = 5;
                        this.spanRight = 19;
                    }
                },
                routeTo(e) {
                    //console.log(e);
                    this.$router.push(e);
                }
        }
}

</script>
