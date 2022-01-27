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
    "width": 600,
    "height": 500,
    "encoding": {
      "y": {
        "title": "Cost per MB",
        "field": "cost_per_mb",
        "type": "quantitative",
        "scale": {"type": "log"},
        "axis": {
          "labels": null,
          "title": null
        }
      },
      "x": {
        "title": "date",
        "field": "date",
        "type": "temporal",
        "timeUnit": "utcyearmonthdate",
        "axis": {
          "title": null,
          "labelAngle": -90 
        }
      }
    }
  }

  vegaEmbed('#'+plotElement, linePlot)
}