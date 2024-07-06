// import "./index.scss";

// export const FirstPage = ({ setStep }: { setStep: any }) => {
//   // set up text to print, each item in array is new line

//   const message =
//     "ấu tạo của đoạn văn: Cũng giống như một bài văn cần có 3 phần: Mở bài, Thân bài và Kết bài, khi viết một đoạn văn.";
//   // const message2 = "Cùng nhau thổi nến thôi";
//   const iSpeed = 100; // time delay of print out
//   let iArrLength = message.length; // the length of the text array

//   let iTextPos = 0; // initialise text position
//   let sContents = ""; // initialise contents variable

//   function typewriter() {
//     sContents = " ";
//     const destination = document.getElementById("typedtext");

//     console.log("iTextPos", iTextPos);
//     console.log("iArrLength", iArrLength);

//     if (destination)
//       destination.innerHTML = sContents + message.substring(0, iTextPos) + "_";
//     if (iTextPos++ != iArrLength) {
//       setTimeout(typewriter, iSpeed);
//     } else {
//       if (destination)
//         destination.innerHTML = sContents + message.substring(0, iTextPos);
//       setStep(2);
//     }
//   }

//   typewriter();

//   return (
//     <div className="first-page">
//       <div className="container">
//         <div className="first-line">
//           <p>Dear,</p>
//           <span>My Love</span>
//           <div className="heart"></div>
//         </div>
//         <div id="typedtext"></div>

//         {/* <p className="typing">
//           You're the code of my heart, and the CSS of my HTML
//         </p> */}
//       </div>
//     </div>
//   );
// };
