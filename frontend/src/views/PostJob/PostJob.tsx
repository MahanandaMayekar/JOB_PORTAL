import PostJobForm from "./PostJobForm";
import Title from "../../components/Title";
const PostJob = () => {
  return (
    <div className="p-6">
      <Title text1="Post a New Job!" text2="Ready to jump back in?" />
      <PostJobForm />
    </div>
  );
}

export default PostJob
