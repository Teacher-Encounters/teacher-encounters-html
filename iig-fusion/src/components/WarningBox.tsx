import type React from "react";

type Level = "info" | "warning" | "danger";
type Props = React.PropsWithChildren & {
  level: Level;
};

function getLevelHeading(level: Level) {
  if (level === "info") {
    return "Information";
  }
  if (level === "warning") {
    return "Warning";
  }
  return "Danger";
}

function WarningBox({ level, children }: Props) {
  return (
    <div className={`${level} card`}>
      <h4>{getLevelHeading(level)}</h4>
      <div>{children}</div>
    </div>
  );
}

export default WarningBox;
