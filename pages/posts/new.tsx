import React, { useState, FormEvent } from "react";
import { useRouter } from 'next/router';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { PostAPI } from '../../lib/api/post';

const NewPost = () => {
  const router = useRouter();
  const [post, setPost] = useState({
    title: '',
    body: ''
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setPost({
      ...post,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const resp = await PostAPI.create(post);
    if (resp.status === 201) {
      router.push('/posts');
    } else {
      const fields = Object.keys(resp.data);
      const message = `${fields.join()} 항목을 확인바람`;
      alert(message);
    }
  }

  return (
    <>
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
            >Create</Button>
          </div>
        </div>
      </Form>
    </>
  );
};

export default NewPost;