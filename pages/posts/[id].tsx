import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Post } from "../../types";
import { PostAPI } from "../../lib/api/post";
import { useAuthStore } from "../../utils/useAuthStore";
import useHasMounted from "../../utils/useHasMounted";

const PostDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<Post>();
  const hasMounted = useHasMounted();
  const { user } = useAuthStore();
  
  const getPostDetail = async (id: number) => {
    const resp = await PostAPI.detail(id);
    if (resp.status === 200) {
      setPost(resp.data)
    }
  }

  const removePost = async () => {
    await PostAPI.delete(Number(id));
  }

  useEffect(() => {
    if (hasMounted && id) {
      getPostDetail(Number(id));
    }
  }, [id]);

  return (
    <>
      <Row className="justify-content-md-center" style={{ marginTop: '4%' }}>
        <Col>
          {!post && 
            <>
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </>
          }
          {post && 
          <>
            <h1>{post.title}</h1>
            <div>
              <div className="lead">{post.body}</div>
            </div>
          </>
          }
        </Col>
      </Row>
      <div className="fixed-bottom">
        <div className="d-flex">
          <div className="p-2">
            <Button
              variant="secondary"
              onClick={() => { router.push('/posts') }}
            >List</Button>
          </div>
          {user?.id == post?.user.id && <>
            <div className="ms-auto p-2">
              <Button
                variant="primary"
                onClick={() => { router.push(`/posts/${id}/modify`) }}
              >Modify</Button>&nbsp;
              <Button
                variant="danger"
                onClick={removePost}
              >Delete</Button>              
            </div>
          </>}
        </div>
      </div>
    </>
  );
}

export default PostDetail;