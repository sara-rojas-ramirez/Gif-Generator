import React, { useState } from 'react'

export const GifSearchForm = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    console.log("handleSearch", e.target.value);
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() === "") return;

    onSearch(search);
    setSearch("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(search);
      setSearch("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
      <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-2 shadow-xl hover:border-cyan-500/50 transition-all duration-300 focus-within:border-cyan-500 focus-within:ring-2 focus-within:ring-cyan-500/20">
        <div className="flex-1 flex items-center">
          <div className="pl-4 pr-2 text-slate-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Buscar Gifs en Giphy..."
            value={search}
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
            className="flex-1 py-4 px-2 bg-transparent text-white placeholder-slate-500 text-base focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-500 active:scale-95 transition-all duration-200 shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 whitespace-nowrap"
        >
          Buscar
        </button>
      </div>
    </form>
  );
}