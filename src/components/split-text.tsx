/** Splits text into words that rise out of a mask. `load` plays on mount; otherwise it waits for an ancestor `.reveal.in`. */
export function SplitText({
  text,
  className = "",
  load = false,
  start = 0,
}: {
  text: string;
  className?: string;
  load?: boolean;
  start?: number;
}) {
  return (
    <span className={`split ${load ? "load" : ""} ${className}`}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="w">
          <span style={{ "--i": i + start } as React.CSSProperties}>{word}&nbsp;</span>
        </span>
      ))}
    </span>
  );
}
