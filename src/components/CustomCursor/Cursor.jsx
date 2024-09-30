// // import React, { useEffect, useRef } from 'react';
// // import '../CustomCursor/style.css';

// // const Cursor = () => {
// //   const cursorRef = useRef(null);
// //   const outlineRef = useRef(null);

// //   useEffect(() => {
// //     const handleMouseMove = (e) => {
// //       const { clientX: posX, clientY: posY } = e;

// //       // Update the cursor dot position instantly
// //       cursorRef.current.style.left = `${posX}px`;
// //       cursorRef.current.style.top = `${posY}px`;

// //       // Animate the outline position smoothly using the Web Animations API
// //       outlineRef.current.animate(
// //         [
// //           { left: `${posX}px`, top: `${posY}px` }, // New position
// //         ],
// //         {
// //           duration: 500,
// //           fill: 'forwards', // Keeps the last keyframe's position
// //         }
// //       );
// //     };

// //     window.addEventListener('mousemove', handleMouseMove);

// //     return () => {
// //       window.removeEventListener('mousemove', handleMouseMove);
// //     };
// //   }, []);

// //   return (
// //     <>
// //       <div className="cursor-dot" ref={cursorRef}></div>
// //       <div className="cursor-outline" ref={outlineRef}></div>
// //     </>
// //   );
// // };

// // export default Cursor;
// import React, { useEffect, useRef, useState } from 'react';
// import '../CustomCursor/style.css';

// const Cursor = () => {
//   const cursorRef = useRef(null);
//   const outlineRef = useRef(null);
//   const [hidden, setHidden] = useState(false);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const { clientX: posX, clientY: posY } = e;

//       // Update the cursor dot position
//       cursorRef.current.style.left = `${posX}px`;
//       cursorRef.current.style.top = `${posY}px`;

//       // Animate the outline position smoothly using the Web Animations API
//       outlineRef.current.animate(
//         [
//           { left: `${posX}px`, top: `${posY}px` }, // New position
//         ],
//         {
//           duration: 500,
//           fill: 'forwards', // Keeps the last keyframe's position
//         }
//       );
//     };

//     const handleMouseEnter = () => {
//       setHidden(true); // Hide the custom cursor when hovering over a pointer element
//     };

//     const handleMouseLeave = () => {
//       setHidden(false); // Show the custom cursor again when leaving the pointer element
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     // Attach events for elements with "pointer" cursor (like links, buttons)
//     const pointerElements = document.querySelectorAll('a, button');
//     pointerElements.forEach((el) => {
//       el.addEventListener('mouseenter', handleMouseEnter);
//       el.addEventListener('mouseleave', handleMouseLeave);
//     });

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);

//       // Clean up event listeners
//       pointerElements.forEach((el) => {
//         el.removeEventListener('mouseenter', handleMouseEnter);
//         el.removeEventListener('mouseleave', handleMouseLeave);
//       });
//     };
//   }, []);

//   return (
//     <>
//       <div className={`cursor-dot ${hidden ? 'hidden' : ''}`} ref={cursorRef}></div>
//       <div className={`cursor-outline ${hidden ? 'hidden' : ''}`} ref={outlineRef}></div>
//     </>
//   );
// };

// export default Cursor;

// import React, { useEffect, useRef, useState } from 'react';
// import '../CustomCursor/style.css';

// const Cursor = () => {
//   const cursorRef = useRef(null);
//   const outlineRef = useRef(null);
//   const [hidden, setHidden] = useState(false);
//   const [hovered, setHovered] = useState(false);

//   // Mouse and circle positions
//   const mouse = { x: 0, y: 0 };
//   const previousMouse = { x: 0, y: 0 };
//   const circle = { x: 0, y: 0 };

//   // Scaling and rotation variables
//   let currentScale = 0;
//   let currentAngle = 0;
//   const speed = 0.15; // Smoothing factor for movement

//   useEffect(() => {
//     // Function to update mouse position
//     const handleMouseMove = (e) => {
//       const { pageX: posX, pageY: posY } = e; // Use pageX and pageY
//       mouse.x = posX;
//       mouse.y = posY;
//     };

//     // Animation loop
//     const tick = () => {
//       // Update circle position smoothly
//       circle.x += (mouse.x - circle.x) * speed;
//       circle.y += (mouse.y - circle.y) * speed;

//       const translateTransform = `translate(${circle.x - 16}px, ${circle.y - 16}px)`; // Center the outline

//       // SQUEEZE (scaling)
//       const deltaMouseX = mouse.x - previousMouse.x;
//       const deltaMouseY = mouse.y - previousMouse.y;
//       previousMouse.x = mouse.x;
//       previousMouse.y = mouse.y;

//       // Calculate mouse velocity and update scaling
//       const mouseVelocity = Math.min(Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4, 150);
//       const scaleValue = (mouseVelocity / 150) * 0.5;
//       currentScale += (scaleValue - currentScale) * speed;
//       const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

