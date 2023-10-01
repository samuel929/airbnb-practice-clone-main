import React, { useState } from 'react'
import Search from './search'
import SearchRoom from './SearchRoom'

function HeaderMainSearc() {
    const [viewSearch,setViewSearch]=useState(false);
  return (
    <div>
        {
            viewSearch ?
             <SearchRoom
             />
            :
            <Search
            setViewSearch={setViewSearch}
            />
        }
    </div>
  )
}

export default HeaderMainSearc