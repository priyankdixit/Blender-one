import React from 'react';

const CourseSidebar: React.FC = () => {
  return (
    <aside className="bg-gray-900 text-white w-1/4 p-6">
      <div className="mb-6">
        <a href="#" className="text-white text-lg font-semibold">&lt; Back to courses</a>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-bold">Blender 3D Fundamentals</h2>
      </div>
      <nav>
        <ul>
          <li className="mb-4">
            <h3 className="text-sm font-semibold uppercase">Course introduction</h3>
            <ul className="ml-4 mt-2">
              <li className="flex justify-between items-center mb-2">
                <a href="#" className="text-sm text-blue-400">Introduction</a>
                <span className="text-xs text-gray-400">Preview</span>
              </li>
              <li className="mb-2"><a href="#" className="text-sm text-gray-400">Downloading Blender</a></li>
              <li className="mb-2"><a href="#" className="text-sm text-gray-400">Settings and Preferences</a></li>
              <li className="mb-2"><a href="#" className="text-sm text-gray-400">Blender Interface</a></li>
            </ul>
          </li>
          <li className="mb-4">
            <h3 className="text-sm font-semibold uppercase">Basics of Blender 3D</h3>
            <ul className="ml-4 mt-2">
              <li className="mb-2"><a href="#" className="text-sm text-gray-400">Mesh Modeling</a></li>
              <li className="mb-2"><a href="#" className="text-sm text-gray-400">Mesh Editing Operations</a></li>
              <li className="mb-2"><a href="#" className="text-sm text-gray-400">Most Common Modifiers</a></li>
              <li className="mb-2"><a href="#" className="text-sm text-gray-400">Orthographic References</a></li>
              <li className="mb-2"><a href="#" className="text-sm text-gray-400">Sculpting</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default CourseSidebar;
