import component from './component';
import './style.css';

function startCount() {
    let count = 0;

    setInterval(() => {
        setCount(count);
        count++;
    }, 1000);

    function setCount(count) {
        document.getElementById('count').innerHTML = `Count: ${count}`;
    }

    setCount(count);
}

startCount();


let demoComponent = component();
document.body.appendChild(demoComponent);

//HMR 接口
if (module.hot) {
    module.hot.accept('./component', () => {
        const nextComponent = component();
        document.body.replaceChild(nextComponent, demoComponent);
        demoComponent = nextComponent;
    })
}