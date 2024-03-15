import React from 'react';
import TodoListItem from './TodoListItem.jsx';

const todoList= [
    {
      title: 'Register for upcoming React Class',
      due_date: 'February 4, 2024',
      task_ID: 0, 
    }, 
    {
      title: 'Attend Code The Dream Grackle Student Orientation',
      due_date: 'February 6, 2024',
      task_ID: 1,
    },
    {
      title: 'Double check login to CTD Learns App, Slack, and download textbook',
      due_date: 'February 14, 2024',
      task_ID: 2,
    },
    {
      title: 'Review all Grackle Course Material',
      due_date: 'February 20, 2024',
      task_ID: 3,
    },
    {
      title: 'Code The Dream HW Assignment 1',
      due_date: 'February 27, 2024',
      task_ID: 4,
    },
    {
      title: 'Code The Dream HW Assignment 2',
      due_date: 'March 5, 2024',
      task_ID: 5,
    },
    {
      title: 'Code The Dream HW Assignment 3',
      due_date: 'March 12, 2024',
      task_ID: 6,
    },
  ];
  
function TodoList ({todos}) {
  return (
    <div>
      <ul>
        {todoList.map(TodoListItem) } (
          <TodoListItem key={todo.id} todo={todo} />
      </ul>
      )
    </div>
)};    

export default TodoList;