import { useParams } from 'react-router-dom';

const PostDetails = () => {
  const { category } = useParams();
  return (
    <>
      <h1>Post Details - {category}</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum quia
        doloribus laboriosam eos reprehenderit est! Veritatis dolore repellat
        architecto cupiditate?
      </p>
    </>
  );
};

export default PostDetails;
