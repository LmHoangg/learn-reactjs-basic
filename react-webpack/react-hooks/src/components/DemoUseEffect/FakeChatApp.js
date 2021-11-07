import React, { useState, useEffect } from 'react';
const lessons = [
  {
    id: 1,
    name: 'React JS là gì ? Tại sao nên học React JS',
  },
  {
    id: 2,
    name: 'SPA/MPA là gì ?',
  },
  {
    id: 3,
    name: 'Arow Function',
  },
];
export default function FakeChatApp() {
  const [lessonId, setLessonId] = useState(1);
  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log({ detail });
    };
    window.addEventListener(`lesson-${lessonId}`, handleComment);
    return () =>
      window.removeEventListener(`lesson-${lessonId}`, handleComment);
  }, [lessonId]);
  return (
    <div>
      {lessons.map((data) => (
        <li
          key={data.id}
          style={{
            color: data.id === lessonId ? 'red' : '#444',
          }}
          onClick={() => setLessonId(data.id)}
        >
          {data.name}
        </li>
      ))}
    </div>
  );
}
