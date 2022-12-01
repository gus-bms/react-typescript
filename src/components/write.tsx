import React from "react";
import { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

/**
 * Write class
 */
class Write extends Component {
  /**
  * @return {Component} Component
  */
  render() {
    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>제목</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>내용</Form.Label>
            <Form.Control as="textarea" />
          </Form.Group>
        </Form>
        <Button variant="info">글쓰기</Button>
        <Button variant="info">작성완료</Button>
        <Button variant="secondary">취소</Button>
      </div>
    );
  }
}

export default Write;