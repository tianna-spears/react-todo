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
    {
      title: 'Mindset Assignment + review material over the last three weeks, revise assignments, and resubmit if needed.',
      due_date: 'March 19, 2024',
      task_ID: 7,
    },
  ];
  
  function TodoList () {
    return (
      <ul>
        {todoList.map((item) => {
          return ( 
            < TodoListItem 
            title={item.title} 
            due_date={item.due_date} 
            key={item.task_ID}
            />
                )
        })}
      </ul>
    )
}

export default TodoList;