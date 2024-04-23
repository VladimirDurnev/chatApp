import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { reorderList, selectData } from "../../Redux/dataSlice";
import { Reorder } from "framer-motion";
import { IDataItem } from "../../type";
import { TodoItem } from "../TodoItem/TodoItem";

export const TodoList = () => {
    const { data } = useAppSelector(selectData);
    const dispatch = useAppDispatch();
    const handleReorder = (list: IDataItem[]) => {
        dispatch(reorderList(list));
    };
    return (
        <Reorder.Group axis="y" values={data} onReorder={handleReorder} style={{minHeight: '500px', minWidth: '500px'}}>
    
            {data.map((item) => (
                <Reorder.Item
                    style={{ listStyle: "none"}}
                    key={item.id}
                    value={item}
                >
                    <TodoItem {...item}></TodoItem>
                </Reorder.Item>
            ))}
        </Reorder.Group>
    );
};
//  <TodoItem key={item.id} {...item}></TodoItem>
