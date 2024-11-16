import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../types/store";


function View() {
    // 获取仓库数据
    const { num } = useSelector((state: RootState) => ({
        num: state.num
    }));

    // 修改仓库数据
    const dispatch = useDispatch();
    const changeNum = () => {
        dispatch({
            type: 'add2',
            val: 10
        });
    }

    return (
        <div className='home'>
            <p>page1</p>
            <p>num: {num}</p>
            <button onClick={changeNum} >按钮</button>
        </div>
    );
}

export default View;