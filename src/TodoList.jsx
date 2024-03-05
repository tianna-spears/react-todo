import React from 'react';

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
    }
  ];
  

function TodoList () {
    return (
        <ul>
        {todoList.map(function (item) {
    
          return (
          <li key={item.task_ID}>
          <span> {item.title} </span>
          <span> {'by'} {item.due_date} </span>
            </li>
          );
        })}
        </ul>
    )
}

export default TodoList;