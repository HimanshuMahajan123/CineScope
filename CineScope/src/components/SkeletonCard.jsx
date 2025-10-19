import React from "react";

function SkeletonCard() {
  return (
    <div className="animate-pulse bg-gray-300 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      {/* Image placeholder */}
      <div className="h-80 bg-gray-200 dark:bg-gray-700"></div>

      {/* Text placeholders */}
      <div className="p-3 space-y-2">
        <div className="h-4 bg-gray-100 dark:bg-gray-600 rounded w-3/4"></div>
        <div className="h-4 bg-gray-100 dark:bg-gray-600 rounded w-1/2"></div>
      </div>
    </div>
  );
}

export default SkeletonCard;