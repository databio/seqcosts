# SeqCosts

This [GitHub repository](https://github.com/databio/seqcosts) provides an API and visualization of the cost of sequencing over time. Sequencing cost data comes from [NHGRI DNA sequencing costs](https://www.genome.gov/about-genomics/fact-sheets/DNA-Sequencing-Costs-Data). It also contains data for the growth of sequence data in SRA, with data from [SRA stats](https://www.ncbi.nlm.nih.gov/Traces/sra/sra_stat.cgi).

## Motivation

I like to use these plots showing the rapid decrease in sequencing costs in lectures and presentations, or the rapid growth of available sequences, but it was a challenge to keep the plots up-to-date. The plots and data provided directly from NHGRI was not amenable to be permanently linked in a lecture that would auto update, because URLs would change, new plots would be produced rather than updating old links with new data, etc. To make it more useful, I needed a stable URL for data and visualization. So, I made one and put it here so that anyone can update the data. I have simply reformatted the data to make it more FAIR; instead of an excel spreadsheet and an graphical image, I provide an API to access the data, and a vega-lite dynamic plot that just retrieves that data. This, hosted in a persistent spot, makes it possible to produce presentations that are always automatically up-to-date.

## Use

You can get the raw CSV data at:
- Costs: [https://databio.org/seqcosts/data/sequencing_cost.csv](https://databio.org/seqcosts/data/sequencing_cost.csv).
- SRA content: [https://databio.org/seqcosts/data/sra_stat.csv](https://databio.org/seqcosts/data/sra_stat.csv).

## View

You can view corresponding vega-lite visualizations at:
- Costs: [https://databio.org/seqcosts/cost.html](https://databio.org/seqcosts/cost.html).
- SRA data: [https://databio.org/seqcosts/sra.html](https://databio.org/seqcosts/sra.html).

## Embed

If you want to use the plot in a presentation or web page, you have two options

### Use javascript directly

You can look at how I embedded it in the html pages above and just do something similar to use the underlying data however you want.

### Use an iframe.

You can embed the HTML page using an `<iframe>` like this:

```
<iframe src="https://databio.org/seqcosts/sra.html" width="950" height="550"></iframe>
<a style="font-size:0.6em" href="https://databio.org/seqcosts">databio.org/seqcosts</a>
```

## Update

If you use this and notice it's not updated, please add any new rows to `data/sequencing_costs.csv` via Pull Request.
