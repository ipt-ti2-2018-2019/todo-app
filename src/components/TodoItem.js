import React from "react";

/**
 * @augments React.Component<{ task: { description: string, isComplete: boolean }, onEditTodo(newText: string): void, onDeleteTodo(): void, onToggleCompleteTodo(): void }>
 */
export class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      editingText: ""
    };
  }

  render() {
    if (this.state.isEditing) {
      return (
        <li className="todo-item todo-item-editing">
          <input
            type="text"
            value={this.state.editingText}
            onChange={(evt) => this.onTextChange(evt)}
          />
          <div className="todo-item-actions">
            <button type="button" onClick={(evt) => this.onSaveEdit(evt)}>
              <span role="img" aria-label="Guardar">
                ✔
              </span>
            </button>
            <button type="button" onClick={(evt) => this.onCancelEdit(evt)}>
              <span role="img" aria-label="Cancelar">
                ❌
              </span>
            </button>
          </div>
        </li>
      );
    } else {
      return (
        <li
          className={
            this.props.task.isComplete
              ? "todo-item todo-item-complete"
              : "todo-item"
          }
        >
          <span className="todo-item-description">
            {this.props.task.description}
          </span>
          <div className="todo-item-actions">
            <button type="button" onClick={(evt) => this.onEditTodo(evt)}>
              <span role="img" aria-label="Editar">
                ✏️
              </span>
            </button>
            <button type="button" onClick={(evt) => this.onDeleteTodo(evt)}>
              <span role="img" aria-label="Apagar">
                🗑️
              </span>
            </button>
            <button type="button" onClick={(evt) => this.onToggleComplete(evt)}>
              <span
                role="img"
                aria-label={
                  "Marcar como " +
                  (this.props.task.isComplete ? "por fazer" : "concluído")
                }
              >
                {this.props.task.isComplete ? "👎" : "👍"}
              </span>
            </button>
          </div>
        </li>
      );
    }
  }

  onToggleComplete(evt) {
    this.props.onToggleCompleteTodo();
  }

  onDeleteTodo(evt) {
    this.props.onDeleteTodo();
  }

  onEditTodo(evt) {
    this.setState({
      isEditing: true,
      editingText: this.props.task.description
    });
  }

  onCancelEdit(evt) {
    this.setState({ isEditing: false });
  }

  /**
   *
   * @param {React.ChangeEvent<HTMLInputElement>} evt
   */
  onTextChange(evt) {
    let text = evt.target.value;

    this.setState({ editingText: text });
  }

  onSaveEdit(evt) {
    this.setState({ isEditing: false });
    this.props.onEditTodo(this.state.editingText);
  }
}
