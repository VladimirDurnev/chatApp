import { TodoList } from "../TodoList/TodoList";
import { Form } from "../Form/Form";
import { Filter } from "../Filter/Filter";

export const WidgetTodoList = () => {
    return (
        <div>
            
            <Form></Form>
            <h3>double click для изменения элемента</h3>
            <Filter></Filter>
            <TodoList></TodoList>
        </div>
    );
};
