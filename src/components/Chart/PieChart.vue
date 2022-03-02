<template>
  <div>
    <apexchart
      class="w-custom"
      type="donut"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  name: "PieChart",

  props: { stats: Object },

  data() {
    return {
      status: null,
      series: [0, 0, 0, 0],

      chartOptions: {
        legend: {
          show: true,
          position: "left",
          horizontalAlign: "center",
        },

        plotOptions: {
          pie: {
            startAngle: 0,
            endAngle: 360,
            expandOnClick: true,
            customScale: 1,
            donut: {
              labels: {
                show: true,
                name: {
                  show: true,
                  offsetY: -10,
                  formatter: function (val) {
                    return val;
                  },
                },
                value: {
                  show: true,
                  fontWeight: 700,
                  offsetY: 5,
                  formatter: function (val) {
                    return "#" + val;
                  },
                },
              },
            },
          },
        },

        colors: ["#FE6802", "#6610f2", "#00B140", "#F90005"],
        labels: ["Pending", "Shipped", "Delivered", "Cancelled"],
      },
    };
  },

  watch: {
    stats: {
      handler(newVal) {
        this.status = [
          newVal.pending,
          newVal.shipped,
          newVal.delivered,
          newVal.cancelled,
        ];
        this.series = this.status.map((status) => status);
      },
      immediate: true,
    },
  },
};
</script>

<style scoped>
.w-custom {
  width: 75%;
}

@media (min-width: 320px) {
  .w-custom {
    width: 100%;
  }
}

@media (min-width: 1024px) {
  .w-custom {
    width: 75%;
  }
}
</style>
