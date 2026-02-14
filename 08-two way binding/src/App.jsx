import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");

  function formSubmitHandler(e) {
    e.preventDefault();
    console.log("form submitted by", name);
    setName("");
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <form
        onSubmit={formSubmitHandler}
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg border border-slate-200"
      >
        <h1 className="text-xl font-semibold text-slate-800 mb-4">Two Way Binding</h1>

        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
          Your Name
        </label>

        <input
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="Enter your name"
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />

        <button
          type="submit"
          className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white transition hover:bg-blue-700 active:scale-[0.99]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
