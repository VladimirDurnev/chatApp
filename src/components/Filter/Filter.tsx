import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { selectData, setFilterStatus } from "../../Redux/dataSlice";

export const Filter = () => {
    const dispatch = useAppDispatch();
    const { filterStatus } = useAppSelector(selectData);
    const [finishedStatus, setFinishedStatus] = useState(filterStatus);
    const [notFinishedStatus, setNotFinishedStatus] = useState(false);
    useEffect(() => {
        !finishedStatus && !notFinishedStatus && dispatch(setFilterStatus(undefined));
    }, [finishedStatus, notFinishedStatus]);
    return (
        <fieldset >
            <legend>Фильтрации задач по статусу:</legend>

            <div>
                <input
                    type="radio"
                    checked={finishedStatus}
                    onClick={() => {
                        setFinishedStatus((prev) => !prev);
                        notFinishedStatus &&  setNotFinishedStatus((prev) => !prev);
                        dispatch(setFilterStatus(true));
                    }}
                />
                <label>Выполненные</label>
            </div>

            <div>
                <input
                    type="radio"
                    checked={notFinishedStatus}
                    onClick={() => {
                        setNotFinishedStatus((prev) => !prev);
                        finishedStatus &&
                            setFinishedStatus((prev) => !prev);
                        dispatch(setFilterStatus(false));
                    }}
                />
                <label>Невыполненные</label>
            </div>
        </fieldset>
    );
};
