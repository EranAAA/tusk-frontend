import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { BoardList } from '../cmps/board/board-list.jsx'
import { loadBoards, updateBoard } from '../store/board/board.action.js'

export const Workspace = () => {

   const [boards, setBoards] = useState(null)
   const dispatch = useDispatch()

   useEffect(() => {
      loadBoardsAsync()
   }, [])

   const loadBoardsAsync = async () => {
      const boardsFromService = await dispatch(loadBoards())
      setBoards(boardsFromService)
   }

   const onUpdateBoard = async (updatedBoard) => {
      await dispatch(updateBoard(updatedBoard))
      const updatedBoards = boards.map(board => board._id === updatedBoard._id ? updatedBoard : board)
      setBoards(updatedBoards)
   }

   if (!boards) return
   (
      <div className="icon-bars">
         <div className="bar"></div>
         <div className="bar"></div>
         <div className="bar"></div>
      </div>
   )

   return (
      <main className='workspace'>
         <BoardList boards={boards} onUpdateBoard={onUpdateBoard} />
      </main>
   )
}