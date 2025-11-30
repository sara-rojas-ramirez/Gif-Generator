import React, { useState } from "react";
import { GifSearchForm } from "./components/GifSearchForm";
import { GifCard } from "./components/GifCard";
import { getGifsByQuery } from "./actions/getGifsByQuery";

export const App = () => {
  const [gifs, setGifs] = useState([]);

  const handleSearch = async (search = "") => {
    const result = await getGifsByQuery(search);
    setGifs([...result, ...gifs]);
  };
  
  // const handleSearch = async (search = "") => {
  //   const result = await getGifsByQuery(search);
  //   setGifs([result]);
  // };



  return (
    <div className="min-h-screen bg-slate-700">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <header className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-white mb-4 tracking-tight">
            GIF
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Explorer
            </span>
          </h1>
          <p className="text-slate-400 text-xl">Descubre millones de gifs increíbles</p>
        </header>

        <div className="mb-16">
          <GifSearchForm onSearch={handleSearch} />
        </div>

        {gifs.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">
                Resultados
              </h2>
              <span className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full text-sm font-medium border border-slate-700">
                {gifs.length} gifs
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {gifs.map((gif) => (
                <GifCard key={gif.id} title={gif.title} url={gif.url} />
              ))}
            </div>
          </div>
        )}

        {gifs.length === 0 && (
          <div className="mt-24 text-center">
            <div className="inline-block p-8 bg-slate-800 rounded-3xl border border-slate-700">
              <p className="text-slate-400 text-xl mb-2">No hay gifs aún</p>
              <p className="text-slate-500">Busca algo arriba para comenzar</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};