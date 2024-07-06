import { SetStateAction, forwardRef, useCallback, useEffect } from "react";
import "./styles.scss";

interface InputProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  shareMode: boolean;
  playing: boolean;
  run: boolean;
  candleVisible: boolean;
}

export const Name: React.FC<React.HTMLProps<HTMLInputElement> & InputProps> =
  forwardRef(
    (
      {
        name,
        setName,
        shareMode,
        playing,
        run,
        candleVisible,
        ...rest
      }: InputProps,
      ref: React.LegacyRef<HTMLInputElement>
    ) => {
      console.log("🚀 ~ playing:", playing);
      console.log("🚀 ~ shareMode:", shareMode);
      const onChange = useCallback(
        (e: { target: { value: SetStateAction<string> } }) => {
          setName(e.target.value);
          window.history.pushState({}, "", `?name=${e.target.value}`);
        },
        [setName]
      );

      useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const nameParam = urlParams.get("name");
        if (nameParam !== null) {
          setName(nameParam);
        }
      }, [setName]);

      return (
        <div
          style={{
            position: "absolute",
            top: candleVisible ? "20%" : "10%",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            justifyContent: "center",
            width: "100dvw",
            zIndex: 40,
            // flexDirection: "column",
          }}
        >
          {!shareMode && (
            <input
              id="name"
              {...{
                ref,
                style: {
                  fontFamily: "Dancing Script",
                  fontWeight: "bold",
                  fontSize: "2rem",
                  color: "red",
                  opacity: 0.9,
                  border: 0,
                  outline: 0,
                  backgroundColor: "#000000",
                  ...(shareMode || playing
                    ? {
                        appearance: "none",
                        backgroundColor: "transparent",
                        textAlign: "center",
                        display: name.length > 0 ? "block" : "none",
                      }
                    : {}),
                },
                value: name,
                onChange,
                disabled: shareMode || playing || run,
                readOnly: shareMode || playing || run,
                spellCheck: false,
                autoFocus: true,
                placeholder: "Enter your name",
                ...rest,
              }}
            />
          )}
          <div
            className={`birthday-name ${
              !candleVisible ? "change-color" : "curent-color"
            }`}
          >
            <span className="actual-text">
              &nbsp;Lê&nbsp;Thị&nbsp;Diễm&nbsp;Phượng&nbsp;
            </span>
            <span className="front-text">
              &nbsp;Lê&nbsp;Thị&nbsp;Diễm&nbsp;Phượng&nbsp;
            </span>
          </div>
        </div>
      );
    }
  );
