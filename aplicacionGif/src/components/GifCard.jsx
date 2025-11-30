import React from 'react'

export const GifCard = ({ title, url}) => {
  return (
    <div className="group relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden bg-slate-900">
        <img
          src={url}
          alt={title || "Gif"}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      {title && (
        <div className="p-3">
          <p className="text-slate-300 text-sm font-medium line-clamp-2 group-hover:text-white transition-colors">
            {title}
          </p>
        </div>
      )}
    </div>
  )
}