import { useState } from "react";
import style from "./TodoItem.module.css";
import {
    deleteItem,
    selectData,
    setFinished,
    setValue,
} from "../../Redux/dataSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { IDataItem } from "../../type";
export const TodoItem = ({ value, id, finished }: IDataItem) => {
    const dispatch = useAppDispatch();
    const { filterStatus } = useAppSelector(selectData);
    const [finishedStatus, setFinishedStatus] = useState(finished);
    const [editedValue, setEditedValue] = useState(value);
    const [flag, setFlag] = useState(false);
    return (
        <li
            style={{
                display:
                    filterStatus === true && finished
                        ? "block"
                        : filterStatus === false && !finished
                        ? "block"
                        : filterStatus === undefined
                        ? "block"
                        : "none",
            }}
        >
            <div className={style.todoItem}>
                <input
                    type="checkbox"
                    defaultChecked={finishedStatus}
                    onChange={() => {
                        setFinishedStatus((prev) => !prev);
                        dispatch(
                            setFinished({ id, finished: !finishedStatus })
                        );
                    }}
                />

                {flag ? (
                    <>
                        <input
                            className={style.todoItem_input}
                            type="text"
                            value={editedValue}
                            onChange={(e) => {
                                setEditedValue(e.target.value);
                                dispatch(
                                    setValue({ id, value: e.target.value })
                                );
                            }}
                        />
                    </>
                ) : (
                    <span
                        onDoubleClick={() => {
                            setFlag((prev) => !prev);
                        }}
                    >
                        {editedValue}
                    </span>
                )}
                <div style={{ display: "flex" }}>
                    <button
                        style={{
                            display: flag ? "block" : "none",
                            margin: "0 10px",
                        }}
                        onClick={() => setFlag(false)}
                    >
                        ✓
                    </button>
                    <button onClick={() => dispatch(deleteItem(id))}>x</button>
                </div>
            </div>
        </li>
    );
};
