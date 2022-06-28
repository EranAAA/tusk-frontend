import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { BsCheck2 } from 'react-icons/bs'

import { setModal } from '../../store/app/app.actions'

export const ModalBoardMember = ({ element, task, updateTask, board, onUpdateBoard, deleteMemberFromBoard }) => {

   const { users } = useSelector(({ userModule }) => userModule)
   const [searchMember, setSearchMember] = useState('')
   const [filterUsers, setFilterUsers] = useState(users)
   const [updatedBoard, setBoardMembers] = useState(board)
   const dispatch = useDispatch()

   if (!board) return
   if (!users) return

   const initials = (member) => ([...member.fullname])

   const onToggle = (id) => {
      const boardMemberIdx = updatedBoard.members.findIndex(member => member._id === id)
      const userIdx = users.findIndex(user => user._id === id)
      const isBoardMember = updatedBoard.members.some(member => member._id === id)

      // if (isBoardMember) return dispatch(setModal({ element, category: 'Board members delete', title: 'Remove from board', props: { task, updateTask, board, onUpdateBoard } }))

      const updatedMembers = isBoardMember
         ? updatedBoard.members.splice(boardMemberIdx, 1)
         : updatedBoard.members.push(
            users[userIdx]?.imgURL
               ? { _id: users[userIdx]._id, username: users[userIdx].username, fullname: users[userIdx].fullname, imgURL: users[userIdx].imgURL }
               : { _id: users[userIdx]._id, username: users[userIdx].username, fullname: users[userIdx].fullname }
         )

      const newBoard = { ...updatedBoard }
      onUpdateBoard(newBoard)
      setBoardMembers(newBoard)
   }

   const handleChange = ({ target }) => {
      setSearchMember(target.value)
      setFilterUsers(users.filter(user => user.fullname.toLowerCase().includes(target.value.toLowerCase())))
   }

   return (
      <div className="member-section">

         <div className="search-box">
            <input className="" type="text" placeholder="Search members" value={searchMember} onChange={handleChange} />
         </div>

         <div className="members-box">
            <h3 className="label">All members</h3>
            <ul className="">
               {filterUsers && filterUsers?.map((user, idx) => (
                  user?.imgURL

                     ? <li key={user._id} onClick={() => { onToggle(user._id); deleteMemberFromBoard(user._id) }}>
                        <a className='member-list'>
                           <span className="member-img" style={{ backgroundImage: `url('${user.imgURL}')` }}></span>
                           <span className="member-txt" >{`${user.fullname} (${user.username.match(/^([^@]*)@/)[1]})`}</span>
                           {updatedBoard.members && updatedBoard.members.some(boardMember => boardMember._id === user._id) && <span className='member-icon' ><BsCheck2 /></span>}
                        </a>
                     </li>

                     : <li key={user._id} onClick={() => { onToggle(user._id); deleteMemberFromBoard(user._id) }}>
                        <a className='member-list'>
                           <span className="member" >{`${initials(user)[0]}${initials(user)[1]}`}</span>
                           <span className="member-txt" >{`${user.fullname} (${user.username.match(/^([^@]*)@/)[1]})`}</span>
                           {updatedBoard.members && updatedBoard.members.some(boardMember => boardMember._id === user._id) && <span className='member-icon' ><BsCheck2 /></span>}
                        </a>
                     </li>
               ))}
            </ul>
         </div>
      </div>
   )

}