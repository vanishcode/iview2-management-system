<style scoped>
.echarts {
  margin-left: 20px;
}
.echarts-item {
    float: left;
    width: 500px;
    height: 400px;
}

</style>

<template>

<div class="echarts">
    <div class="echarts-item">
        <IEcharts :option="pie"></IEcharts>
    </div>
    <div class="echarts-item">
        <IEcharts :option="pie_radius"></IEcharts>
    </div>
    <div class="echarts-item">
        <IEcharts :option="line"></IEcharts>
    </div>
    <div class="echarts-item">
        <IEcharts :option="bar"></IEcharts>
    </div>
</div>

</template>

<script>

import IEcharts from 'vue-echarts-v3';

export default {
    components: {
        IEcharts
    },
    data: () => ({
        line: {
            title: {
                text: '曲线图'
            },
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: "销量",
                type: "line",
                data: [5, 20, 36, 10, 10, 20]
            }]
        },
        bar: {
            title: {
                text: '柱状图'
            },
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: "销量",
                type: "bar",
                data: [5, 20, 36, 10, 10, 20]
            }]
        },
        pie: {

            title: {
                text: '饼状图',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋"]
            },
            series: [{
                name: '销量',
                type: 'pie',
                radius: '55%',
                center: ['50%', '50%'],
                data: [{
                    value: 335,
                    name: '衬衫'
                }, {
                    value: 310,
                    name: '羊毛衫'
                }, {
                    value: 234,
                    name: '雪纺衫'
                }, {
                    value: 135,
                    name: '裤子'
                }, {
                    value: 548,
                    name: '高跟鞋'
                }],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        },
        pie_radius: {

            title: {
                text: '环形图',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋"]
            },
            series: [{
                name: '销量',
                type: 'pie',
                radius: ['40%', '60%'],
                data: [{
                    value: 335,
                    name: '衬衫'
                }, {
                    value: 310,
                    name: '羊毛衫'
                }, {
                    value: 234,
                    name: '雪纺衫'
                }, {
                    value: 135,
                    name: '裤子'
                }, {
                    value: 548,
                    name: '高跟鞋'
                }],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        }
    })
}

</script>
