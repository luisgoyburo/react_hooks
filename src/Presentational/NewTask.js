import React from "react";

export default function NewTask({ newTask, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Nueva Tarea"
        value={newTask.title || ""}
        onChange={handleChange}
      />
      {!newTask.title ? null : (
        <>
          <textarea
            name="description"
            placeholder="Detalles de la tarea..."
            value={newTask.description || ""}
            onChange={handleChange}
          />
          <button type="submit">Agregar Tarea</button>
        </>
      )}
    </form>
  );
}
