import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { BsCheck2 } from 'react-icons/bs'

export const ModalBoardMemberDelete = ({ board, onUpdateBoard, memberId }) => {

  const onDeleteMember = (memberId) => {
    // const boardMemberIdx = updatedBoard.members.findIndex(member => member._id === id)
    // const userIdx = users.findIndex(user => user._id === id)
    // const isBoardMember = updatedBoard.members.some(member => member._id === id)

    // const updatedMembers = isBoardMember
    //    ? updatedBoard.members.splice(boardMemberIdx, 1)
    //    : updatedBoard.members.push(
    //       users[userIdx]?.imgURL
    //          ? { _id: users[userIdx]._id, username: users[userIdx].username, fullname: users[userIdx].fullname, imgURL: users[userIdx].imgURL }
    //          : { _id: users[userIdx]._id, username: users[userIdx].username, fullname: users[userIdx].fullname }
    //    )

    // const newBoard = { ...updatedBoard }
    // onUpdateBoard(newBoard)
    // setBoardMembers(newBoard)
  }


  return (
    <section className='checklist-delete'>
      {/* <p className='warning-msg'>Deleting a checklist is permanent and there is no way to get it back.</p>
         <button className='delete-btn' onClick={onDeleteMember}>Delete checklist</button> */}
    </section>
  )

}