//       // ROTATE
//       const angle = Math.atan2(deltaMouseY, deltaMouseX) * (180 / Math.PI);
//       if (mouseVelocity > 20) {
//         currentAngle = angle;
//       }
//       const rotateTransform = `rotate(${currentAngle}deg)`;

//       // Apply transformations to the outline
//       outlineRef.current.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;

//       // Request next animation frame
//       requestAnimationFrame(tick);
//     };

//     // Start listening for mouse movement
//     window.addEventListener('mousemove', handleMouseMove);

//     // Start the animation loop
//     tick();

//     // Manage hover state for clickable elements
//     const handleMouseEnter = () => setHovered(true);
//     const handleMouseLeave = () => setHovered(false);

//     const pointerElements = document.querySelectorAll('a, button, i'); // Add icons (i) as well
//     pointerElements.forEach((el) => {
//       el.addEventListener('mouseenter', handleMouseEnter);
//       el.addEventListener('mouseleave', handleMouseLeave);
//     });

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       pointerElements.forEach((el) => {
//         el.removeEventListener('mouseenter', handleMouseEnter);
//         el.removeEventListener('mouseleave', handleMouseLeave);
//       });
//     };
//   }, []);

//   return (
//     <>
//       <div className={`cursor-dot ${hidden ? 'hidden' : ''}`} ref={cursorRef}></div>
//       <div className={`cursor-outline ${hidden || hovered ? 'hovered' : ''}`} ref={outlineRef}></div>
//     </>
//   );
// };

// export default Cursor;

//this good
import React, { useEffect, useRef, useState } from 'react';
import '../CustomCursor/style.css';

const Cursor = () => {
  const cursorRef = useRef(null);
  const outlineRef = useRef(null);
  const [hidden, setHidden] = useState(false);

  // Create objects to track mouse position and custom cursor position
  const mouse = { x: 0, y: 0 }; // Track current mouse position
  const circle = { x: 0, y: 0 }; // Track the dot position
  const outlineCircle = { x: 0, y: 0 }; // Track the outline position

  // Initialize variables to track scaling and rotation
  let currentScale = 0; // Track current scale value
  let currentAngle = 0; // Track current angle value

  // Adjust speed for responsiveness
  const speed = 0.2; // Speed for the dot movement
  const outlineSpeed = 0.1; // Slower speed for the outline movement

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: posX, clientY: posY } = e;

      // Update mouse position
      mouse.x = posX;
      mouse.y = posY;
    };

    // Start animation
    const tick = () => {
      // MOVE: Calculate dot movement based on mouse position and smoothing
      circle.x += (mouse.x - circle.x) * speed;
      circle.y += (mouse.y - circle.y) * speed;

      // Update cursor dot position
      cursorRef.current.style.left = `${circle.x}px`;
      cursorRef.current.style.top = `${circle.y}px`;

      // Update outline position with a delay
      outlineCircle.x += (circle.x - outlineCircle.x) * outlineSpeed;
      outlineCircle.y += (circle.y - outlineCircle.y) * outlineSpeed;

      // Update outline position to follow the dot (centered)
      outlineRef.current.style.left = `${outlineCircle.x - 16}px`; // Center outline (24px outline size)
      outlineRef.current.style.top = `${outlineCircle.y - 16}px`; // Center outline (24px outline size)

      // SQUEEZE: Calculate the change in mouse position
      const deltaMouseX = mouse.x - circle.x; // Using circle position instead of previousMouse
      const deltaMouseY = mouse.y - circle.y;

      // Calculate mouse velocity
      const mouseVelocity = Math.min(Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4, 150);

      // Convert mouse velocity to a value in the range [0, 0.5]
      const scaleValue = (mouseVelocity / 150) * 0.5;

      // Smoothly update the current scale
      currentScale += (scaleValue - currentScale) * speed;

      // Create a transformation string for scaling
      const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

      // ROTATE: Calculate the angle
      const angle = Math.atan2(deltaMouseY, deltaMouseX) * (180 / Math.PI);

      // Check for a threshold to reduce shakiness at low mouse velocity
      if (mouseVelocity > 20) {
        currentAngle = angle;
      }

      // Create a transformation string for rotation
      const rotateTransform = `rotate(${currentAngle}deg)`;

      // Apply all transformations to the outline
      outlineRef.current.style.transform = `${scaleTransform} ${rotateTransform}`;

      // Request the next frame to continue the animation
      window.requestAnimationFrame(tick);
    };

    // Start listening for mouse movement
    window.addEventListener('mousemove', handleMouseMove);

    
    // Start the animation loop
    tick();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
 <div className="w-2 h-2 bg-white rounded-full fixed pointer-events-none z-10" ref={cursorRef}></div>
 <div className="w-8 h-8 border-2 border-white rounded-full fixed pointer-events-none transition-shadow duration-200 cursor-outline  hover:hover-cursor-outline  z-10" ref={outlineRef}></div>
    </>
  );
};

export default Cursor;
