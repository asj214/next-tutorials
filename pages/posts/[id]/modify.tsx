import { useState, useEffect, FormEvent } from "react";
import { useRouter } from 'next/router';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useHasMounted from "../../../utils/useHasMounted";
// import { Post } from "../../../types";
import { Post, PostAPI } from "../../../lib/api/post";

const PostModify = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<Post>({
    title: '',
    body: ''
  });
  const hasMounted = useHasMounted();

  const getPostDetail = async (id: number) => {
    const resp = await PostAPI.detail(id);
    if (resp.status === 200) {
      setPost(resp.data)
      console.log(post)
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setPost({
      ...post,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const resp = await PostAPI.modify(Number(id), post);
    if (resp.status === 200) {
      router.push('/posts');
    } else {
      const fields = Object.keys(resp.data);
      const message = `${fields.join()} 항목을 확인바람`;
      alert(message);
    }
  }

  useEffect(() => {
    if (hasMounted) {
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
          {post && <>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="post.title">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  required
                  name="title"
                  value={post.title}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="post.body">
                <Form.Label>Content</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  required
                  name="body"
                  value={post.body}
                  onChange={onChange}
                />
              </Form.Group>
              <div className="d-flex">
                <div className="p-2">
                  <Button
                    variant="secondary"
                    onClick={() => { router.back() }}
                  >Back</Button>
                </div>
                <div className="ms-auto p-2">
                  <Button
                    type="submit"
                    variant="primary"
                  >Save</Button>
                </div>
              </div>
            </Form>
          </>}
        </Col>
      </Row>
    </>
  )
}

export default PostModify;