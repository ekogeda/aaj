<template>
  <div>
    <apexchart
      width="100%"
      height="400"
      type="bar"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  name: "BarChart",

  props: {
    name: String,
    stats: Object,
  },

  data() {
    return {
      data: null,

      series: [
        {
          name: this.name,
          data: [],
        },
      ],

      options: {
        legend: { show: false },
        chart: { id: "basic-bar" },
        dataLabels: { enabled: true },
        plotOptions: {
          bar: { distributed: true },
        },

        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    };
  },

  mounted() {
    this.data = [
      this.stats.jan,
      this.stats.feb,
      this.stats.mar,
      this.stats.apr,
      this.stats.may,
      this.stats.jun,
      this.stats.jul,
      this.stats.aug,
      this.stats.sep,
      this.stats.oct,
      this.stats.nov,
      this.stats.dec,
    ];

    const newData = this.data.map((data) => data);
    this.series = [{ data: newData }];
  },
};
</script>

<style scoped></style>
