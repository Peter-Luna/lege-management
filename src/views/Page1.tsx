import { useSelector } from "react-redux";

function View() {
    // 获取仓库数据
    const { num } = useSelector((state: any) => ({
        num: state.num
    }));
    return (
        <div className='home'>
            <p>page1</p>
            <p>num: {num}</p>
        </div>
    );
}

export default View;