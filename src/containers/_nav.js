/*
*   LEVEL untuk ALKES
*     1. Manager
*     2. Admin Marketing
  */

export default [
  {
    _name: 'CSidebarNav',
    _children: JSON.parse(localStorage.getItem('menu'))	
  }
]