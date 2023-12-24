import './Journal.css';

const Journal = () => {
  return (
    <div className="bg-main bg-cover h-screen w-screen flex justify-center items-center">
      <div className="outer-journal">
        <div className="inner-journal">
          <div className="content-wrapper ml-4 mt-4">
            <textarea
              className="w-full h-full outline-none resize-none bg-cream"
              placeholder="Write your thoughts here..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Journal;
