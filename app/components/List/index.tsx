import { NavLink } from "@remix-run/react";
// import { videos } from './data'

const List = ({ videos }) => {
  return (
    <div>
      <h1>List</h1>
      <div className="flex flex-wrap px-4 justify-between">
        {videos.map((video, index) => (
          <div key={video.id} className='cursor-pointer'>
            <NavLink to={`/video/${video.id}`}>
              <img src={`https://picsum.photos/300/200?random=${index}`} alt={video.title} />
              <h2>{video.title}</h2>
            </NavLink>
            </div>
        ))}
      </div>
    </div>
  );
}

export default List;