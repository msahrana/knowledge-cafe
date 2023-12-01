
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks, readingTime}) => {
  return (
    <div className="md:w-1/3 bg-green-300 ml-4 mt-4 pt-4">
        <div>
            <h2 className="text-4xl text-center border-b-4 p-4">Reading Time : {readingTime}</h2>
        </div>
            <h2 className="text-4xl text-center text-red-600 font-semibold">Bookmarked Blog: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
  )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks