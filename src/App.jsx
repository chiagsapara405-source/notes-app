import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [Task, setTask] = useState([]);

  const submitHndler = (e) => {
    e.preventDefault();

    const cpyTask = [...Task];

    cpyTask.push({ title, details });
    setTask(cpyTask);

    setTitle("");
    setDetails("");
  };

  const deleteHandler = (index) => {
    const cpyTask = [...Task];
    cpyTask.splice(index, 1);
    setTask(cpyTask);
  };

  return (
    <div className="min-h-screen lg:flex bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6 lg:p-10">
      <form
        onSubmit={(e) => {
          submitHndler(e);
        }}
        className="flex lg:w-1/2 p-6 lg:p-10 gap-6 flex-col"
      >
        <h1 className="text-4xl font-bold bg-linear-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
          ✏️ Add Note
        </h1>
        <input
          type="text"
          placeholder="Enter task heading"
          className="p-4 border border-gray-600 rounded-2xl bg-gray-800/60 text-white placeholder-gray-400 
                     focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent
                     transition-all duration-300"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          type="text"
          placeholder="Enter details"
          className="p-4 border border-gray-600 rounded-2xl bg-gray-800/60 text-white placeholder-gray-400 
                     focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent
                     transition-all duration-300 resize-none min-h-30"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button
          className="bg-linear-to-r from-amber-400 to-orange-500 px-6 py-3 rounded-2xl cursor-pointer text-black font-semibold
                           hover:from-amber-300 hover:to-orange-400 hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-500/30
                           active:scale-95 transition-all duration-300"
        >
          ➕ Add Note
        </button>
      </form>
      <div className="lg:w-1/2 p-6 lg:p-10">
        <h1 className="text-4xl font-bold bg-linear-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent mb-6">
          📋 Your Notes
        </h1>
        {Task.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-gray-500">
            <span className="text-6xl mb-4">📝</span>
            <p className="text-xl">No notes yet. Start adding some!</p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-6 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent h-[70vh] overflow-auto pr-2">
            {[...Task].reverse().map(function (elem, idx) {
              return (
                <div
                  key={idx}
                  className="group h-56 w-48 rounded-2xl bg-linear-to-br from-amber-100 to-amber-200 
                             shadow-lg shadow-amber-900/20 overflow-auto scrollbar-none text-gray-800 
                             flex flex-col justify-between transition-all duration-300
                             hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-1"
                >
                  <div className="p-4">
                    <h1
                      className="text-center pt-2 pb-3 font-bold text-lg border-b border-amber-300/50"
                      id="header"
                    >
                      {elem.title || "Untitled"}
                    </h1>
                    <p className="p-2 text-sm leading-relaxed whitespace-pre-wrap">
                      {elem.details || "No details"}
                    </p>
                  </div>
                  <button
                    className="w-full rounded-b-2xl h-10 text-red-500 font-semibold cursor-pointer
                               bg-red-50/80 hover:bg-red-100 hover:text-red-700
                               transition-all duration-200 opacity-0 group-hover:opacity-100"
                    onClick={() => deleteHandler(idx)}
                  >
                    🗑️ Delete
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
