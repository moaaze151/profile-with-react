import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Part,
  PartIcon,
  PartInfo,
  PartLine,
  PartTitle,
  WorkSec,
  WorkTitle,
  WorkTitleSpan,
} from "./style";

const Work = () => {
  const [work, setWork] = useState([]);
  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setWork(res.data.works);
    });
  }, []);
  const workList = work.map((e) => {
    return (
      <Part key={e.id} prop = {e.id}>
        <PartIcon className={e.icon_name}></PartIcon>
        <PartTitle>{e.title} Ux</PartTitle>
        <PartLine />
        <PartInfo>{e.body}</PartInfo>
      </Part>
    );
  });
  return (
    <WorkSec>
      <div className="container">
        <WorkTitle>
          <WorkTitleSpan>My</WorkTitleSpan> Work
        </WorkTitle>
        {workList}
      </div>
    </WorkSec>
  );
};
export default Work;
