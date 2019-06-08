console.log('app is running!')

//JSX - javascript XML

const app = {
    title: 'Annie\'s Indecision App',
    subtitle: 'Put your future in the hands of computer',
    options: ['eat lunch', 'grocery shopping', 'learn react', 'fix task-manager']
}

const onFormSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value

    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
    }

    renderApp()
}

const removeAll = () => {
    app.options = []
    renderApp()
}

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() *app.options.length)
    const option = app.options[randomNum]
    alert(option)
}

let visibility = false

const toggleVisibility = () => {
    visibility = !visibility
    renderApp()
}


const appRoot = document.getElementById('app')

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options': 'No options' }</p>
                <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
                <button onClick={removeAll}>Remove All</button>
                
                <ol>
                    {app.options.map((option) => <li key="option">{option}</li>)}
                </ol>
    
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>

            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{visibility ? 'Hide details' : 'Show details'}</button>
            {visibility &&(
                <div>
                    <p>Hey here are the details!</p>
                </div>
            )}
        </div>
    )

    ReactDOM.render(template, appRoot)
}

renderApp()


// let count = 0
// const addOne = () => {
//     count++
//     renderCounterApp()
// } 

// const minusOne = () => {
//     count--
//     renderCounterApp()
// }

// const reset = () => {
//     count = 0
//     renderCounterApp()
// }


// const appRoot = document.getElementById('app')

// const renderCounterApp = () => {
//     const template2 = (
//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>reset</button>
//     </div>
// )

// ReactDOM.render(template2, appRoot)
// }

// renderCounterApp()