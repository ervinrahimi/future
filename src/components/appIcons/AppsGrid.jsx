"use client"

import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core';
import { useState } from 'react';
import styles from './AppsGrid.module.css';

function DraggableItem({ id, content }) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`${styles.gridItem} ${isDragging ? styles.dragging : ''}`}
    >
      {content}
    </div>
  );
}

function DroppableCell({ id, children, onDrop }) {
  const { setNodeRef, isOver } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      className={styles.gridCell}
      style={{ backgroundColor: isOver ? '#e0e0e0' : '#f9f9f9' }}
      onDrop={(event) => onDrop(event, id)}
    >
      {children}
    </div>
  );
}

export default function GridComponent() {
  // تعریف 30 سلول با آیتم‌های پیش‌فرض
  const [cells, setCells] = useState(
    Array.from({ length: 30 }, (_, index) => ({
      id: `cell-${index + 1}`,
      item: index < 10 ? { id: `item-${index + 1}`, content: `Div Box ${index + 1}` } : null,
    }))
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    setCells((currentCells) => {
      const activeCellIndex = currentCells.findIndex((cell) => cell.item && cell.item.id === active.id);
      const overCellIndex = currentCells.findIndex((cell) => cell.id === over.id);

      // اگر هر دو سلول پر باشند، آیتم‌ها را جابجا می‌کنیم
      if (currentCells[activeCellIndex] && currentCells[overCellIndex]) {
        const updatedCells = [...currentCells];
        [updatedCells[activeCellIndex].item, updatedCells[overCellIndex].item] = [
          updatedCells[overCellIndex].item,
          updatedCells[activeCellIndex].item,
        ];
        return updatedCells;
      }

      return currentCells;
    });
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className={styles.gridContainer}>
        {cells.map((cell) => (
          <DroppableCell key={cell.id} id={cell.id} onDrop={handleDragEnd}>
            {cell.item && <DraggableItem id={cell.item.id} content={cell.item.content} />}
          </DroppableCell>
        ))}
      </div>
    </DndContext>
  );
}
