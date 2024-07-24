import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import styles from "./HomePage.module.css";


function HomePage() {
  const {} = useParams();
  const [content, setContent] = useState(null);

  useEffect(() => {
    setContent(
      <div>
        홈페이지
      </div>
    );
  });

  return content;
}

export default HomePage;
