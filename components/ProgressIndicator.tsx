export default function ProgressIndicator({ group, dark }: { group: number; dark: boolean }) {
  return (
    <div id="prog" className={group >= 0 ? "show" : ""} style={{ color: dark ? "#F5F0D8" : "#302B35" }} aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (<span key={i} className={i === group ? "a" : ""}>{`0${i + 1}`}</span>))}
    </div>
  );
}
