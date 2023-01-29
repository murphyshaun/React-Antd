import { Button, Switch, Typography } from "antd";
import React from "react";
const { Paragraph, Text } = Typography;

function TypographyCustom() {
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
  return (
    <>
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
