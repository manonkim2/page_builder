import { getVideoPopularList } from "../../api/getVideosPopularList";

const VideoPopularList = async () => {
  const data = await getVideoPopularList({});
  return (
    <section>
      <h2>목록</h2>
      <p>{data.lists?.[0].title}</p>
    </section>
  );
};

export default VideoPopularList;
