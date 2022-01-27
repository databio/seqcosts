var plotSequenceCosts = async (plotElement) => {
  // retrieve data
  var seqCostData = await fetch("data.csv").then(
    response => response.text()).then(
    response => { 
      return response
    })

  var linePlot = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": { 
      "values": seqCostData,
      "format": {
        "type": "csv", 
      }
    },
    "title": "Sequencing costs over time",
    "mark": "line",
    "width": 800,
    "height": 400,
    "encoding": {
      "y": {
        "field": "cost_per_mb",
        "type": "quantitative",
        "scale": {"type": "log"},
        "axis": {
          "title": "Cost per MB ($)",
          "labels": null
        }
      },
      "x": {
        "field": "date",
        "type": "temporal",
        "timeUnit": "utcyearmonthdate",
        "axis": {
          "title": "Date",
          "labelAngle": -90 
        }
      }
    }
  }

  vegaEmbed('#'+plotElement, linePlot)
}