import React from "react";
import Plot from "react-plotly.js";


var StockSymbol = "TSLA";

const names = ["Open	914.77,  Mkt cap	936.55B,  Mkt cap	936.55B", "High	960.66,  P/E ratio	302.62,  52-wk low	539.49", "Low	909.04"];
// function clickHandler(){
//   console.log("TESTS!")
//   stockSymbol = "APPL";
//   console.log(stockSymbol);
//   fetchStock();

// }
class Stock extends React.Component {
  // clickHandler(){
  //   console.log("TESTS!")
  //   stockSymbol = "FB"

  // }
  constructor(props) {
    super(props);
    this.fetchStock = this.fetchStock.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)

    this.state = {
      stockChartXValues: [],
      stockChartYValues: [],
      // stockCode: stockSymbol,
    };
  }


  componentDidMount() {
    this.fetchStock();
  }

  fetchStock() {
    const pointerToThis = this;
    console.log(pointerToThis);
    const API_KEY = "HGJWFG4N8AQ66ICD";
    // let StockSymbol = stockSymbol;
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

    fetch(API_Call)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        for (var key in data["Time Series (Daily)"]) {
          stockChartXValuesFunction.push(key);
          stockChartYValuesFunction.push(
            data["Time Series (Daily)"][key]["1. open"]
          );
        }

        // console.log(stockChartXValuesFunction);
        pointerToThis.setState({
          stockChartXValues: stockChartXValuesFunction,
          stockChartYValues: stockChartYValuesFunction,
        });
      });
  
  }
  clickHandler() {
    console.log("Click happened");
    StockSymbol = "APPL";
        // this.componentDidMount();
        this.fetchStock();
  }
  render() {
    return (
      <div>
        <h1>Stock Market</h1>
        {/* <div>
          <h2 id="testclick" onClick={this.clickHandler}>
            {names[0]}
          </h2>
          <h2>{names[1]}</h2>
        </div> */}
        <Plot
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "red" },
            },
          ]}
          layout={{ width: 600, height: 400, title: StockSymbol }}
          
        />
        {/* <Symbols /> */}
        <div>
          <h3>
            {names[0]}
          </h3>
          <h3>{names[1]}</h3>
          <h3>{names[2]}</h3>

        </div>
      </div>
      
    );
  }
}

export default Stock;
