import { ColorType, DeepPartial, HorzScaleOptions, createChart, PriceScaleOptions, TimeChartOptions } from "lightweight-charts";
import React, { useEffect } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";


export default function Chart({ arr = [], currency, days }: { arr: any[], currency: string, days: string }) {

  const chartContainerRef = React.useRef<HTMLDivElement>(null);
  const { width, height } = useWindowDimensions();
  const initialDat = [
    { time: '2018-12-22', value: 32.51 },
    { time: '2018-12-23', value: 31.11 },
    { time: '2018-12-24', value: 27.02 },
    { time: '2018-12-25', value: 27.32 },
    { time: '2018-12-26', value: 25.17 },
    { time: '2018-12-27', value: 28.89 },
    { time: '2018-12-28', value: 25.46 },
    { time: '2018-12-29', value: 23.92 },
    { time: '2018-12-30', value: 22.68 },
    { time: '2018-12-31', value: 22.67 },
  ];

  //convert the time of initialData to timestamp
  

  useEffect(() => {
    const initialData = arr.map((item: any) => {
      const date = new Date(item[0]).toISOString().split('T')[0];
      return {
        time: date,
        value: item[1],
      };
    }
    );
    // remove duplicate time in initialData
    const unique = initialData.filter((v, i, a) => a.findIndex(t => (t.time === v.time)) === i);
    const chart = createChart(chartContainerRef.current as HTMLDivElement, {
      layout: {
        background: { type: ColorType.Solid, color: "#ffffff" },
      },
      width:width>760?750:344,
      height: width>760?400:180,
      leftPriceScale: {
        visible: true,
      },
      rightPriceScale: {
        visible: false,
      },
    });

    const newSeries = chart.addAreaSeries({
      lineColor: "#0052FE",
      topColor: "#5a8efd",
      bottomColor: "#ffffff",
      lineWidth: 1,
    });
    chart.timeScale().fitContent();
    chart.timeScale().applyOptions({
      fixLeftEdge: true,
      fixRightEdge: true,
      borderColor: "#9d9d9d",
      tickMarkFormatter: (time: number) => {
        // Convert timestamp to Date object
        const date = new Date(time);

        // Get day, month, and year
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' });
        const year = date.getFullYear();

        // Pad day with leading zero if needed
        const paddedDay = day < 10 ? '0' + day : day;

        // Return formatted date
        return `${paddedDay} ${month}`;
      }

    } as DeepPartial<HorzScaleOptions>);

    // move price scale to the left from right
    //get the id of the price scale



    newSeries.setData(unique);
    return () => {
      chart.remove();
    }
  },[]);

  return (
    <div ref={chartContainerRef}>

    </div>
  );
}