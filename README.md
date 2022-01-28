# SeqCosts

This repository provides an API and visualization of the cost of sequencing over time. Data comes from [NHGRI DNA sequencing costs](https://www.genome.gov/about-genomics/fact-sheets/DNA-Sequencing-Costs-Data). 

## Motivation

I like to use this plot in lectures and presentations, but I grew frustrated with keeping it up-to-date. The NHGRI plots and data was not amenable to be permanently linked in a lecture; they would change URLs, release new plots instead of updating old ones when data changed, etc. To make it more useful, I needed a stable URL for both data and visualization. So, I made one and put it here so that anyone can update the data. I have simply reformatted the data to make it more FAIR; instead of an excel spreadsheet and an graphical image, I provide an API and a vega-lite dynamic plot.

## Use

You can get the raw CSV data at:
- Costs: [https://databio.org/seqcosts/data/sequencing_cost.csv](https://databio.org/seqcosts/data/sequencing_cost.csv).
- SRA content: [https://databio.org/seqcosts/data/sra_stat.csv](https://databio.org/seqcosts/data/sra_stat.csv).




## View

You can embed the vega-lite visualization at:
- Costs: [https://databio.org/seqcosts/cost.html](https://databio.org/seqcosts/cost.html).
- SRA data: [https://databio.org/seqcosts/sra.html](https://databio.org/seqcosts/sra.html).


## Update

If you use this and notice it's not updated, please add any new rows to [data/sequencing_costs.csv](data/sequencing_costs.csv) via Pull Request.
