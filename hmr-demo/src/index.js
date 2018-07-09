import component from './component';
// import style from './style.css';

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