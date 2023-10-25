import React, { useState, useEffect, FormEvent } from "react";
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Post } from "../../types";
import { PostAPI } from '../../lib/api/post';

const PostList = () => {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [count, setCount] = useState(0);
  const responsiveClass = 'd-none d-md-block';

  const getPostList = async () => {
    const { data, status } = await PostAPI.list()
    if (status === 200) {
      setPosts(data.results);
      setCount(data.count);
    }
    console.log(data, status)
  }

  useEffect(() => {
    getPostList()
  }, []);

  return (
    <>
      <h2>This is List Page</h2>
      <Card>
        <Card.Body>
          <Table size="sm">
            <thead>
              <tr>
                <th className={responsiveClass}>#</th>
                <th>subject</th>
                <th>writer</th>
                <th className={responsiveClass}>created</th>
              </tr>
            </thead>
            <tbody>
              {
                posts.map((post, key) => (
                  <tr key={key}>
                    <td className={responsiveClass}>{post.id}</td>
                    <td>
                      <a onClick={() => router.push(`/posts/${post.id}`)}>{post.title}</a>
                    </td>
                    <td>{post.user.name}</td>
                    <td className={responsiveClass}>{format(new Date(post.created_at), 'yyyy.MM.d')}</td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </Card.Body>
        <Card.Body>
          123
        </Card.Body>
      </Card>
      <br />
      <Row style={{textAlign: 'right'}}>
        <Col>
          <Button
            variant="primary"
            onClick={() => router.push('/posts/new')}
          >New</Button>
        </Col>
      </Row>
    </>
  );
}

export default PostList;