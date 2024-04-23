import style from './From.module.css'
import { useState } from "react";
import { useAppDispatch } from "../../Redux/hooks";
import { addItem } from "../../Redux/dataSlice";
import { v4 as uuidv4 } from "uuid";
export const Form = () => {
    const uniqueId = uuidv4();
    const dispatch = useAppDispatch();
    const [value, setValue] = useState<string>("");
    const [disabled, setDisabled] = useState<boolean>(true);
    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="Описание задачи"
                    value={value}
                    onChange={(e) => {
                        setValue(() => e.target.value);
                        e.target.value ? setDisabled(false) : setDisabled(true);
                    }}
                    className={style.input}
                    required
                />
                <button
                    type="submit"
                    disabled={disabled}
                    onClick={(e) => {
                        e.preventDefault();
                        dispatch(
                            addItem({
                                id: uniqueId,
                                value: value,
                                finished: false,
                            })
                        );
                        setValue('')
                        setDisabled(true)
                    }}
                >
                    +
                </button>
            </form>
        </div>
    );
};
