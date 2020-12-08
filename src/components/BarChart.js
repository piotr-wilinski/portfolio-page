import React, { createRef, useEffect } from 'react';
import { Chart } from 'chart.js'
import { useTranslation } from 'react-i18next'

export const BarChart = () => {
  const chartRef = createRef()
  const { t } = useTranslation()

  useEffect(() => {
    const myChartRef = chartRef.current.getContext('2d')

    const chart = new Chart(myChartRef, {
      type: 'horizontalBar',
      data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'ES6 & React', 'PHP', 'Wordpress', 'UI & UX Design', 'SEO'],
        datasets: [
          {
            label: "",
            data: [80, 80, 70, 50, 25, 30, 40, 50],
            fill: false,
            backgroundColor: 'rgba(0, 212, 255, 0.7)'
          }
        ]
      },
      options: {
        aspectRatio: 1.66,
        tooltips: {
          enabled: false
        },
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: false,
            },
            ticks: {
              fontColor: '#808080',
              fontStyle: "bold"
            }
          }],
          xAxes: [{
            gridLines: {
              color: '#808080'
            },
            ticks: {
              fontColor: '#808080',
              fontStyle: "bold",
              min: 0,
              max: 100,
              callback: function (value) {
                if (value === 20)
                  return t('about.skillLvlOne');
                else if (value === 40)
                  return t('about.skillLvlTwo');
                else if (value === 60)
                  return t('about.skillLvlThree');
                else if (value === 80)
                  return t('about.skillLvlFour');
                else if (value === 100)
                  return t('about.skillLvlFive');
                else
                  return '';
              }
            }
          }]
        }
      }
    })
    chart.canvas.parentNode.style.width = '100%';

  }, [chartRef, t])

  return (
    <div className="chart-container">
      <canvas id="myChart" ref={chartRef} />
    </div>
  )
}