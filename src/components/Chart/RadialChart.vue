<template>
  <div>
    <apexchart
      type="radialBar"
      width="100%"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  name: "RadialChart",

  props: {
    name: String,
    color: String,
    stats: Number,
  },

  data() {
    return {
      data: null,
      series: [0],

      chartOptions: {
        chart: { type: "radialBar" },

        plotOptions: {
          radialBar: {
            hollow: { size: "60%" },
          },
        },

        colors: [this.color],
        labels: [this.name],
      },
    };
  },

  watch: {
    stats: {
      handler(newVal) {
        this.data = [newVal];
        this.series = this.data.map((status) => status);
      },
      immediate: true,
    },
  },
};
</script>

<style scoped></style>
