<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: {
    label: {
      type: String
    },
    chartData: {
      type: Array
    },
    options: {
      type: Object
    },
    // chartColors: {
    //   type: Object
    // },
  },
  mounted() {
    const dates = this.chartData.map(d => d.date);
    const totals = this.chartData.map(d => d.total);


    const totals2 = this.chartData.map(d => d.total2);
    // const xpoint = this.chartData.map(d => d.xpoint);
    // const zpoint = this.chartData.map(d => d.zpoint);

    this.renderChart(
      {
         labels: dates,
        datasets: [
          {
            label: 'x축데이터',
            data: totals,
            type : 'line',         // 'line' type
            fill : false,         // 채우기 없음
            lineTension : 0.2,  // 0이면 꺾은선 그래프, 숫자가 높을수록 둥글해짐
            pointRadius : 0,    // 각 지점에 포인트 주지 않음
            backgroundColor: 'rgb(255, 153, 1)',
            borderColor: 'rgb(255, 153, 1)',
          },
           {
            label: 'z축데이터',
            data: totals2,
            type : 'line',         // 'line' type
            fill : true,         // 채우기 없음
            lineTension : 0.2,  // 0이면 꺾은선 그래프, 숫자가 높을수록 둥글해짐
            pointRadius : 0,    // 각 지점에 포인트 주지 않음
            backgroundColor: 'rgb(255, 153, 3)',
            borderColor: 'rgb(255, 153, 3)',
          }
        ]
      },
      this.options,
      // {
      //   responsive: true,
      //   maintainAspectRatio: false,
      //   title: {
      //     display: true,
      //     text: "My Data"
      //   }
      // }
    );
  }
};
</script>