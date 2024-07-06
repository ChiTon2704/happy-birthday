import { useCallback } from "react";
import "./index.scss";

export const FirstPage = ({ setStep }: { setStep: any; startAudio: any }) => {
  // set up text to print, each item in array is new line
  const aText = [
    "Cuối cùng thì ngày hôm nay cũng đã đến, hôm nay là ngày sinh nhật của em iu nhưng thật tiếc vì anh lại không thể có mặt trực tiếp ở bên cạnh em để cùng chúc mừng sinh nhật em, nhìn em thổi nến được. Anh biết là em sẽ rất buồn nhưng anh sẽ cố gắng để năm sau sẽ được cùng em thổi nến nì, lúc đó anh sẽ làm nhiều điều bất ngờ cho em hơn.",
    "Thấp thoáng cũng đã hơn một năm rưỡi mình quen nhau rồi, nhưng đã mất hơn tận một năm chúng ta phải yêu xa, chắc em cảm thấy cô đơn và tủi thân lắm, anh xin lỗi vì để em phải chờ đợi như vậy. Nhưng anh hứa sẽ cố làm tốt công việc của mình để sớm được ở bên em. Cảm ơn em vì những tháng ngày qua em đã đến bên anh, cảm ơn em đã là hậu phương cho ước mơ trong anh và mong chúng ta vẫn mãi có nhau.",
    "Giờ thì cùng thổi nến thôi... Happy Birthday Em Iuuuuu",
  ];
  const iSpeed = 100; // time delay of print out
  let iIndex = 0; // start printing array at this posision
  let iArrLength = aText[0].length; // the length of the text array
  const iScrollAt = 20; // start scrolling up at this many lines

  let iTextPos = 0; // initialise text position
  let sContents = ""; // initialise contents variable
  let iRow; // initialise current row
  const handleChangeStep = useCallback(() => {
    setStep(2);
  }, []);
  function typewriter() {
    sContents = " ";
    console.log("hazii");

    iRow = Math.max(0, iIndex - iScrollAt);
    const destination = document.getElementById("typedtext");

    // while (iRow < iIndex) {
    //   sContents += aText[iRow++] + "<br />";
    // }

    if (destination)
      destination.innerHTML =
        sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if (iTextPos++ == iArrLength) {
      if (destination)
        destination.innerHTML =
          sContents + aText[iIndex].substring(0, iTextPos);
      iTextPos = 0;
      iIndex++;

      // if (destination) {
      //   destination.innerHTML = "";
      // }
      if (iIndex != aText.length) {
        iArrLength = aText[iIndex].length;
        setTimeout(typewriter, 1000);
        console.log("????");
      } else {
        setTimeout(handleChangeStep, 2000);
        console.log("kkkkk");

        // setStep(2);
      }
    } else {
      setTimeout(typewriter, iSpeed);
    }
  }

  typewriter();

  return (
    <div className="first-page">
      <div className="container">
        <div className="first-line">
          <p className="text-title">Dear,</p>
          <span className="text-title">My Love</span>
          <div className="heart"></div>
        </div>
        <div id="typedtext"></div>

        {/* <p className="typing">
          You're the code of my heart, and the CSS of my HTML
        </p> */}
      </div>
    </div>
  );
};
