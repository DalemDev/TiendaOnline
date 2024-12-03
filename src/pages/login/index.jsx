import { Button, Form, Input } from 'antd';

export default function index() {
  const onFinish = (values) => {};

  const onFinishFailed = (errorInfo) => {};

  return (
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Usuario"
          name="usuario"
          rules={[
            {
              required: true,
              message: 'Por favor ingresa tu usuario!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Contraseña"
          name="contrasena"
          rules={[
            {
              required: true,
              message: 'Por favor ingresa la contraseña!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Iniciar Sesión
          </Button>
        </Form.Item>
        <Form.Item label={null}>
          <Button type="link">Crear cuenta</Button>
        </Form.Item>
      </Form>
  );
}
