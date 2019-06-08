class Counter extends React.Component {
constructor(props){
    super(props)
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.state = {
        count: 0
    }
}

componentDidMount() {
    try {
        const stringCount = localStorage.getItem('num')
        const numbers = parseInt(stringCount, 10)

        if (!isNaN(numbers)) {
            this.setState(() => ({
                count: numbers}))
        }
    } catch (e) {
    }
}

componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count ) {
        const json = JSON.stringify(this.state.count)
        localStorage.setItem('num', json)
    }

}

componentWillUnmount(){
    console.log('component will unmount!')
}

handleAddOne () {
    this.setState((prevState) => {
        return {
            count: prevState.count +1
        }
    })
}

handleMinusOne() {
    this.setState((prevState) => {
        return {
            count: prevState.count -1
        }
    })
}

handleReset() {
    this.setState(() => {
        return {
            count: 0
        }
    })
}

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}


ReactDOM.render(<Counter />, document.getElementById('app'))