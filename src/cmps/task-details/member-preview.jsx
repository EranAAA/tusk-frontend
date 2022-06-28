import { Fragment, useRef } from 'react'
import { useDispatch } from 'react-redux'

import { setModal } from '../../store/app/app.actions'

export const MemberPreview = ({ member, task, board, onUpdateBoard, isInTaskDetails }) => {

   const dispatch = useDispatch()
   const memberRef = useRef()

   const initials = (member) => ([...member.fullname])

   const onOpenModal = (ev, modal) => {
      ev.stopPropagation()
      dispatch(setModal(modal))
   }

   return (
      <Fragment>
         {member?.imgURL
            ?
            <a key={member._id} className="member-img"
               onClick={(ev) => onOpenModal(ev, { category: 'member-actions', element: memberRef.current, props: { member, task, board, onUpdateBoard } })}>
               <img src={member.imgURL} ref={memberRef} alt={member.fullName} />
            </a>
            :
            <a className="member" ref={memberRef}
               onClick={(ev) => onOpenModal(ev, { category: 'member-actions', element: memberRef.current, props: { member, task, board, onUpdateBoard } })} >
               {`${initials(member)[0]}${initials(member)[1]}`}
            </a>
         }
      </Fragment>
   )
}


// return (
//    isInTaskDetails ?
//       <Fragment>
//          {member?.imgURL
//             ?
//             <a key={member._id} className="member-img"
//                onClick={(ev) => onOpenModal(ev, { category: 'member-actions', element: memberRef.current, props: { member, task, board, onUpdateBoard } })}>
//                <img src={member.imgURL} ref={memberRef} alt={member.fullName} /> </a>
//             :
//             <a className="member" ref={memberRef}
//                onClick={(ev) => onOpenModal(ev, { category: 'member-actions', element: memberRef.current, props: { member, task, board, onUpdateBoard } })} >
//                {`${initials(member)[0]}${initials(member)[1]}`}</a>
//          }
//       </Fragment>
//       :
//       <a key={member._id} className="member-img"
//          onClick={(ev) => onOpenModal(ev, { category: 'member-actions', element: memberRef.current, props: { member, task, board, onUpdateBoard } })}>
//          <img src={member.imgURL} ref={memberRef} alt={member.fullName} />
//       </a>
// )
// }