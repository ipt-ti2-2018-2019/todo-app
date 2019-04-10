import React from "react";

/**
 * @augments React.Component<{ onFilterChange(type: string): void, onDeleteDone(): void, currentFilter: string }>
 */
export class TodoListActions extends React.Component {
  handleSetFilter(evt, type) {
    this.props.onFilterChange(type);
  }

  handleDeleteDone() {
    this.props.onDeleteDone();
  }

  render() {
    return (
      <div className="todo-list-actions">
        <button
          disabled={this.props.currentFilter === "all"}
          type="button"
          onClick={(evt) => this.handleSetFilter(evt, "all")}
        >
          Ver tudo
        </button>
        <button
          type="button"
          disabled={this.props.currentFilter === "done"}
          onClick={(evt) => this.handleSetFilter(evt, "done")}
        >
          Ver concluídas
        </button>
        <button
          type="button"
          disabled={this.props.currentFilter === "todo"}
          onClick={(evt) => this.handleSetFilter(evt, "todo")}
        >
          Ver por fazer
        </button>
        <button
          type="button"
          onClick={(evt) => this.handleDeleteDone(evt)}
          className="todo-list-action-delete-all"
        >
          Apagar concluídas
        </button>
      </div>
    );
  }
}
