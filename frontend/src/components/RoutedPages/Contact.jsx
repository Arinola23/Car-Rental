import React from 'react'

const Contact = () => {
  return (
    <div>
      <form>
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                        <label>Lastname
                        {/* <input type="text" placeholder="Lastname" className='border-2' /> */}
                        <select className='border-2 ml-4'>
                            <option value="choose country"> choose country </option>
                            <option value="#">Argentina</option>
                            <option value="#">Brazil</option>
                            <option value="#">Chile</option>
                            <option value="#">Colombia</option>
                      </select>
                      </label>
                      </div>
      </form>
    </div>
  )
}

export default Contact