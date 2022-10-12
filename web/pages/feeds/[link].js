import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

export default () => {
  const [items, setItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = (link) => {
      axios
        .get(`/api/feeds/${encodeURIComponent(link)}`)
        .then((res) => setItems(res.data));
    };

    if (router.isReady) fetchData(router.query.link);
  }, [router.isReady]);
  console.log(items);
  return (
    <>
      {items.map((item, idx) => (
        <div key={idx}>
          <h1>{item.title}</h1>
          {parse(DOMPurify.sanitize(item.description))}
        </div>
      ))}
    </>
  );
};
