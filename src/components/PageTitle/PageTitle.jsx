import React from "react";
import { Box, Image } from "gestalt";
import "./PageTitle.css";

class PageTitle extends React.Component {
  render() {
    const { title, desc } = this.props;
    return (
      <div className="page-title__container">
        <Image
          alt={title}
          naturalHeight={1}
          naturalWidth={1}
          fit="cover"
          src="https://s3-us-west-1.amazonaws.com/twohalfhitches/assets/Mt+Baden-Powell+Topo+Map.jpg"
        >
          <Box
            display="flex"
            direction="column"
            height="100%"
            justifyContent="center"
            alignItems="center"
          >
            <div className="page-title">{title}</div>
            {desc && <div className="page-title__description">{desc}</div>}
          </Box>
        </Image>
      </div>
    );
  }
}

export default PageTitle;
