// ** React
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1>
        404 Not Found
      </h1>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default NotFound