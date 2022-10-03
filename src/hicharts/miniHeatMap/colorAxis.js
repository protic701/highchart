
const ColorAxis ={

  gridLineWidth: 0,
    stops: [
      [0, "#BEDFEC"],
      [0.1, ""],
      [0.3, "#69B1CC"],
      [0.5, " #536CC5"],
      [1, "#F47954"],
    ],
    min: 0,
    max: 27246,
    labels: {
      formatter: function () {
        return (this.value = "");
      },
    },
    // dataClasses: [
    //   {#FFFFFF
    //     from: 0,
    //     to: 9,
    //     color: "#E6F3F7",
    //   },
    //   {
    //     from: 9,
    //     to: 30,
    //     color: "#BEDFEC",
    //   },
    //   {
    //     from: 30,
    //     to: 50,
    //     color: "#69B1CC",
    //   },
    //   {
    //     from: 50,
    //     to: 70,
    //     color: " #536CC5",
    //   },
    //   {
    //     from: 70,
    //     to: 80,
    //     color: "#24CBE5",
    //   },
    //   {
    //     from: 80,
    //     to: 120,
    //     color: "#F47954",
    //   },
    // ],
  }

  export default ColorAxis;