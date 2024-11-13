// import './comp1.scss' //全局引入

// 模块化的引入方式
import styles from './comp1.module.scss';

function Comp1 () {
    return (
        <div className={styles.box}>
            <p>Comp1</p>
        </div>
    );
}

export default Comp1;