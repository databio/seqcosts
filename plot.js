var plotSequenceCosts = async (plotElement, width=500, height=300) => {
  // retrieve data
  var seqCostData = await fetch("https://databio.org/seqcosts/data/sequencing_cost.csv").then(
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
    "config": {
      "axis": {
        "titleFont": "Arial", 
        "titleFontWeight": 400,
        "titleFontSize": 16,
        "titlePadding": 5,
        "labelFont": "Arial",
        "labelFontSize": 12,
        "grid": false
       },
      "legend": {"labelFont": "Arial", "titleFont": "Arial"},
      "header": {"labelFont": "Arial", "titleFont": "Arial"},
      "mark": {"font": "Arial"},
      "title": {
        "font": "Arial",
        "subtitleFont": "Arial",
        "fontWeight": 400,
        "fontSize": 20,
      },
    },
    "title": "Sequencing costs over time",
    "mark": "line",
    "width": width,
    "height": height,
    "encoding": {
      "y": {
        "field": "cost_per_mb",
        "type": "quantitative",
        "scale": {"type": "log"},
        "axis": {
          "title": "Cost per MB ($)",
          "labels": null,
        }
      },
      "x": {
        "field": "date",
        "type": "temporal",
        "timeUnit": "utcyearmonthdate",
        "axis": {
          "title": "Date",
          "labelAngle": -90,
        }
      }
    }
  }

  vegaEmbed(view='#'+plotElement, spec=linePlot, vgSpec={"renderer": "svg", "scaleFactor": 0.6})
}

var plotSRAStats = async (plotElement, width=800, height=300) => {
  // retrieve data
  var sraData = await fetch(
    "https://databio.org/seqcosts/data/sra_stat.csv").then(
    response => response.text()).then(
    response => { 
      return response
    })

  var linePlot = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": { 
      "values": sraData,
      "format": {
        "type": "csv", 
      }
    },
    "config": {
      "axis": {
        "titleFont": "Arial", 
        "titleFontWeight": 400,
        "titleFontSize": 16,
        "titlePadding": 5,
        "labelFont": "Arial",
        "labelFontSize": 12,
        "grid": false
       },
      "legend": {"labelFont": "Arial", "titleFont": "Arial"},
      "header": {"labelFont": "Arial", "titleFont": "Arial"},
      "mark": {"font": "Arial"},
      "title": {
        "font": "Arial",
        "subtitleFont": "Arial",
        "fontWeight": 400,
        "fontSize": 20,
      },
    },
    "title": "Sequence Read Archive growth",
    "mark": "line",
    "width": width,
    "height": height,
    "transform": [
      { 
        "calculate": "datum.bytes / 1000000000000",
        "as": "terabytes"
      }
    ],
    "encoding": {
      "y": {
        "field": "terabytes",
        "type": "quantitative",
        "scale": {"type": "log"},
        "axis": {
          "title": "TeraBytes in SRA",
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

  vegaEmbed('#'+plotElement, linePlot, vgSpec={"renderer": "svg", "scaleFactor": 0.6})
}
