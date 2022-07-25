const domContainer = document.querySelector('#root');
/*const myElement = React.createElement(
    'div',
    null,[
        React.createElement('p', null, 'Nabila'),
        React.createElement('p', null, 'Hossain')
    ]
);*/

/*const myElement = (
    <div>
        <h1 id='display'>0</h1>
        <button id='button' class='btn btn-primary'>Increment +</button>
    </div>
);*/

const Increment = () => {
    const [counter,setCounter] = React.useState(0);
    return (<div>
        <h1 id='display'>{counter}</h1>
        <button onClick={ ()=> setCounter(counter+1)} id='button' className='btn btn-primary'>Increment +</button>
    </div>)
};
ReactDOM.render(<Increment/>, domContainer);
