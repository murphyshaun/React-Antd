import { Button, Spin, Upload } from "antd";
import React from "react";

function FileUpload() {
  return (
    <Upload.Dragger
      multiple
      listType="picture-card"
      action="http://localhost:3000"
      showUploadList={{ showRemoveIcon: true }}
      accept=".png, .jpg"
      beforeUpload={(file) => {
        console.log(file);
        return false;
      }}
      defaultFileList={[
        {
          uid: "abc",
          name: "test_image123789797.png",
          status: "uploading",
          percent: 50,
          url: "https://www.google.com",
        },
      ]}
      iconRender={() => {
        return <Spin></Spin>;
      }}
      //   itemRender={(existingComp, file) => {
      //     return <p>{file.name}</p>;
      //   }}
      progress={{
        strokeWidth: 3,
        strokeColor: {
          "0%": "#f0f",
          "100%": "#ff0",
        },
        style: { top: 12 },
      }}
    >
      Drag files here OR
      <br />
      <Button>Upload</Button>
    </Upload.Dragger>
  );
}

export default FileUpload;
