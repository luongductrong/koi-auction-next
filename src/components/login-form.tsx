'use client';

import { Button, Form, Input, Checkbox } from 'antd';

export function LoginForm() {
  return (
    <Form
      name="login"
      onFinish={() => console.log('Login form submitted')}
      onFinishFailed={() => console.log('Login form failed')}
      layout="vertical"
      className="w-full"
    >
      <Form.Item
        label="Tên đăng nhập/Email"
        name="username"
        rules={[{ required: true, message: 'Vui lòng điền tên đăng nhập hoặc email' }]}
      >
        <Input placeholder="Tên đăng nhập hoặc mail" />
      </Form.Item>
      <Form.Item label="Mật khẩu" name="password" rules={[{ required: true, message: 'Vui lòng điền mật khẩu' }]}>
        <Input.Password placeholder="Mật khẩu" />
      </Form.Item>
      <Form.Item name="remember" valuePropName="checked">
        <Checkbox onChange={(e) => console.log(e)}>Ghi nhớ cho lần đăng nhập lần sau</Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={false} className="w-full !h-10">
          Đăng nhập
        </Button>
      </Form.Item>
    </Form>
  );
}
