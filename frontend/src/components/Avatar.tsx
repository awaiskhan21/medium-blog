function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size?: "big" | "small";
}) {
  return (
    <div>
      <div
        className={`relative inline-flex items-center justify-center  overflow-hidden bg-gray-200 rounded-full ${
          size === "small" ? "w-5 h-5" : "w-10 h-10"
        }`}
      >
        <span
          className={`text-xs text-gray-600  font-light ${
            size === "small" ? "text-xs" : "text-lg"
          }`}
        >
          {name[0].toLocaleUpperCase()}
        </span>
      </div>
    </div>
  );
}

export default Avatar;
