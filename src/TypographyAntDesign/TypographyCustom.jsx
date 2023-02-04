import { Button, Typography, Select } from "antd";
import React, { useEffect, useState } from "react";
const { Paragraph, Text } = Typography;

function TypographyCustom() {
  useEffect(() => {
    console.log("re-render");
  }, []);
  const handleEllipsis = (e) => {
    console.log(e, 1);
  };
  const handleExpand = () => {
    setEllipsis({
      expand: true,
      counter: !ellipsis.expand ? ellipsis.counter + 0 : ellipsis.counter + 1,
    });
  };
  const handleClose = () => {
    window.location.reload();
    setEllipsis({
      expand: false,
      counter: !ellipsis.expand ? ellipsis.counter + 0 : ellipsis.counter + 1,
    });
  };
  const [ellipsis, setEllipsis] = React.useState({
    expand: false,
    counter: 0,
  });
  console.log(ellipsis.counter);
  const [data, setData] = useState([
    {
      value: "jack",
      label: "Jack",
    },
    {
      value: "lucy",
      label: "Lucy",
    },
    {
      value: "tom",
      label: "Tom",
    },
    {
      value: "jack1",
      label: "Jack1",
    },
    {
      value: "lucy1",
      label: "Lucy1",
    },
    {
      value: "tom1",
      label: "Tom1",
    },
    {
      value: "jack2",
      label: "Jack2",
    },
    {
      value: "lucy2",
      label: "Lucy2",
    },
    {
      value: "tom2",
      label: "Tom2",
    },
    {
      value: "jack3",
      label: "Jack3",
    },
    {
      value: "lucy3",
      label: "Lucy3",
    },
    {
      value: "tom3",
      label: "Tom3",
    },
    {
      value: "jack4",
      label: "Jack4",
    },
    {
      value: "lucy5",
      label: "Lucy5",
    },
    {
      value: "tom6",
      label: "Tom6",
    },
  ]);

  const handleSearch = (value) => {
    console.log(value, 1111);
    setData(
      data.filter((item) =>
        item.label.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <>
      {/* https://stackoverflow.com/questions/61501178/ant-design-select-onpopupscroll-react-js */}
      <Select
        showSearch
        style={{ width: 200 }}
        onPopupScroll={(e) =>
          console.log(
            e.target.scrollTop,
            e.target.offsetHeight,
            e.target.scrollHeight
          )
        }
        optionFilterProp="children"
        onSearch={handleSearch}
        filterOption={false}
        options={data}
      />
      <Paragraph copyable>shaun lee</Paragraph>
      <div key={ellipsis.counter}>
        <Paragraph
          style={{ width: "200px" }}
          ellipsis={{
            rows: 2,
            expandable: true,
            symbol: "show more",
            onEllipsis: (e) => handleEllipsis(e),
            onExpand: handleExpand,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat esse
          aliquam aspernatur incidunt temporibus? Iste iure minima neque quia
          quos. Deleniti repellendus quisquam veritatis iusto asperiores, non
          quod id doloremque!
          <Button type="link" onClick={handleClose}>
            show less
          </Button>
        </Paragraph>
      </div>
    </>
  );
}

export default TypographyCustom;
