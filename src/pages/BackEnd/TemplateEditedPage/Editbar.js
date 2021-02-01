// import React, { Component,useState, useEffect } from 'react'
// // import React, {Component} from 'react';
// // import {render} from 'react-dom';
// import {
//   sortableContainer,
//   sortableElement,
//   sortableHandle,
// } from 'react-sortable-hoc';

// import arrayMove from 'array-move';

// function Editbar(){
//     const DragHandle = sortableHandle(() => <span>::</span>);
//     const SortableItem = sortableElement(({value}) => (
//     <li>
//         <DragHandle />
//         {value}
//     </li>
//     ));

//     const SortableContainer = sortableContainer(({children}) => {
//     return <ul>{children}</ul>;
//     });
//     const [ items,setItems ] = useState([{items:['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],}])
//     const onSortEnd = ({oldIndex, newIndex}) => {
//         setItems(({items}) => ({
//           items: arrayMove(items, oldIndex, newIndex),
//         }));
//       };
//     setItems(items)

//     return(
//         <>
//         <SortableContainer onSortEnd={onSortEnd} useDragHandle>
//         {items.map((value, index) => (
//           <SortableItem key={`item-${value}`} index={index} value={value} />
//         ))}
//         </SortableContainer>
//         </>
//     )
// }
// export default Editbar