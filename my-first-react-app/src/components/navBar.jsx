import React from 'react';

function MyButton() {
const handleClick = () => {
console.log('Button was clicked!');
};

return (
<button
onClick={handleClick}
className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
>
Click Me
</button>
);
}

import React from 'react';

function MyLink() {
  return (
    <a
      href="https://react.dev/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-800 underline cursor-pointer"
    >
      Visit

React Docs

</a>
);
}


import React from 'react';

function ClickableDiv() {
const handleDivClick = () => {
console.log('Div was clicked!');
};

return (
<div
onClick={handleDivClick}
className="p-4 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded shadow"
>
Clickable Card
</div>
);
}
