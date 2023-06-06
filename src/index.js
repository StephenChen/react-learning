import React, { useEffect, useLayoutEffect, useState } from "react";
import ReactDOM from "react-dom";

function Welcome1(props) {
  return <p>hello1, {props.name}</p>;
}

const Welcome2 = (props) => {
  return <p>hello2, {props.name}</p>;
};

class Welcome3 extends React.Component {
  render() {
    return <p>hello3, {this.props.name}</p>;
  }
}

class Son extends React.Component {
  constructor(props) {
    super(props);
    // 初始化数据
    this.state = { n: 0 };
  }
  onClick = () => {
    this.setState((state) => ({ n: state.n + 1 }));
    this.setState((state) => ({ n: state.n - 1 }));
  };
  shouldComponentUpdate(newProps, newState) {
    if (newState.n === this.state.n) {
      return false;
    } else {
      return true;
    }
  }

  add() {
    // 写数据用 this.setState 写
    this.setState((state) => ({ n: state.n + 1 }));
  }

  render() {
    return (
      // 读数据
      <div>
        son n: {this.state.n}
        <button onClick={() => this.add()}>+1</button>
        <button onClick={this.onClick}>+1-1</button>
      </div>
    );
  }
}

const App = () => {
  const [n, setN] = React.useState(0);
  const [m, setM] = React.useState(0);
  const onClickM = () => setM(m + 1);
  useEffect(() => {
    console.log("n 更新了");
  }, [n]);
  const [value, setValue] = useState(0);
  useLayoutEffect(() => {
    document.querySelector("#x").innerText = `value: 1000`;
  }, [value]);
  return (
    <h3>
      my first react app
      <Welcome1 name="cxy" />
      <Welcome2 name="cxy" />
      <Welcome3 name="cxy" />
      <Son />
      <div>
        n:{n}
        <button onClick={() => setN(n + 1)}>n+1</button>
        <hr />
        <button onClick={onClickM}>m+1</button>
      </div>
      <div id="x" onClick={() => setValue(0)}>
        value: {value}
      </div>
    </h3>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
