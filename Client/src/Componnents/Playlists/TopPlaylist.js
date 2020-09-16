import React from 'react'

function TopPlaylist({data}) {
    return (
        <div className="oneTopPlaylisDiv">
            <h4>{data.playlist}</h4>
        </div>
    )
}

export default TopPlaylist
