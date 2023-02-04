import { Button, Form, Input, Select, Space } from "antd";
import React from "react";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";

function DynamicForm() {
  const handleFinishForm = (values) => {
    console.log({ values });
  };
  const initialValues = {
    teacher: "shaun",
    students: [
      {},
      {
        first: "shaun student",
      },
    ],
  };
  return (
    <Form
      initialValues={initialValues}
      onFinish={handleFinishForm}
      style={{ width: 500 }}
    >
      <Form.Item name="teacher" label="Teacher Name">
        <Input placeholder="Teacher Name" />
      </Form.Item>

      <Form.Item name="class" label="Class Name">
        <Input placeholder="Class Name" />
      </Form.Item>

      <Form.List name="students">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field, index) => {
              return (
                <Space key={index} direction="horizontal" size={12}>
                  <Form.Item
                    name={[field.name, "first"]}
                    label={`${index + 1}-Student`}
                    rules={[
                      { required: true, message: "First name required." },
                    ]}
                  >
                    <Input placeholder="First Name" />
                  </Form.Item>
                  <Form.Item name={[field.name, "last"]}>
                    <Input placeholder="Last Name" />
                  </Form.Item>
                  <Form.Item name={[field.name, "gender"]}>
                    <Select placeholder="Gender">
                      {["Male", "Female"].map((gender, index) => {
                        return (
                          <Select.Option value={gender} key={index}>
                            {gender}
                          </Select.Option>
                        );
                      })}
                    </Select>
                  </Form.Item>
                  <MinusCircleOutlined
                    style={{ height: 40, color: "red" }}
                    onClick={() => remove(field.name)}
                  />
                </Space>
              );
            })}

            <Form.Item>
              <Button icon={<PlusOutlined />} type="dashed" block onClick={add}>
                Add a student
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default DynamicForm;
