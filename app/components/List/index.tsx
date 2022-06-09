
// import { videos } from './data'

const List = ({ videos }) => {
  return (
    <div>
      <h1>List</h1>
      <div>
        {videos.map(video => (
          <div key={video.id}>
            <h2>{video.title}</h2>
            </div>
        ))}
      </div>
    </div>
  );
}

export default List;