import { mount } from "@vue/test-utils";
import Chart from "@/components/Chart";

describe("Card.vue", () => {
  it("renders the a Line Chart", async () => {
    const wrapper = mount(Chart, {
      props: {
        type: "line",
        series: [
          {
            name: "People",
            type: "area",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          }
        ],
        options: {
          tooltip: {
            enabled: true,
            x: {
              show: true,
              format: "hh:mm:ss"
            }
          },
          colors: ["#6875f5"],
          fill: {
            type: "gradient",
            gradient: {
              type: "vertical",
              opacityFrom: 0.5,
              opacityTo: 0.1,
              stops: [0, 100],
              colorStops: []
            }
          },
          stroke: {
            show: true,
            curve: "smooth",
            width: 2
          },
          grid: {
            yaxis: {
              lines: {
                show: false
              }
            }
          },
          chart: {
            //id: 'vuechart-example'
            toolbar: {
              show: false,
              theme: "light",
              tools: {
                download: false,
                selection: false,
                zoom: true,
                zoomin: true,
                zoomout: true,
                pan: true,
                reset: true,
                customIcons: []
              }
            }
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
            labels: {
              show: true
            }
          },
          yaxis: {
            show: true,
            labels: {
              show: true
            }
          }
        }
      }
    });

    expect(wrapper.html()).toContain("apexcharts-legend");
  });
});
