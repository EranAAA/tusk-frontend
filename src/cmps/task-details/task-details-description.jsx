import React, { useEffect, useState, useRef } from 'react'

import { GrTextAlignFull } from 'react-icons/gr'

export const TaskDetailsDescription = ({ task, updateTask }) => {

   const [desc, setDesc] = useState(task.description)
   const [isClickedDesc, setIsClickedDesc] = useState(null)
   const textRef = useRef()

   useEffect(() => {
      setIsClickedDesc(false)
      // textRef.current.blur()
   }, [])

   const onChangeDesc = (ev) => {
      ev.stopPropagation()
      setIsClickedDesc(true);
   }

   const handleChange = (ev) => {
      ev.stopPropagation()
      setDesc(ev.target.value)
   }

   const onSaveDesc = () => {
      if (task.description === desc) {
         setIsClickedDesc(false)
         return
      }
      const updatedTask = { ...task }
      updatedTask.description = desc
      updateTask(updatedTask)
      setIsClickedDesc(false)
   }

   const onCancelDesc = () => {
      setDesc(task.description)
      setIsClickedDesc(false)
   }

   return (
      <section className='task-details-desc' >

         {/* Description */}
         <div className='desc-title-container'>
            <span className=''><GrTextAlignFull /></span>
            <h3 >Description</h3>
         </div>

         <div className='desc-body-container'>

            {!isClickedDesc && !task.description && <a onClick={onChangeDesc}>Add a more detailed description…</a>}
            {!isClickedDesc && task.description && <a  onClick={onChangeDesc}>{task.description}</a>}

            {isClickedDesc && !task.description && <textarea value={desc} onBlur={() => setIsClickedDesc(false)} onChange={handleChange} placeholder='Add a more detailed description…'> </textarea>}
            {isClickedDesc && task.description && <textarea onClick={onChangeDesc} onChange={handleChange} value={desc} ></textarea>}

            {isClickedDesc &&
               <div className='btn-container'>
                  <input type='submit' onClick={onSaveDesc} value='Save' />
                  <input type='submit' onClick={onCancelDesc} value='Cancel' />
               </div>}
         </div>

      </section>
   )
}
