import {useState} from 'react'
import CourseApi from './CourseApi'
function Container() {
  const [mount, setMount] = useState(false);
  const [wordMount, setWordMount] = useState()
  return (
    <div className="Container">
      <div className="box">
        <h1>Mounted and Unmounted</h1>
        <p>Design by một học trò đệ tử của anh Sơn F8 đẹp trai :)</p>
        <button
          onClick={() => {
            setMount(!mount)
            if (mount) {
              setWordMount("Hiện")
            } else {
              setWordMount("Ẩn")
            }
          }}
        >
          {wordMount ?? "Hiện"}
        </button>
      </div>
      {mount && <CourseApi/>}
    </div>
  )
}
export default Container