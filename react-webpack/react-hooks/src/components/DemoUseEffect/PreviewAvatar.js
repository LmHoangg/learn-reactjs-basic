import React, { useState, useEffect } from 'react';
export default function PreviewAvatar() {
  const [count, setCount] = useState(1);
  const [avatar, setAvatar] = useState();
  useEffect(() => {
    console.log('Mounted and Re-render');

    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);
  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
    e.target.value=null 
  };
  return (
    <div>
      <input type="file" onChange={handlePreviewAvatar} />
      {avatar && <img src={avatar.preview} alt="" width="80%" />}
    </div>
  );
}
