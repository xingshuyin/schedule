<template>
  <d2-container>
    <span v-for="danxiang in danxiangs" v-on:click="changedanxiang(danxiang['id'])">
      <label>{{ danxiang['name'] }}<input type="radio" v-model="danxiang['id']" name="danxiang">&nbsp;&nbsp;</label>
    </span>

    <div id="schedule" style="width: 100%;"></div>
  </d2-container>
</template>

<script>

import {use} from 'echarts/core'
import {CanvasRenderer} from 'echarts/renderers'
import {PieChart} from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components'
import {request} from "@/api/service";

// use([
//   CanvasRenderer,
//   PieChart,
//   TitleComponent,
//   TooltipComponent,
//   LegendComponent
// ])
export default {
  data() {
    request({
      url: '/sche/data/0/danxiang/',
      method: 'get',
      data: {}
    }).then((res) => {
      this.danxiangs = res  //TODO:没懂
    })
    return {
      danxiangs: [],
    }
  }, // 图表实例
  mounted() {
    request({
      url: '/sche/data/0/danxiang/',
      method: 'get',
      data: {}
    }).then((res) => {
      this.init(res[0]['id'])
      // this.danxiangs = res  //TODO:没懂
    })

  }
  ,
  methods: {
    changedanxiang(danxiang) {
      this.init(danxiang)
    }
    ,

    init(id) {

      // 绘制图表

      const data = request({
        url: '/sche/data/' + id + '/chart/',
        method: 'get',
        data: {}
      }).then((res) => {

        console.log('data', res)
        const ele = document.getElementById('schedule')
        ele.style.height = res.count + 'px'
        let myChart = this.$echarts.getInstanceByDom(ele)
        if (!myChart) {
          myChart = this.$echarts.init(ele)
        }
        const r_start = res.r_start
        const r_end = res.r_end
        const series_r = []
        for (var i in r_end) {
          console.log(i)
          series_r.push({
            name: '',
            type: 'bar',
            stack: i,
            itemStyle: {
              color: 'skyblue',
              borderColor: '#c63131',
              borderWidth: 0,
              borderRadius: 2,
            },
            barWidth: 10,
            zlevel: -1,
            z: 1,
            data: r_end[i]
          })
        }
        for (var i in r_start) {
          series_r.push({
            name: '',
            type: 'bar',
            stack: i,
            itemStyle: {
              color: '#ffffff',
              borderWidth: 0,
              borderRadius: 2,
            },
            barWidth: 10,
            zlevel: -1,
            z: 2,
            data: r_start[i]
          })
        }
        console.log('series_r', series_r)
        var option = {
          backgroundColor: '#ffffff',
          title: {
            text: '粤长辉龙岗德沁苑商住楼结构及粗装修工程',
            padding: 20,
            textStyle: {
              fontSize: 17,
              fontWeight: 'bolder',
              color: '#333'
            },
            subtextStyle: {
              fontSize: 13,
              fontWeight: 'bolder'
            }
          },
          grid: {
            containLabel: true,
            show: false,
            right: 130,
            left: 40,
            bottom: 40,
            top: 90
          },
          xAxis: {
            type: 'time',
            axisLabel: {
              show: true,
              interval: 0
            }
          },
          yAxis: {
            type: 'category',
            axisLabel: {
              show: true,
              interval: 0,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: ['#2f0707','#3d0909'],
                width: 1,
              }
            },
            data: res.yAxis
          },
          tooltip: {
            trigger: 'item',
            formatter: function (params) {

              if (params.data.hasOwnProperty("start")) {
                return params.data.name + ' ' + params.data.start + '-' + params.data.value + '<br/>' + params.data.fx_id
              } else {
                return params.data.name + ' ' + params.data.value + '-' + params.data.end + '\n'
              }
              // console.log(params)
              // console.log(params.value[params.encode.y[0]])
            }
          },
          series: series_r
        }
        myChart.setOption(option, true)  //true不合并数据
      })

    }
  }

}
</script>

<style scoped lang="scss">

</style>
