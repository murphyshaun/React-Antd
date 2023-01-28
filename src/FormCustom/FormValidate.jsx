import { Button, Checkbox, DatePicker, Form, Input, Select } from "antd";
import React from "react";

function FormValidate() {
  const handleFieldChange = (e) => {
    console.log(e);
  };
  return (
    <Form
      onFieldsChange={handleFieldChange}
      labelCol={{ span: 10 }}
      wrapperCol={{ span: 14 }}
      onFinish={(values) => console.log(values)}
    >
      <Form.Item
        name="fullName"
        label="Full Name"
        rules={[
          {
            required: true,
            message: "please enter your name",
          },
          {
            whitespace: true,
            message: "Your name cannot be empty",
          },
          {
            min: 3,
          },
        ]}
        hasFeedback
      >
        <Input placeholder="Enter your name" />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            required: true,
            message: "please enter your email",
          },
          {
            whitespace: true,
            message: "Your email cannot be empty",
          },
          {
            type: "email",
            message: "Please enter a valid email",
          },
        ]}
        hasFeedback
      >
        <Input placeholder="Enter your email" />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "please enter password",
          },
          {
            min: 6,
          },
          {
            validator: (_, value) =>
              value && value.includes("A")
                ? Promise.resolve()
                : Promise.reject("Password does not match criteria"),
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder="Enter your password" />
      </Form.Item>

      <Form.Item
        name="confirmPassword"
        label="Confirm Password"
        dependencies={["password"]}
        rules={[
          {
            required: true,
            message: "please enter confirm password",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value)
                return Promise.resolve();

              return Promise.reject("Password does not match");
            },
          }),
        ]}
        hasFeedback
      >
        <Input.Password placeholder="Enter your confirm password" />
      </Form.Item>

      <Form.Item name="gender" label="Gender" requiredMark="optional">
        <Select placeholder="Select your gender">
          <Select.Option value="0">FeMale</Select.Option>
          <Select.Option value="1">Male</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="dateBirth"
        label="Date of Birth"
        rules={[
          {
            required: true,
            message: "please provide your date of birth",
          },
        ]}
        hasFeedback
      >
        <DatePicker
          style={{ width: "100%" }}
          picker="date"
          placeholder="Chose date of birth"
        />
      </Form.Item>

      <Form.Item
        name="website"
        label="Website"
        rules={[
          {
            required: true,
            message: "please enter your website",
          },
          {
            whitespace: true,
            message: "Your website cannot be empty",
          },
          {
            type: "url",
            message: "Please enter a valid email",
          },
        ]}
        hasFeedback
      >
        <Input placeholder="Add your website" />
      </Form.Item>

      <Form.Item
        name="agreement"
        wrapperCol={{ span: 24 }}
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject("To proceed, you need to agreement"),
          },
        ]}
      >
        <Checkbox value={1}>
          Agree to our <a href="#3">Terms and Conditions</a>{" "}
        </Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ span: 24 }}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}

export default FormValidate;
